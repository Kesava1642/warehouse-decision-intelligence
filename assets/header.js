/**
 * Premium Glass Header – KlingAI-inspired (enterprise adapted)
 * Injects main-header into #site-header with correct paths for root and /pages/.
 */
(function() {
    'use strict';

    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '..' : '.';
    const pagesPath = isInPagesDir ? '.' : './pages';

    const headerHTML = `
<header class="main-header">
  <div class="nav-container">
    <div class="logo">
      <a href="${basePath}/index.html">Kalvra</a>
    </div>

    <nav class="nav-links">
      <div class="nav-item">
        <a href="${pagesPath}/services.html">Product</a>
      </div>

      <div class="nav-item">
        <a href="${pagesPath}/how-it-works.html">How It Works</a>
      </div>

      <div class="nav-item">
        <a href="${pagesPath}/use-cases.html">Use Cases</a>
      </div>

      <div class="nav-item dropdown">
        <a href="#">Platform ▾</a>
        <div class="dropdown-menu">
          <a href="${pagesPath}/owner-dashboard.html">Owner Dashboard</a>
          <a href="${pagesPath}/services.html#decision-pack">Decision Packs</a>
          <a href="${pagesPath}/services.html#continuity">Continuity Engine</a>
          <a href="${pagesPath}/services.html#neutrality">Supplier Neutrality Logic</a>
        </div>
      </div>

      <div class="nav-item">
        <a href="${pagesPath}/about.html">About</a>
      </div>
    </nav>

    <div class="nav-right">
      <a href="${pagesPath}/contact.html" class="nav-contact">Contact</a>
      <a href="${pagesPath}/contact.html" class="nav-cta">Request Pilot</a>
    </div>
  </div>
</header>
`;

    function injectHeader() {
        const el = document.getElementById('site-header');
        if (!el) return;
        el.innerHTML = headerHTML;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectHeader);
    } else {
        injectHeader();
    }
})();
