/* ============================================================
   Sporting Edge — main.js
   1. Mobile navigation toggle (hamburger)
   2. Flagship Programs tab switcher (with URL hash support)
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when a link is chosen
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- Flagship tabs ---------- */
  function initTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('.tab-panel'));
    if (!tabs.length || !panels.length) return;

    function activate(name, updateHash) {
      var matched = false;
      tabs.forEach(function (tab) {
        var on = tab.getAttribute('data-tab') === name;
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        if (on) matched = true;
      });
      panels.forEach(function (panel) {
        var on = panel.getAttribute('data-panel') === name;
        panel.classList.toggle('active', on);
        panel.hidden = !on;
      });
      if (matched && updateHash && history.replaceState) {
        history.replaceState(null, '', '#' + name);
      }
      return matched;
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-tab'), true);
      });
      // Arrow-key navigation between tabs
      tab.addEventListener('keydown', function (e) {
        var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        var next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        activate(next.getAttribute('data-tab'), true);
      });
    });

    // Open the tab named in the URL hash, else default to the first tab.
    var initial = (location.hash || '').replace('#', '');
    if (!initial || !activate(initial, false)) {
      activate(tabs[0].getAttribute('data-tab'), false);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initTabs();
  });
})();
