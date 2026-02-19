/**
 * Premium Glass Header – logo mark, polish, path-aware links.
 * Logo priority: assets/logo.*, assets/brand/logo.*, assets/brand/kalvra*.*, assets/favicon.svg.
 * Detected in repo: assets/brand/kalvra-mark.svg (fallback: assets/favicon.svg).
 */
(function() {
    'use strict';

    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '..' : '.';
    const pagesPath = isInPagesDir ? '.' : './pages';
    const LOGO_PATH = 'assets/brand/kalvra-mark.svg';

    const headerHTML = `
<header class="main-header">
  <div class="nav-container">
    <a class="brand" href="${basePath}/index.html" aria-label="Kalvra Home">
      <img class="brand-mark" src="${basePath}/${LOGO_PATH}" alt="Kalvra logo" />
      <span class="brand-name">Kalvra</span>
    </a>

    <nav class="nav-links" aria-label="Primary navigation">
      <a class="nav-link" href="${pagesPath}/services.html">Product</a>
      <a class="nav-link" href="${pagesPath}/how-it-works.html">How It Works</a>
      <a class="nav-link" href="${pagesPath}/use-cases.html">Use Cases</a>

      <div class="nav-item dropdown dropdown--platform">
        <button class="nav-link nav-link--button" type="button" aria-haspopup="true" aria-expanded="false" data-dropdown="platform">
          Platform <span class="chev">▾</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a role="menuitem" href="${pagesPath}/owner-dashboard.html">Owner Dashboard</a>
          <a role="menuitem" href="${pagesPath}/services.html#decision-pack">Decision Packs</a>
          <a role="menuitem" href="${pagesPath}/services.html#continuity">Continuity Engine</a>
          <a role="menuitem" href="${pagesPath}/services.html#neutrality">Supplier Neutrality Logic</a>
        </div>
      </div>

      <a class="nav-link" href="${pagesPath}/about.html">About</a>
      <a class="nav-link" href="${pagesPath}/contact.html">Contact</a>
    </nav>

    <div class="nav-right">
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
