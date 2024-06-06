document.addEventListener('DOMContentLoaded', () => {
    // Elementenselectie + Gebruik van constanten
    const subscribeForm = document.getElementById('newsletter-form');
    const projectElements = document.querySelectorAll('.project img');
    const banner = document.getElementById('main-banner');
    const navbarTitle = document.getElementById('headertitle');
    const projectTitles = [];

    // Event listener for form submission
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });

    // Iteratie over een array
    projectElements.forEach((project, index) => {
        projectTitles.push(project.alt);
        // Event listener voor het clicken van projecten
        project.addEventListener('click', () => {
            alert(`Je hebt geklikt op ${project.alt}`);
        });
        // Event listener voor het hoveren over projecten
        project.addEventListener('mouseover', () => {
            // Elementen manipuleren: texten website aanpassen bij weghoveren van een project
            banner.querySelector('h2').textContent = projectTitles[index];
            banner.querySelector('p').textContent = `Dit is het omschrijving van ${projectTitles[index]}.`;
            navbarTitle.textContent = `Mijn portfolio (${projectTitles[index]})`;
        });
        // Event listener voor het weg hoveren van projecten
        project.addEventListener('mouseleave', () => {
            // Elementen manipuleren: texten website aanpassen bij aanklikken van een project
            banner.querySelector('h2').textContent = "Welkom op mijn Portfolio";
            banner.querySelector('p').textContent = `Hier kunt u al mijn fotografieprojecten zien.`;
            navbarTitle.textContent = `Mijn portfolio`;
        });
    });

    // Form validatie
    function validateForm() {
        const emailInput = subscribeForm.querySelector('input[type="email"]').value;
        if (validateEmail(emailInput)) {
            alert('Subscription successful!');
        } else {
            alert('Invalid email address.');
        }
    }

    // Email validatie
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Gebruik van constanten
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

    // Arrow function
    const showMessage = (msg) => console.log(msg);

    // Template literals
    const message = `Fetchen van test data uit test api ${API_URL}`;
    showMessage(message);

    // Destructuring
    const [project1, project2, project3] = ['Project 1', 'Project 2', 'Project 3'];

    // Spread & Rest operator
    const projects = [...document.querySelectorAll('.project img')];
    function logProjects(...projectNames) {
        projectNames.forEach(name => console.log(name));
    }
    logProjects(project1, project2, project3);
    console.log("");
    logProjects(...projectTitles);

    // Callback function
    function fetchData(callback) {
        setTimeout(() => {
            callback(projectTitles);
        }, 1000);
    }
    fetchData((data) => {
        console.log('Data gefetcht:', data);
    });

    // Promise
    const fetchPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved!');
        }, 2000);
    });
    fetchPromise.then(res => console.log(res));

    // Async & Await
    async function fetchDataAsync() {
        const data = await fetchPromise;
        console.log('Async/Await:', data);
    }
    fetchDataAsync();

    // Self executing function
    (function () {
        console.log('IIFE executed, ' + projectTitles);
    })();

    // Fetch data
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => console.error('Error fetching data:', error));
});
