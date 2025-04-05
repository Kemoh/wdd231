import {places} from "../data/places.mjs";
console.log(places);

// Grab the div element in the html to display the places photo
const showPlaces = document.querySelector("#showPlaces");

// Create a function that loops through the items of json items
function displayItems(places) {
    places.forEach(place => {
        // Create the card container
        const theCard = document.createElement("div");
        // Create an image element for the places photo
        const photo = document.createElement("img");
        // Set attributes for the image element
        photo.src = `images/${place.photo_link}`;
        photo.alt = place.name;
        // Append photo to the theCard
        theCard.appendChild(photo);

        // Build the title of the photo
        const photoTitle = document.createElement("h2");
        photoTitle.textContent = place.name;
        theCard.appendChild(photoTitle);

        // Build the  address of the photo
        const theAddress = document.createElement("address");
        theAddress.innerText = place.address; 
        theCard.appendChild(theAddress);

        // Build the description of the photo
        const theDescription = document.createElement("p");
        theDescription.innerText = place.description;
        theCard.appendChild(theDescription);

        // Pass theCard over to the div container - showPlaces
        showPlaces.appendChild(theCard);

    });
}

// Display all the items in the places JSON file
displayItems(places);



