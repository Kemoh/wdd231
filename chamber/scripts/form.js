document.addEventListener('DOMContentLoaded', function() {
    const timestampInput = document.getElementById('#timestampInput');
    if (timestampInput) {
        timestampInput.value = Date.now();
    }
});


// Get the DOM div element for showing the results of the form inputs
// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

document.querySelector("#result").innerHTML = `
<p>Your first name is: ${myInfo.get('firstName')}<p/>
<p>Your last name is: ${myInfo.get('lastName')}<p/>
<p>Your email is: ${myInfo.get('email')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your organization's title is: ${myInfo.get('Organizational Title')} </P>
<p>Your registered business/organizatio's name is: ${myInfo.get('Business Name')} </P>
<p>Your brief business/organization's description is: ${myInfo.get('Business Description')} </P>
<p>Your membership level selected is: ${myInfo.get('Membership Level')}</P>
<p>The date and time that the form was uploaded is: ${myInfo.get('timestamp')}</P>
`