function setupCarousel(projects) {
    const slideContainer = document.querySelector('.carousel-slide-container');

    slideContainer.innerHTML = '';  // Clear any existing slides

    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');

        // Generate tags dynamically from the project data
        const tagsHTML = project.Tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        slide.innerHTML = `
            <img src="/assets/images/project-images/${project.Image}" class="slide-image" alt="${project.Title}">
            <div class="slide-content">
                <img src="/assets/images/logos/${project.Logo}" class="slide-logo" alt="${project.Title}">
                <h2>${project.Title}</h2>
                <p>${project.Description}</p>
                <div class="tags">
                    ${tagsHTML}
                </div>
            </div>
        `;

        slideContainer.appendChild(slide);
    });

    // Setup carousel logic after slides are injected
    setupCarouselControls(projects.length);
}

function setupCarouselControls(totalSlides) {
    let currentIndex = 0;
    const slideContainer = document.querySelector('.carousel-slide-container');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Clear existing dots (if re-run)
    dotsContainer.innerHTML = '';

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active'); // First slide starts active
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveDot();
    }

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Initial state
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/javascript//projects.json')
        .then(response => response.json())
        .then(projects => {
            // Choose specific projects you want to show (example indices 0, 1, 2)
            const selectedIndices = [2, 9, 4];
            const selectedProjects = selectedIndices.map(index => projects[index]);

            setupCarousel(selectedProjects);
        })
        .catch(error => console.error('Error loading projects:', error));
});
