// FORM SECTION
// Select the DOM element to output results
const getString = window.location.search;
//console.log(getString);


//Use the URLSearchParams object to display the information
const myInfo = new URLSearchParams(window.location.search);
//console.log(myInfo);


// Select the DOM element in the menu.html to display info in the thanks.html page instead of the console
document.querySelector('#order-request').innerHTML = `
<p>Your ordered food item is: ${myInfo.get('food-item')}</P>
<p>The price for the ordered food item is: ${myInfo.get('food-price')}</P>
<p>Your first name is: ${myInfo.get('first')}</P>
<p>Your last name is: ${myInfo.get('last')}</P>
<p>Your phone number is: ${myInfo.get('phone')}</P>
<p>Your ordered date is: ${myInfo.get('date')}</P>
<p>Your address for delivery is: ${myInfo.get('address')}</P>
<p>Your location area is: ${myInfo.get('location')}</P>`


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




