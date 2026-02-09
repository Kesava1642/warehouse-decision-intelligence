/**
 * Shared Header Component
 * Injects the main Kalvra header into #site-header on all pages.
 */

(function() {
    'use strict';

    // Detect if we're on the root or in /pages/ for correct link paths
    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '..' : '.';
    const pagesPath = isInPagesDir ? '.' : './pages';

    const headerHTML = `
        <header class="header">
            <div class="container header-content">
                <a href="${basePath}/index.html" class="brand">
                    <img src="${basePath}/assets/images/Kalvra (1).png" alt="Kalvra" class="brand-logo">
                </a>
                <nav class="nav" aria-label="Main navigation">
                    <a href="${basePath}/index.html" class="nav-link">Home</a>
                    <a href="${pagesPath}/how-it-works.html" class="nav-link">How it works</a>
                    <a href="${pagesPath}/framework.html" class="nav-link">Framework</a>
                    <a href="${pagesPath}/business-model.html" class="nav-link">Business model</a>
                    <a href="${pagesPath}/decision-demo.html" class="nav-link">Decision demo</a>

                    <details class="nav-dropdown">
                        <summary class="nav-link">Services <span class="nav-caret" aria-hidden="true">▾</span></summary>
                        <div class="dropdown-panel">
                            <a href="${pagesPath}/use-cases.html" class="dropdown-link">Use cases</a>
                            <a href="${pagesPath}/services.html" class="dropdown-link">Emergency Services (Pilot)</a>
                            <a href="${pagesPath}/bcp-generator.html" class="dropdown-link">BCP Generator</a>
                            <a href="${pagesPath}/transport-board.html" class="dropdown-link">Transport board (Demo)</a>
                        </div>
                    </details>

                    <details class="nav-dropdown">
                        <summary class="nav-link">Pilot <span class="nav-caret" aria-hidden="true">▾</span></summary>
                        <div class="dropdown-panel">
                            <a href="${pagesPath}/early-access.html" class="dropdown-link">Pilot access</a>
                            <a href="${pagesPath}/validation.html" class="dropdown-link">Validation plan</a>
                        </div>
                    </details>

                    <a href="${pagesPath}/trust.html" class="nav-link">Trust</a>

                    <a class="nav-cta" href="mailto:founder.Kalvra@gmail.com">Contact us</a>
                </nav>
                <button type="button" class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    `;

    function setActiveNavLink() {
        const pathname = window.location.pathname;
        const segments = pathname.split('/').filter(Boolean);
        const currentPage = segments.length === 0 || segments[segments.length - 1] === 'warehouse-decision-intelligence'
            ? 'index.html'
            : segments[segments.length - 1];

        const navLinks = document.querySelectorAll('.header .nav a.nav-link');
        if (!navLinks.length) return;

        navLinks.forEach(function (link) { link.classList.remove('active'); });
        for (let i = 0; i < navLinks.length; i++) {
            const href = navLinks[i].getAttribute('href') || '';
            if (href.endsWith('/' + currentPage) || href.endsWith(currentPage)) {
                navLinks[i].classList.add('active');
                break;
            }
        }
    }

    function injectHeader() {
        try {
            const headerContainer = document.getElementById('site-header');
            if (!headerContainer) return;
            headerContainer.innerHTML = headerHTML;
            setActiveNavLink();
        } catch (e) {
            // Single concise error; avoid spamming
            console.error('Kalvra header injection failed', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectHeader);
    } else {
        injectHeader();
    }
})();

