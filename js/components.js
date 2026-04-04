// ============================================================
// SERENARA — SHARED COMPONENTS (Header + Footer)
// ============================================================
(function injectComponents() {

  const headerHTML = `
  <header class="header" id="main-header">
    <nav class="navbar">
      <div class="navbar-left">
        <a href="index.html" class="brand-logo-wrap" aria-label="Bali home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
            <path d="M12 6c0 0-4 3-4 6s4 6 4 6 4-3 4-6-4-6-4-6z"/>
            <path d="M6 12h12"/>
          </svg>
        </a>
        <a href="index.html" class="brand-name">BA<span>LI</span></a>
      </div>

      <div class="navbar-center" id="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="home2.html" class="nav-link">Home 2</a>
        <a href="dashboard.html" class="nav-link">Dashboard</a>
        <a href="rooms.html" class="nav-link">Villas</a>
        <a href="spa.html" class="nav-link">Spa</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </div>

      <div class="navbar-right">
        <div class="desktop-actions">
          <button class="toggle-btn rtl-toggle" aria-label="Toggle RTL">RTL</button>
          <button class="toggle-btn theme-toggle" aria-label="Toggle theme">☀️</button>
          <a href="login.html" class="btn btn-outline login-btn" style="padding:10px 22px;font-size:0.68rem;">Login</a>
        </div>
        <button class="hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
    <div class="mobile-nav-links">
      <a href="index.html" class="nav-link">Home</a>
      <a href="home2.html" class="nav-link">Home 2</a>
      <a href="dashboard.html" class="nav-link">Dashboard</a>
      <a href="rooms.html" class="nav-link">Villas</a>
      <a href="spa.html" class="nav-link">Spa</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </div>
    <div class="mobile-actions">
      <div class="mobile-toggles">
        <button class="toggle-btn rtl-toggle" aria-label="Toggle RTL">RTL</button>
        <button class="toggle-btn theme-toggle" aria-label="Toggle theme">☀️</button>
      </div>
      <a href="login.html" class="btn btn-outline" style="width:100%; text-align:center; justify-content:center;">Login</a>
    </div>
  </nav>
  `;

  const footerHTML = `
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-grid">
        <div class="footer-col">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <div class="brand-logo-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" style="width:20px;height:20px;">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                <path d="M12 6c0 0-4 3-4 6s4 6 4 6 4-3 4-6-4-6-4-6z"/>
                <path d="M6 12h12"/>
              </svg>
            </div>
            <span class="brand-name">BA<span>LI</span></span>
          </div>
          <p style="max-width:280px;line-height:1.85;">Where ancient Balinese traditions meet modern luxury. Your sanctuary awaits amid tropical gardens and cascading rice terraces.</p>
          <div class="social-icons">
            <a href="#" class="social-icon facebook" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" class="social-icon instagram" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="social-icon twitter" aria-label="X / Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="social-icon linkedin" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Stay</h4>
          <div class="footer-links">
            <a href="rooms.html">Garden Villas</a>
            <a href="rooms.html">Clifftop Suites</a>
            <a href="rooms.html">Rice Terrace Bungalows</a>
            <a href="rooms.html">Private Pool Villas</a>
            <a href="dashboard.html">Book a Room</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Experiences</h4>
          <div class="footer-links">
            <a href="spa.html">Spa & Wellness</a>
            <a href="home2.html">Cooking Classes</a>
            <a href="home2.html">Sacred Temple Tours</a>
            <a href="home2.html">Sunrise Yoga</a>
            <a href="home2.html">Rice Terrace Walks</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Bali</h4>
          <div class="footer-links">
            <a href="about.html">Our Story</a>
            <a href="about.html">Sustainability</a>
            <a href="contact.html">Contact Us</a>
            <a href="contact.html">Press & Media</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div style="margin-top:24px;">
            <span class="section-label" style="font-size:0.65rem;">Bali, Indonesia</span>
            <p style="font-size:0.82rem;margin-top:6px;line-height:1.6;">Jl. Raya Ubud No. 88<br/>Ubud, Gianyar 80571</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>© 2026 Bali. All rights reserved. Crafted with reverence for the island.</p>
      <div class="social-icons" style="margin-top:0;">
        <a href="#" class="social-icon facebook" aria-label="Facebook"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a href="#" class="social-icon instagram" aria-label="Instagram"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg></a>
        <a href="#" class="social-icon twitter" aria-label="Twitter"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        <a href="#" class="social-icon linkedin" aria-label="LinkedIn"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
      </div>
    </div>
  </footer>
  `;

  const headerTarget = document.getElementById('header-inject');
  if (headerTarget) headerTarget.outerHTML = headerHTML;

  const footerTarget = document.getElementById('footer-inject');
  if (footerTarget) footerTarget.outerHTML = footerHTML;
})();
