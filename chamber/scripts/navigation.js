// Select the hamburger button by using it's id and it's related ul for output.
const hamButton1 = document.querySelector('#menu-1');
const navigation1 = document.querySelector('#animateme-1');
const hamButton2 = document.querySelector('#menu-2');
const navigation2 = document.querySelector('#animateme-2');

//Add a click eventlistner to the hamburger button and a callback function that toggles the list element's list of classes.
hamButton1.addEventListener('click', () => {
	navigation1.classList.toggle('open');
	hamButton1.classList.toggle('open');
});

hamButton2.addEventListener('click', () => {
	navigation2.classList.toggle('open');
	hamButton2.classList.toggle('open');
});