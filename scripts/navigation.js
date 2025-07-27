// Select the DOM elements for output
const navButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

// Toggle the navButton and the navBar on and off
navButton.addEventListener('click', () =>{
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

