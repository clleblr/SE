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

  /* ---------- Gallery (masonry tiles + lightbox) ---------- */
  function initGallery() {
    var grid = document.getElementById('gallery-grid');
    if (!grid) return;

    var lightbox = document.getElementById('lightbox');
    var content = document.getElementById('lightbox-content');
    var closeBtn = document.getElementById('lightbox-close');

    // When the real assets exist in images/gallery/, set this to false and the
    // tiles will point at images/gallery/photo-01.jpg .. photo-30.jpg and
    // images/gallery/video-poster-1.jpg .. video-poster-5.jpg automatically.
    var USE_PLACEHOLDERS = true;

    // Existing images reused as stand-ins until images/gallery/ is populated.
    var FALLBACK = [
      'home-hero.jpg', 'home-schools.jpg', 'home-parents.jpg', 'home-offering-curriculum.jpg',
      'home-offering-coaching.jpg', 'home-offering-camps.jpg', 'home-offering-progress.jpg',
      'home-about-1.jpg', 'home-about-2.jpg', 'home-cta.jpg', 'about-hero.jpg', 'about-team.jpg',
      'coaching-hero.jpg', 'coaching-sport-football.jpg', 'coaching-sport-basketball.jpg',
      'coaching-sport-athletics.jpg', 'coaching-sport-cricket.jpg', 'coaching-camp-annual.jpg',
      'coaching-camp-summer.jpg', 'coaching-camp-little.jpg', 'coaching-cta.jpg', 'schools-hero.jpg',
      'schools-coaching-1.jpg', 'schools-coaching-2.jpg', 'schools-coaching-3.jpg', 'schools-coaching-4.jpg',
      'schools-curriculum.jpg', 'schools-cta.jpg', 'flagship-annual-1.jpg', 'flagship-annual-2.jpg',
      'flagship-summer-1.jpg', 'flagship-summer-2.jpg', 'flagship-little-1.jpg', 'flagship-little-2.jpg',
      'why-hero.jpg', 'why-gallery-1.jpg', 'why-gallery-2.jpg', 'home-offering-progress.jpg'
    ];
    var VIDEO_IDS = ['aqz-KE-bpKQ', 'eBGIQ7ZuuiU', '5qap5aO4i9A', 'M7lc1UVf-VE', 'ScMzIvxBSi4'];

    function pad2(n) { return (n < 10 ? '0' : '') + n; }

    // Build 30 photos + 5 videos.
    var items = [];
    var i;
    for (i = 1; i <= 30; i++) {
      var real = 'images/gallery/photo-' + pad2(i) + '.jpg';
      items.push({
        type: 'photo',
        num: i,
        src: USE_PLACEHOLDERS ? 'images/' + FALLBACK[(i - 1) % FALLBACK.length] : real
      });
    }
    for (i = 0; i < VIDEO_IDS.length; i++) {
      var realPoster = 'images/gallery/video-poster-' + (i + 1) + '.jpg';
      items.push({
        type: 'video',
        num: i + 1,
        id: VIDEO_IDS[i],
        src: USE_PLACEHOLDERS ? 'images/' + FALLBACK[(30 + i) % FALLBACK.length] : realPoster
      });
    }

    // Seeded shuffle (mulberry32 PRNG + Fisher-Yates) — stable across reloads.
    var seed = 0x9E3779B9;
    function rand() {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    for (i = items.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var tmp = items[i]; items[i] = items[j]; items[j] = tmp;
    }

    var PLAY_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#262261" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

    // Render tiles.
    items.forEach(function (it) {
      var tile = document.createElement('button');
      tile.type = 'button';
      tile.className = 'gallery-tile' + (it.type === 'video' ? ' video' : '');
      var img = document.createElement('img');
      img.src = it.src;
      img.loading = 'lazy';
      img.alt = it.type === 'video'
        ? 'Sporting Edge video ' + it.num
        : 'Sporting Edge gallery photo ' + it.num;
      tile.appendChild(img);
      if (it.type === 'video') {
        tile.setAttribute('aria-label', 'Play video ' + it.num);
        tile.innerHTML += '<span class="vtag">VIDEO</span>' +
          '<span class="play"><span class="disc">' + PLAY_SVG + '</span></span>';
        tile.addEventListener('click', function () { openVideo(it.id, tile); });
      } else {
        tile.setAttribute('aria-label', 'View photo ' + it.num);
        tile.addEventListener('click', function () { openPhoto(it.src, img.alt, tile); });
      }
      grid.appendChild(tile);
    });

    // ---- Lightbox ----
    var lastFocused = null;

    function openLightbox(html, trigger) {
      lastFocused = trigger || null;
      content.innerHTML = html;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    function openPhoto(src, alt, trigger) {
      var im = document.createElement('img');
      im.src = src; im.alt = alt;
      openLightbox('', trigger);
      content.appendChild(im);
    }
    function openVideo(id, trigger) {
      var html = '<div class="frame-16x9"><iframe src="https://www.youtube.com/embed/' + id +
        '?autoplay=1&rel=0" title="Sporting Edge video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
      openLightbox(html, trigger);
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      content.innerHTML = '';           // removing the iframe stops playback
      document.body.style.overflow = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();   // click on the backdrop
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initTabs();
    initGallery();
  });
})();
