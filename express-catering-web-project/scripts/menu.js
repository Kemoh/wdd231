import {menu} from "../data/menutype.mjs";
console.log(menu);

// Grab the div element in the html to display the menu photos
const showMenu = document.querySelector("#showMenu");

// Create a function that loops through the items of json items
function displayItems(menu) {
    menu.forEach(dish => {
        // Create the card container
        const theCard = document.createElement("div");

        // Create  a figure element
        const figure = document.createElement("figure");
        
        // Create an image element for the menu photo
        const photo = document.createElement("img");
        // Set attributes for the image element
        photo.src = dish.pictureLink;
        photo.alt = dish.name;

        // Create the figcaption
        const figcaption = document.createElement
        ("figcaption");
        figcaption.textContent = dish.menuType;

        // Append the photo to the figure
        figure.appendChild(photo);
        
        // Append the figcaption
        figure.appendChild(figcaption);

        // Append figure to the theCard
        theCard.appendChild(figure);

        // Build the title of the photo
        const photoTitle = document.createElement("h4");
        photoTitle.textContent = dish.name;
        theCard.appendChild(photoTitle);

        // Build the  address of the photo
        // const theAddress = document.createElement("address");
        // theAddress.innerText = dish.address; 
        // theCard.appendChild(theAddress);

        // Build the description of the photo
        const thedescription = document.createElement("p");
        thedescription.innerText = dish.description;
        theCard.appendChild(thedescription);

        // Create a Learn More Button
        const learnButton = document.createElement("button");
        learnButton.innerHTML = "Learn More";
        theCard.appendChild(learnButton);

        // Pass theCard over to the div container - showMenu
        showMenu.appendChild(theCard);

    });
}

// Display all the items in the menu JSON file
displayItems(menu);


// FUNCTION FOR FILTER BUTTONS FOR MENU
// Filter Button Elements
const localBtn = document.querySelector("#local");
const europeanBtn = document.querySelector("#european");
const allBtn = document.querySelector("#all");

// Helper function to clear the current menu display
function clearMenu() {
    showMenu.innerHTML = "";
}

// Filter and display local dishes
localBtn.addEventListener("click", () => {
    clearMenu();
    const filteredLocal = menu.filter(dish => dish.menuType === "Local Dish");
    displayItems(filteredLocal);
});

// Filter and display European dishes
europeanBtn.addEventListener("click", () => {
    clearMenu();
    const filteredEuropean = menu.filter(dish => dish.menuType === "European Dish");
    displayItems(filteredEuropean);
});

// Optional: Show all dishes
if (allBtn) {
    allBtn.addEventListener("click", () => {
        clearMenu();
        displayItems(menu);
    });
}


// Function to calculate the number of days between two dates
function getDaysDifference(lastVisitTimestamp) {
    const currentTimestamp = Date.now();
    const differenceInMillis = currentTimestamp - lastVisitTimestamp;
    const differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return differenceInDays;
  }
  

// FUNCTION FOR LOCAL STORAGE
  
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
  

