function createHeader(activePage) {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <div id="header-content">
            <a class="logo" href="/"><img src="images/logos/1. Logo - Horizontal/SVG/Colour - Light Backgrounds.svg" alt="Meaningful Planet - sustainable telecoms management platform"></a>
            <nav class="nav">
                <a href="index.html">Home</a>
                <a href="solutions.html">Solutions</a>
                <a href="impact.html">Our Impact</a>
                <a href="about.html">About Us</a>
                <a href="https://user.meaningfulplanet.co.uk/sign-in">Login</a>
                <a href="contact.html" class="secondary">Get a Quote</a>
            </nav>
            <a id="menu" onClick="openMobileMenu()"><img id="logo" src="images/icons/menu.svg"></a>
        </div>

        <div id="side-menu">
            <a href="index.html">Home</a>
            <a href="solutions.html">Solutions</a>
            <a href="impact.html">Our Impact</a>
            <a href="about.html">About Us</a>
            <a href="https://user.meaningfulplanet.co.uk/sign-in">Login</a>
            <a href="contact.html" class="cta">Get a Quote</a>
            <a id="close" onClick="closeMobileMenu()"><img src="images/icons/x.svg"></a>
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

function openMobileMenu() {
    var sidebar = document.getElementById("side-menu");
    sidebar.classList.toggle('open');

    // If sidebar is open, set body overflow to hidden. If not, set it to auto.
    let sidebarIsOpen = sidebar.classList.contains('open');
    document.body.style.overflow = sidebarIsOpen ? 'hidden' : 'auto';
    // document.getElementById("container").style.opacity = sidebarIsOpen ? 0.3 : 1
}

function closeMobileMenu() {
    var sidebar = document.getElementById("side-menu");
    sidebar.classList.remove('open');

    document.body.style.overflow = 'auto';
    // document.getElementById("container").style.opacity = 1
}