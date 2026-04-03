/* ============================================================
   SERENARA — GLOBAL JAVASCRIPT
   Theme, RTL, Scroll Reveal, Petals, Counters
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // THEME TOGGLE
  // ============================================================
  const savedTheme = localStorage.getItem('serenaraTheme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('serenaraTheme', next);
      updateThemeIcons(next);
    });
  });

  function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light' : 'Switch to dark');
    });
  }

  // ============================================================
  // RTL TOGGLE
  // ============================================================
  const savedDir = localStorage.getItem('serenaraDir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateRTL(savedDir);

  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('dir') || 'ltr';
      const next = cur === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', next);
      localStorage.setItem('serenaraDir', next);
      updateRTL(next);
    });
  });

  function updateRTL(dir) {
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      btn.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
    });
  }

  // ============================================================
  // MOBILE NAV
  // ============================================================
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ============================================================
  // ANIMATED COUNTERS
  // ============================================================
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = el.getAttribute('data-decimals') || 0;
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (eased * target).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ============================================================
  // FLOATING PETALS ANIMATION
  // ============================================================
  function createPetals(container) {
    if (!container) return;
    const count = 10;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div');
      petal.style.cssText = `
        position: absolute;
        width: ${8 + Math.random() * 10}px;
        height: ${8 + Math.random() * 10}px;
        background: rgba(200,169,110,${0.15 + Math.random() * 0.2});
        border-radius: 50% 0 50% 0;
        left: ${Math.random() * 100}%;
        top: -20px;
        animation: petalFall ${6 + Math.random() * 8}s linear infinite;
        animation-delay: ${Math.random() * 6}s;
        pointer-events: none;
        transform: rotate(${Math.random() * 360}deg);
      `;
      container.appendChild(petal);
    }
  }
  document.querySelectorAll('.petal-container').forEach(createPetals);

  // ============================================================
  // ACTIVE NAV LINK
  // ============================================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // ============================================================
  // PARALLAX HERO BG
  // ============================================================
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.querySelectorAll('.hero-section, .page-hero').forEach(el => {
          el.style.backgroundPositionY = `calc(center + ${scrolled * 0.25}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });

  // ============================================================
  // FORM SUBMISSION (cyber form)
  // ============================================================
  document.querySelectorAll('form.spa-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const orig = btn?.textContent;
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(() => {
        if (btn) { btn.textContent = orig; btn.disabled = false; }
        showToast('Your request has been received. We will contact you shortly.');
        form.reset();
      }, 1400);
    });
  });

  // ============================================================
  // TOAST
  // ============================================================
  window.showToast = function(msg, type = 'success') {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; t.style.transition = 'all 0.3s';
      setTimeout(() => t.remove(), 300);
    }, 3500);
  };

  // ============================================================
  // MODAL HELPERS
  // ============================================================
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });

  // ============================================================
  // PROGRESS BAR ANIMATION
  // ============================================================
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-bar-fill');
        if (fill) {
          const w = fill.getAttribute('data-width') || '0';
          setTimeout(() => { fill.style.width = w + '%'; }, 200);
        }
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.progress-bar').forEach(bar => {
    const fill = bar.querySelector('.progress-bar-fill');
    if (fill) {
      fill.setAttribute('data-width', parseInt(fill.style.width) || 80);
      fill.style.width = '0';
      progressObserver.observe(bar);
    }
  });

  // ============================================================
  // LIGHTBOX (simple)
  // ============================================================
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.cssText = `position:fixed;inset:0;background:rgba(26,18,8,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;`;
      const bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.style.cssText = `max-width:90vw;max-height:90vh;object-fit:contain;border:1px solid rgba(200,169,110,0.3);`;
      overlay.appendChild(bigImg);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });

  console.log('%c✦ SERENARA · BALI ✦', 'color:#c8a96e;font-family:Georgia,serif;font-size:14px;letter-spacing:3px;');
});
