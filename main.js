/* Fiit Advisory — main.js */

(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');

  if (toggle && nav && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.querySelector('i').className = isOpen ? 'ti ti-x' : 'ti ti-menu-2';
    });

    /* Close on nav link click */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('i').className = 'ti ti-menu-2';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('i').className = 'ti ti-menu-2';
      }
    });
  }

  /* ── Sticky nav shadow on scroll ── */
  const navEl = document.querySelector('.nav');
  if (navEl) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navEl.style.boxShadow = '0 2px 12px rgba(50,174,206,0.08)';
      } else {
        navEl.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ── Intersection observer: fade-in on scroll ── */
  const fadeTargets = document.querySelectorAll(
    '.service-card, .team-card, .hero-right, .stat-cell'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeTargets.forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

})();
