document.addEventListener('DOMContentLoaded', () => {
    // Elementen selecteren
    const projectElements = document.querySelectorAll('.project img');

    // Event aan elementen koppelen
    projectElements.forEach(project => {
        project.addEventListener('click', () => {
            alert(`Je hebt geklikt op ${project.alt}`);
        });
    });
});
