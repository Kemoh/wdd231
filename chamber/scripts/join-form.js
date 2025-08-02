
// FORM SECTION
// Select the DOM element to output results
// const getString = window.location.search;
// console.log(getString);

// Use the URLSearchParams object to display the information
const myInfo = new URLSearchParams(window.location.search);
//console.log(myInfo);

// Select the DOm element in the thanks.html to display info in the thanks.html page instead of the console
document.querySelector('#results').innerHTML = `<p>Your first name is: ${myInfo.get('first')}</P>
<p>Your last name is: ${myInfo.get('last')}</P>
<p>Your title is: ${myInfo.get('organization-title')}</P>
<p>Your email address is: ${myInfo.get('email')}</P>
<p>Your contact number is: ${myInfo.get('phone')}</P>
<p>The name of your organization is: ${myInfo.get('organization')}</P>
<p>A brief description of your organization is: ${myInfo.get('description')}</P>`


// Set current date and time using toLocalDateString() and to toLocalTimeString() methods
document.addEventListener('DOMContentLoaded', () => {
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

    // Set hidden input value
    document.getElementById('current-date-time').value = timeStamp;

    // Display timestamp
    if (timeStamp) {
    console.log(`Form was loaded at: ${timeStamp}`); 
    } else {
        console.log('No timestamp found in URL.');
    };
});
