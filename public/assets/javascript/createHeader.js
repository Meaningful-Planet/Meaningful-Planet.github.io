function createHeader(activePage) {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <div id="header-content">
            <a class="logo" href="/"><img src="/assets/images/logos/1.%20Logo%20-%20Horizontal/SVG/Colour%20-%20Light%20Backgrounds.svg" alt="Meaningful Planet - sustainable telecoms management platform"></a>
            <nav class="nav">
                <div class="nav__item"><a href="/">Home</a></div>
                <div class="nav__item">
                    <a href="/business">Business <span class="nav__dropdown-arrow">▼</span></a>
                    <ul class="nav__dropdown-menu">
                        <li class="nav__dropdown-item"><a href="/solutions">Business Solutions</a></li>
                        <li class="nav__dropdown-item"><a href="/contact">Get a Quote</a></li>
                    </ul>
                </div>
                <div class="nav__item">
                    <a href="/personal">Personal <span class="nav__dropdown-arrow">▼</span></a>
                    <ul class="nav__dropdown-menu">
                        <li class="nav__dropdown-item"><a href="/plans">Plans & Pricing</a></li>
                    </ul>
                </div>
                <div class="nav__item"><a href="/coverage">Coverage</a></div>
                <div class="nav__item"><a href="/impact">Our Impact</a></div>
                <div class="nav__item"><a href="/about">About Us</a></div>
                <div class="nav__item"><a href="https://user.meaningfulplanet.co.uk/sign-in">Login</a></div>
                <div class="nav__item"><a href="/contact" class="secondary">Get a Quote</a></div>
            </nav>
            <a id="menu" onClick="openMobileMenu()"><img id="logo" src="/assets/images/icons/menu.svg"></a>
        </div>

        <div class="nav-mobile">
            <div class="nav-mobile__item"><a href="/">Home</a></div>

            <div class="nav-mobile__item">
                <button class="nav-mobile__dropdown-toggle" data-target="businessDropdown">
                    Business <span class="nav-mobile__dropdown-arrow">▼</span>
                </button>
                <ul class="nav-mobile__dropdown-menu" id="businessDropdown">
                    <li class="nav-mobile__dropdown-item"><a href="/business">Business</a></li>
                    <li class="nav-mobile__dropdown-item"><a href="/solutions">Business Solutions</a></li>
                    <li class="nav-mobile__dropdown-item"><a href="/contact">Get a Quote</a></li>
                </ul>
            </div>

            <div class="nav-mobile__item">
                <button class="nav-mobile__dropdown-toggle" data-target="personalDropdown">
                    Personal <span class="nav-mobile__dropdown-arrow">▼</span>
                </button>
                <ul class="nav-mobile__dropdown-menu" id="personalDropdown">
        <li class="nav-mobile__dropdown-item"><a href="/personal">Personal</a></li>
                    <li class="nav-mobile__dropdown-item"><a href="/plans">Plans & Pricing</a></li>
                </ul>
            </div>

            <div class="nav-mobile__item"><a href="/coverage">Coverage</a></div>
            <div class="nav-mobile__item"><a href="/impact">Our Impact</a></div>
            <div class="nav-mobile__item"><a href="/about">About Us</a></div>
            <div class="nav-mobile__item"><a href="https://user.meaningfulplanet.co.uk/sign-in">Login</a></div>
            <div class="nav-mobile__item"><a href="/contact" class="cta">Get a Quote</a></div>
            <div class="nav-mobile__item"><a onClick="closeMobileMenu()"><img class="nav-mobile__close-icon" src="/assets/images/icons/x.svg"></a></div>
        </div>
    `;

    // Only highlight an active link if activePage is defined and not null
    if (activePage) {
        header.querySelectorAll('nav a').forEach(link => {
            if (link.innerText.trim().toLowerCase() === activePage.trim().toLowerCase()) {
                link.classList.add('active');
            }
        });
    }

    const scriptTag = document.currentScript;
    scriptTag.parentNode.insertBefore(header, scriptTag.nextSibling);

    window.addEventListener('scroll', function() {
        var trustPilot = document.getElementById('trustpilot');
        var centredHeader = document.getElementById('centred-header');
        var contactForm = document.querySelector('.sib-form');
        
        if (window.scrollY > 20) {
            header.classList.add('fixed');
            if (trustPilot) { trustPilot.classList.add('fixed'); }
            if (centredHeader) { centredHeader.classList.add('fixed'); }
            if (contactForm) { contactForm.classList.add('fixed'); }
        } else {
            header.classList.remove('fixed');
            if (trustPilot) { trustPilot.classList.remove('fixed'); }
            if (centredHeader) { centredHeader.classList.remove('fixed'); }
            if (contactForm) { contactForm.classList.remove('fixed'); }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.nav-mobile__dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);

            this.classList.toggle('active');
            dropdown.classList.toggle('active');
        });
    });
});

function openMobileMenu() {
    var sidebar = document.querySelector(".nav-mobile");
    sidebar.classList.toggle('open');

    // If sidebar is open, set body overflow to hidden. If not, set it to auto.
    let sidebarIsOpen = sidebar.classList.contains('open');
    document.body.style.overflow = sidebarIsOpen ? 'hidden' : 'auto';
    // document.getElementById("container").style.opacity = sidebarIsOpen ? 0.3 : 1
}

function closeMobileMenu() {
    var sidebar = document.querySelector(".nav-mobile");
    sidebar.classList.remove('open');

    document.body.style.overflow = 'auto';
    // document.getElementById("container").style.opacity = 1
}
