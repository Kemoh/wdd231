// Select the DOM elements for output
// Navigation 1
const navButton1 = document.querySelector("#ham-btn-1");
const navButton2 = document.querySelector("#ham-btn-2");
const navBar1 = document.querySelector("#nav-bar-1");
const navBar2 = document.querySelector("#nav-bar-2");

// Toggle the navButton1 and the navBar1 on and off
navButton1.addEventListener('click', () => {
    navButton1.classList.toggle('show');
    navBar1.classList.toggle('show');
});

// Toggle the navButton2 and the navBar2 on and off
navButton2.addEventListener('click', () => {
    navButton2.classList.toggle('show');
    navBar2.classList.toggle('show');
});