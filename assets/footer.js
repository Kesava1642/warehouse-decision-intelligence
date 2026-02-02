/**
 * Shared Footer Component
 * Injects the original 5-column dark footer (matches design: Main, Product, Services, Get started, Trust + brand + subscribe)
 */

(function() {
    'use strict';

    // Detect if we're on the root or in /pages/ for correct link paths
    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '..' : '.';
    const pagesPath = isInPagesDir ? '.' : './pages';

    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-inner">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4>Main</h4>
                        <a href="${basePath}/index.html">Home</a>
                        <a href="${pagesPath}/how-it-works.html">How it works</a>
                        <a href="${pagesPath}/framework.html">Framework</a>
                    </div>
                    <div class="footer-col">
                        <h4>Product</h4>
                        <a href="${pagesPath}/decision-demo.html">Decision demo</a>
                        <a href="${pagesPath}/transport-board.html">Transport board</a>
                    </div>
                    <div class="footer-col">
                        <h4>Validation</h4>
                        <a href="${pagesPath}/validation.html">Validation</a>
                        <a href="${pagesPath}/business-model.html">Business model</a>
                        <a href="${pagesPath}/about.html">About</a>
                    </div>
                    <div class="footer-col">
                        <h4>Get started</h4>
                        <a href="${pagesPath}/early-access.html">Early access</a>
                        <a href="${pagesPath}/trust.html">Trust</a>
                    </div>
                </div>
                <div class="footer-divider"></div>
                <div class="footer-bottom">
                    <div class="footer-brand">
                        <p class="footer-wordmark">ClarityOps</p>
                        <p class="footer-mission">UK-focused warehouse decision intelligence</p>
                        <p class="footer-contact-email">Email: <a href="mailto:founder.clarityops@gmail.com">founder.clarityops@gmail.com</a></p>
                        <p class="footer-contact-location">Location: Basildon, Essex, United Kingdom</p>
                    </div>
                    <div class="footer-legal">
                        <a href="${pagesPath}/privacy.html">Privacy</a>
                        <span class="footer-sep">·</span>
                        <a href="${pagesPath}/terms.html">Terms</a>
                        <span class="footer-sep">·</span>
                        <a href="${pagesPath}/refunds.html">Refunds</a>
                    </div>
                    <p class="footer-copyright">© 2026 ClarityOps</p>
                </div>
            </div>
        </footer>
    `;

    function injectFooter() {
        const footerContainer = document.getElementById('site-footer');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
