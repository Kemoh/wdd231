// Select the navigation DOM elements for output
const hamButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#animateme");

// Toggle the hamButton and the navBar on and off
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});
