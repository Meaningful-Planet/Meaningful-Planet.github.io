function scrollToSection(id, behavior = 'smooth') {
    let y = 0;
    var isMobile = window.innerWidth < 1280;
    var yOffset = isMobile ? -100 : -160;
    let section = document.querySelector(`#${id}`);
    y = section.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: behavior });
    closeMobileMenu();
}