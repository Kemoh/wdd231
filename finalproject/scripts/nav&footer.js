// Start Navigation

// Select the navigation DOM elements for output
const hamButton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#animateme");

// Toggle the hamButton and the navBar on and off
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// End Navigation

//Start Footer
// Select the DOM elements for output
const currentYear = document.querySelector('.copyYear');
const lastModifiedDate = document.querySelector(".lastModified");

// Set up the date format object parameter for toLocaleDateString method
const copyrightYear = {year: "numeric"};

// Inserting date into DOM
currentYear.innerHTML = `<span>&copy; ${new Date().toLocaleDateString("en-UK", copyrightYear)} &bull; Umaru Bayoh &bull; Freetown &bull; Sierra Leone</span>`;

// Set up the date format object for last modification date for toLocalDateString method

// Use the lastModified property of the document interface 
const lastModif = document.lastModified.replace(/\//g, '-');

// Inserting last modification date into DOM
lastModifiedDate.innerHTML = `<span>Last Modification: ${lastModif}</span>`;

// End Footer