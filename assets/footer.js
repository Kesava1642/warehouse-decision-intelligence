/**
 * Shared Footer Component
 * Injects consistent footer HTML across all pages
 */

(function() {
    'use strict';

    // Detect if we're on the root or in /pages/
    const isInPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isInPagesDir ? '..' : '.';
    const pagesPath = isInPagesDir ? '.' : './pages';

    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-inner">
                <div class="footer-simple">
                    <div class="footer-brand-section">
                        <p class="footer-wordmark">ClarityOps</p>
                        <p class="footer-mission">Independent decision intelligence</p>
                    </div>
                    <div class="footer-contact">
                        <a href="mailto:founder.clarityops@gmail.com" class="footer-email">founder.clarityops@gmail.com</a>
                    </div>
                    <nav class="footer-legal-links">
                        <a href="${pagesPath}/privacy.html">Privacy</a>
                        <span class="footer-sep">·</span>
                        <a href="${pagesPath}/terms.html">Terms</a>
                        <span class="footer-sep">·</span>
                        <a href="${pagesPath}/refunds.html">Refunds</a>
                    </nav>
                    <p class="footer-copyright">© 2026 ClarityOps</p>
                </div>
            </div>
        </footer>
    `;

    // Inject footer when DOM is ready
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
