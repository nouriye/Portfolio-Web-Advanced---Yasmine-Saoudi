document.addEventListener('DOMContentLoaded', () => {
    // Element selection
    const subscribeForm = document.getElementById('newsletter-form');
    const projectElements = document.querySelectorAll('.project img');
    const banner = document.getElementById('main-banner');
    const navbarTitle = document.getElementById('headertitle');
    const projectTitles = [];

    // Event listener for project image clicks
    projectElements.forEach((project, index) => {
        projectTitles.push(project.alt);
        project.addEventListener('click', () => {
            alert(`Je hebt geklikt op ${project.alt}`);
        });
        project.addEventListener('mouseover', () => {
            // Elementen manipuleren: texten website aanpassen bij weghoveren van een project
            banner.querySelector('h2').textContent = projectTitles[index];
            banner.querySelector('p').textContent = `Dit is het omschrijving van ${projectTitles[index]}.`;
            navbarTitle.textContent = `Mijn portfolio (${projectTitles[index]})`;
        });
        project.addEventListener('mouseleave', () => {
            // Elementen manipuleren: texten website aanpassen bij aanklikken van een project
            banner.querySelector('h2').textContent = "Welkom op mijn Portfolio";
            banner.querySelector('p').textContent = `Hier kunt u al mijn fotografieprojecten zien.`;
            navbarTitle.textContent = `Mijn portfolio`;
        });
    });
});
