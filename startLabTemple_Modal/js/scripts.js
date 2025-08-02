import {temples} from '../data/temples.js';
console.log(temples);

import {url} from '../data/temples.js';
//console.log(url);

// Select the DOM element to display images
const showHere = document.querySelector('#showHere');
// Select the DOM elements for the dialog
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const dedicatedYear = document.querySelector('#dedicated-date');
const dedicatedPerson = document.querySelector('#dedicated-person');
const templeNumber = document.querySelector('#temple-number');
const myclose = document.querySelector('#mydialog button');
// Add an event listner to the myclose button
myclose.addEventListener('click', () => mydialog.close());

// Create a function to loop through the temples array
function displayTemples(data) {
    data.forEach(temple => {console.log(temple);
        const photo = document.createElement('img');
        photo.src = `${url}${temple.path}`;
        photo.alt = `${temple.name}`;
        // Add an event listner to each photo
        photo.addEventListener('click', () => showStuff(temple));
        
        showHere.appendChild(photo);
    }) //end loop
} // End function

// Call the displayTemples function to strat to display items of the JSON file
displayTemples(temples)


// Populate the dialog with information when image is clicked
function showStuff(temple) {
    mytitle.innerHTML = temple.name;
    dedicatedPerson.innerHTML = `Name: ${temple.person}`;
    dedicatedYear.innerHTML = `Dedicated: ${temple.dedicated}`;
    templeNumber.innerHTML = `Temple Number: ${temple.number}`;
    mydialog.showModal();
}