// Get the stored VALUE for the numberVisits-ls KEY in localStorage if it exists. If the numberVisits-ls KEY is missing, than assign 0 to the numberVisits variable.
let vistednum = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

// Get the HTML element where you want to display the visit count
const numVisits = document.querySelector('.num-visits');

// Determine if this is the first visit or display the number of visits
if (numVisits) { // Check if the element was found
    if (vistednum !== 0) {
        numVisits.textContent = vistednum + 1;
    } else {
        numVisits.textContent = 'This is your first visit. Welcome!';
    }
}


// Increment the number of visits by one
vistednum++;

// Store the new visit total into localStorage, key=numberVisits-ls
localStorage.setItem('numberVisits-ls', vistednum);




// Hidden Time Stamp

// Set current date and time using toLocalDateString() and to toLocalTimeString() methods
document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM element and assign it to a variable
    let hiddenInput = document.getElementById('current-date-time');

    // Get current date
    const now = new Date(); 

    // Set up the date format object parameter for toLocalDateString method
    const dateOptions = {
        // weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    const datePart = now.toLocaleDateString('en-GB', dateOptions).replace(/\//g, '-');

    // Set up the time format object parameter for toLocalDateString method
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const timePart = now.toLocaleTimeString('en-GB', timeOptions);

    // Combine date and time
    const timeStamp = `${datePart} ${timePart};`
    
    // Display timestamp
    if (timeStamp) {
    console.log(`Form was loaded at: ${timeStamp}`); 
    } else {
        console.log('No timestamp found in URL.');
    };

    // Set hidden input value
    hiddenInput = timeStamp;

});
