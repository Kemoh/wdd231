import {places} from "../data/places.mjs";
console.log(places);

// Grab the div element in the html to display the places photo
const showPlaces = document.querySelector("#showPlaces");

// Create a function that loops through the items of json items
function displayItems(places) {
    places.forEach(place => {
        // Create the card container
        const theCard = document.createElement("div");

        // Create  a figure element
        const figure = document.createElement("figure");
        
        // Create an image element for the places photo
        const photo = document.createElement("img");
        // Set attributes for the image element
        photo.src = `images/${place.photo_link}`;
        photo.alt = place.name;
        photo.classList.add('hover-effect');

        // Append the photo to the figure
        figure.appendChild(photo);
        
        // Append figure to the theCard
        theCard.appendChild(figure);

        // Build the title of the photo
        const photoTitle = document.createElement("h2");
        photoTitle.textContent = place.name;
        theCard.appendChild(photoTitle);

        // Build the  address of the photo
        const theAddress = document.createElement("p");
        theAddress.innerText = place.address; 
        theAddress.classList.add("first-p")
        theCard.appendChild(theAddress);

        // Build the description of the photo
        const theDescription = document.createElement("p");
        theDescription.innerText = place.description;
        theDescription.classList.add("second-p");
        theCard.appendChild(theDescription);

        // Create a Learn More Button
        const learnButton = document.createElement("button");
        learnButton.innerHTML = "Learn More";
        theCard.appendChild(learnButton);

        // Pass theCard over to the div container - showPlaces
        showPlaces.appendChild(theCard);

    });
}

// Display all the items in the places JSON file
displayItems(places);



// Function to calculate the number of days between two dates
function getDaysDifference(lastVisitTimestamp) {
    const currentTimestamp = Date.now();
    const differenceInMillis = currentTimestamp - lastVisitTimestamp;
    const differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return differenceInDays;
  }
  
  // Function to display the appropriate message in the sidebar
  function displayVisitorMessage() {
    const visitorMessageElement = document.getElementById("visitor-message");
    
    // Check if there's a stored timestamp of the last visit
    const lastVisit = localStorage.getItem('lastVisit');
  
    if (lastVisit) {
      // If there was a previous visit, calculate the days difference
      const lastVisitTimestamp = parseInt(lastVisit);
      const daysSinceLastVisit = getDaysDifference(lastVisitTimestamp);
  
      if (daysSinceLastVisit < 1) {
        visitorMessageElement.textContent = "Back so soon! Awesome!";
      } else if (daysSinceLastVisit === 1) {
        visitorMessageElement.textContent = "You last visited 1 day ago.";
      } else {
        visitorMessageElement.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
      }
    } else {
      // First visit
      visitorMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    }
  
    // Store the current timestamp as the new last visit time
    localStorage.setItem('lastVisit', Date.now().toString());
  }
  
  // Call the function to display the message
  displayVisitorMessage();
  

