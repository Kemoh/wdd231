
// For Temples Array Object
import { temples } from "../data/temples.js";
//console.log(temples);

// For url
import { url } from "../data/temples.js";
//console.log(url);

//==GRAB A REFERENCE TO THE DIVISION WHERE WE WANT TO DISPLAY
//===THE ITEMS
const showHere = document.querySelector("#showHere");

// GET A REFERENCE TO THE HTML DIALOG ITEM
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");
myclose.addEventListener("click", () => mydialog.close());


/// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    //console.log(data);
    data.forEach(item => {
        //console.log(item);
        const photo = document.createElement("img");
        photo.src = `${url}${item.path}`;
        photo.alt = item.name;
        // Add an event listener to each division on the page
        photo.addEventListener("click", () => showStuff(item));

        showHere.appendChild(photo);
    })

} // end function

/// START DISPLAYING ALL ITEMS INTHE JSON FILE
displayItems(temples);


/// POPULATE THE DIALOG WITH INFORMATION WHEN 
// IMAGE IS CLICKED
function showStuff(item) {
    mytitle.innerHTML = item.name;
    myinfo.textContent = "Temples of Jesus Christ of Latter-day Saints around the world!"
    mydialog.showModal();
}