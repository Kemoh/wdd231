// Select the hamburger button by using it's id and it's related ul for output.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animateme');

//Add a click eventlistner to the hamburger button and a callback function that toggles the list element's list of classes.
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});