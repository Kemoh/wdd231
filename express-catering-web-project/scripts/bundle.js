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
const url = 'https://raw.githubusercontent.com/Kemoh/wdd231/main/express-catering-web-project/data/dishes.mjs';

// Use the async/await method to fetch the data
async function getDishes() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Call displaySpotlight after the data is fetched
        displaySpotlight(data.dishes);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Create the display method
const displaySpotlight = (members) => {
// Select the html element
const sportlightDishes = document.querySelector(".sportlightDishes");

// Filter the members to only include 'gold' or 'silver' membership levels
const eligibleMembers = members.filter(member => member.membershiplevel === "Gold"  ||  member.membershiplevel === "Silver");

// Randomly display 2 or 3 members from the eligible members
const randomSpotlightMembers = getRandomMembers(eligibleMembers);

// Loop through the selected members and create cards
randomSpotlightMembers.forEach(member => {
    // Create the section element (card)
    let card = document.createElement("section");

    // Create and populate the logo image
    let img = document.createElement("img");
    img.setAttribute("src", member.imageurl);
    img.setAttribute("alt", member.name);
    img.setAttribute("width", "84");
    img.setAttribute("height", "84");
    img.setAttribute("loading", "lazy");

    // Create and populate the company name heading
    let name = document.createElement("h4");
    name.textContent = member.name;

    // Create and populate the address paragraph
    let address = document.createElement("p");
    address.textContent = member.address;

    // Create and populate the phone number 
    // paragraph
    let phone = document.createElement("p");
    phone.textContent = `📞 ${member.phonenumber}`;

    // Create and populate the website link anchor 
    // tag
    let website = document.createElement("a");
    website.setAttribute("href", member.websiteurl);
    website.textContent = "Visit Website";

    // Create and populate the membership level 
    // span
    let membershiplevel = document.createElement("p");
    membershiplevel.innerHTML = `<span class = "label">${member.membershiplevel} Member</span>`;

    // Append all elements to the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershiplevel);
    card.appendChild(website);

    // Append the card to the spotlight grid
    sportlightDishes.appendChild(card);

});

};


// Function tto randomly pick 2 or 3 members
const getRandomMembers = (members) => {
    // Shuffle the members array
    const ShuffledMembers = members.sort(() => 0.5 - Math.random());

    // Return 2 or 3 members
    return ShuffledMembers.slice(0, Math.floor(Math.random() * 2) + 2);
};

// Run displaySpotlight once the DOM content is 
// loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display spotlight members once 
    // the page is loaded
    getDishes();
});

}


// End of spotlight-dishes


