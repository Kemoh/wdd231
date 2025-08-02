// Select DOM elements for output
// const openButton = document.querySelector('#openButton');
// const dialogBox = document.querySelector('#dialogBox');
// const closeButton = document.querySelector('#closeButton');

// // Add event listner to the closeButton to show the dialogBox
// openButton.addEventListener('click', () => {
//     dialogBox.showModal();
// });

// // Add an event listner to the closeButton to close the dialogBox
// closeButton.addEventListener('click', () => {
//     dialogBox.close();
// });



// Resuse dialogBox Example Script
// Select DOM elements for output
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

// Add event listner to the closeButton to show the dialogBox
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Here is your info-1 message.`;
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Here is your info-2 message.`;
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Here is your info-3 message.`;
});

// Add an event listner to the closeButton to close the dialogBox
closeButton.addEventListener('click', () => {
    dialogBox.close();
});