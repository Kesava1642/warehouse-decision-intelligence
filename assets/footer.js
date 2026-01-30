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
                        <a href="${pagesPath}/use-cases.html">Use cases</a>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4>
                        <a href="${pagesPath}/services.html">Emergency Services</a>
                        <a href="${pagesPath}/transport-board.html">Transport board</a>
                    </div>
                    <div class="footer-col">
                        <h4>Get started</h4>
                        <a href="${pagesPath}/early-access.html">Early access</a>
                    </div>
                    <div class="footer-col">
                        <h4>Trust</h4>
                        <a href="${pagesPath}/trust.html">Trust</a>
                    </div>
                </div>
                <div class="footer-divider"></div>
                <div class="footer-bottom">
                    <div class="footer-brand">
                        <p class="footer-wordmark">Warehouse Decision Intelligence</p>
                        <p class="footer-mission">UK-focused warehouse decision intelligence</p>
                    </div>
                    <form class="footer-subscribe" action="#" method="post" aria-label="Email signup">
                        <div class="footer-subscribe-row">
                            <input type="email" name="email" placeholder="Email address" required aria-label="Email address">
                            <button type="submit" class="footer-submit">Submit</button>
                        </div>
                        <p class="footer-note">By signing up, I agree with the data policy.</p>
                    </form>
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
