// Gte the URL string for thanks.html page after the form submitted
const getString = window.location.search;
//console.log(getString);

// Use the URLSearchParams object to display the information
const myInfo = new URLSearchParams(getString);
//console.log(myInfo);

// Get information from myInfo string
// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));

// Select the DOm element in the thanks.html to display info in the thanks.html page instead of the console
document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}.</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the location ${myInfo.get('location')}.</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your email: ${myInfo.get('email')}</p>`