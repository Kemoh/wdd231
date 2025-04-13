// Export this as a function to use in other files
export function displayFooterInfo() {
    // ******************Start of Navigation****************//
    // Select the hamburger button by using it's id and it's related ul for output.
        const hamButton1 = document.querySelector('#menu');
        const navigation1 = document.querySelector('#animateme');
        
        //Add a click eventlistner to the hamburger button and a callback function that toggles the list element's list of classes.
        hamButton1.addEventListener('click', () => {
            navigation1.classList.toggle('open');
            hamButton1.classList.toggle('open');
        });
    //******************* End of Navigation****************//


    // ************* Start of Footer *********************** //
// Select the DOM elements for output
const currentYear = document.querySelector(".copyYear");
const lastModified = document.querySelector(".lastModified");
const socialMediaLinks = document.querySelector(".socialMediaLinks");

// Use the date object for the "currentyear"
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);

// Format the date as dd/mm/yy
const formattedDate = lastModifiedDate.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
});

// Format the date as hh/mm/ss
const formattedTime = lastModifiedDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
});

// Populate the current year span with the getFullYear():
currentYear.innerHTML = `<span class="copyYear">©${today.getFullYear()} Freetown Chamber of Commerce </span>`;

// Populate the "lastModified" span with the formatted date
lastModified.innerHTML = `<span class="modifiedDate">Last Modification: ${formattedDate} ${formattedTime}</span>`;

}

// Enf of Footer //

// Start of spotlight-dishes

export function displayDishes(){
// Declare a const variable named "url" that
//  contains the URL string of the JSON resource
//  provided.
const url = 'https://raw.githubusercontent.com/Kemoh/wdd231/main/express-catering-web-project/data/dishes.json';

// Use the async/await method to fetch the data
async function getDishes() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Call displaySpotlightDishes after the data is fetched
        displaySpotlightDishes(data.dishes);
    } catch (error) {
        console.error('Error fetching dish data:', error);
    }
}

// Create the display method
const displaySpotlightDishes = (dishes) => {
// Select the html element
const sportlightDishes = document.querySelector(".spotlightDishes");

// Filter the dishes to  include 'local' or 'european' dishes
const menuDishes = dishes.filter(dish => dish.menu-type === "local"  ||  dish.menu-type === "european");

// Randomly display 2 or 3 dishes from the menu
//const randomSpotlightdishes = getRandomdishes(menuDishes);

// Loop through the selected dishes and create cards
randomSpotlightdishes.forEach(dish => {
    // Create the section element (card)
    let card = document.createElement("section");

    // Create and populate picture for the dish
    let img = document.createElement("img");
    img.setAttribute("src", dish.picture-link);
    img.setAttribute("alt", dish.name);
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");
    img.setAttribute("loading", "lazy");

    // Create and populate the  name of the dish
    let name = document.createElement("h4");
    name.textContent = dish.name;

    // Create and populate the description of the dish
    let description = document.createElement("p");
    description.textContent = dish.description;

    // Append all elements to the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(description);

    // Append the card to the spotlight grid
    sportlightDishes.appendChild(card);

});

};


// Function tto randomly pick 2 or 3 dishes
const getRandomdishes = (dishes) => {
    // Shuffle the dishes array
    const Shuffleddishs = dishes.sort(() => 0.5 - Math.random());

    // Return 2 or 3 dishes
    return Shuffleddishs.slice(0, Math.floor(Math.random() * 2) + 2);
};

// Run displaySpotlightDishes once the DOM content is 
// loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display spotlight dishes once 
    // the page is loaded
    getDishes();
});

}


// End of spotlight-dishes


