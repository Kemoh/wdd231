
// For Temples Array Object
import { temples } from "../data/temples.js";
//console.log(temples);

// For url
import { url } from "../data/temples.js";
//console.log(url);

//===========GRAB A REFERENCE TO THE DIVISION WHERE WE WANT TO DISPLAY
//===========THE ITEMS
const showHere = document.querySelector("#showHere");

//============GET AREFERENCE TO THE HTML DIALOG item
const mydialog = document.querySelector("#mydialog");
const myTitle = document.querySelector("#mydialog h2");
const myInfo = document.querySelector("#mydialog p");
const myClose = document.querySelector("#mydialog button");
myClose.addEventListener("click", () => mydialog.closest());


///============LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    //console.log(data);
    data.forEach(item => {
        //console.log(item);
        const photo = document.createElement("img");
        photo.src = `${url}${item.path}`;
        photo.alt = item.name;

        showHere.appendChild(photo);
        
    })

} // end function

///=======START DISPLAYING ALL ITEMS INTHE JSON FILE
displayItems(temples);