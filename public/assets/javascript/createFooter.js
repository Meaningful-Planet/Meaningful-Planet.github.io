function createFooter() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="content">
            <div class="top">
                <div class="left">
                    <img src="/assets/images/logos/1.%20Logo%20-%20Horizontal/SVG/White.svg" alt="Meaningful Planet - sustainable telecoms management platform" class="logo">

                    <div class="socials">
                        <a target="_blank" href="https://www.linkedin.com/company/meaningful-planet/"><img src="/assets/images/social/social-linkedin.svg" alt="Follow Meaningful Planet on LinkedIn"></a>
                    </div>

                    <p id="locations">Isle of Wight • Cambridge • Inverness • London</p>
                </div>

                <div class="right">
                    <nav class="footer-nav">
                        <a href="https://www.meaningfulplanet.co.uk/articles">Articles</a>
                        <a href="https://help.meaningfulplanet.co.uk/en/">FAQs</a>
                        <a href="terms-and-conditions.html">Privacy Policy</a>
                        <a href="https://help.meaningfulplanet.co.uk/en/">Customer Support</a>
                    </nav>
                </div>
            </div>

            <div class="bottom">
                <div>
                    <p>© Meaningful Planet ${currentYear}</p>
                    <p>All Rights Reserved</p>
                </div>
                <img src="/assets/images/logos/b-corp-pending-white.png" alt="B Corp pending certification - sustainable business practices" class="certified">
            </div>
        </div>
    `;

    const scriptTag = document.currentScript;
    scriptTag.parentNode.insertBefore(footer, scriptTag.nextSibling);
}
