function createFooter() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.innerHTML = `
        <div class="content">
            <div class="top">
                <div class="left">
                    <img src="images/logos/1.%20Logo%20-%20Horizontal/SVG/White.svg" alt="Meaningful Planet - sustainable telecoms management platform" class="logo">

                    <div class="socials">
                        <a target="_blank" href="https://www.linkedin.com/company/meaningful-planet/"><img src="images/social/social-linkedin.svg" alt="Follow Meaningful Planet on LinkedIn"></a>
                    </div>

                    <p id="locations">Isle of Wight • Cambridge • Inverness • London</p>
                </div>

                <div class="right">
                    <nav class="footer-nav">
                        <a href="index.html">Home</a>
                        <a href="coverage.html">Coverage</a>
                        <a href="impact.html">Our Impact</a>
                        <a href="about.html">About Us</a>
                        <a href="https://user.meaningfulplanet.co.uk/sign-in">Login</a>
                    </nav>
                </div>
            </div>

            <div class="bottom">
                <div>
                    <p>© Meaningful Planet ${currentYear}</p> <!-- Dynamically insert year -->
                    <p>All Rights Reserved</p>
                </div>
                <img src="images/logos/b-corp-pending-white.png" alt="B Corp pending certification - sustainable business practices" class="certified">
            </div>
        </div>
    `;

    const scriptTag = document.currentScript;
    scriptTag.parentNode.insertBefore(footer, scriptTag.nextSibling);
}
