function loadProjectCards() {
    const container = document.getElementById('projects-container');

    if (container !== null) {

        fetch('/assets/javascript/projects.json')
            .then(response => response.json())
            .then(projects => {
                projects.forEach(project => {
                    const card = document.createElement('div');
                    card.classList.add('project-card');

                    // Project Image
                    const image = document.createElement('img');
                    image.src = `images/project-images/${project.Image}`;
                    image.alt = project.Title;
                    image.classList = ["project-image"]

                    // Project Title
                    const title = document.createElement('h3');
                    title.textContent = project.Title;
                    title.classList = ["project-header"];

                    // Project Description
                    const description = document.createElement('p');
                    description.textContent = project.Description;

                    // Project Logo inside a parent wrapper
                    const logoWrapper = document.createElement('div');
                    logoWrapper.classList.add('logo-wrapper');

                    const logo = document.createElement('img');
                    logo.classList.add('logo');
                    logo.src = `images/logos/${project.Logo}`;

                    logoWrapper.appendChild(logo);

                    // Tags Container
                    const tagsContainer = document.createElement('div');
                    tagsContainer.classList.add('tags');
                    project.Tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.classList.add('tag');
                        tagElement.classList.add(tag.replaceAll(" ", "-").toLowerCase());
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });

                    // Append all elements to the card
                    card.appendChild(image);
                    card.appendChild(logoWrapper);   // Use the wrapper here
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(tagsContainer);

                    // Add the card to the container
                    container.appendChild(card);
                });
            })
            .catch(error => console.error('Failed to load projects:', error));
    }
}

// Call this function when the page loads or wherever you want the cards to appear
window.onload = loadProjectCards;
