// Get JSON url resource
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the DOM element for output
const cards = document.querySelector('#cards');

// Fetch data using the async/await method
async function getProphetData() {
    // send request for data
    const response = await fetch(url);
    // Parse the JSON data
    const data = await response.json();
    // Check the parse data
    //console.table(data.prophets);
    //Call a function named displayProphets
    displayProphets(data.prophets);
}
// Call the getProphetData function
getProphetData();

// Define displayProphets function named "displayProphets" that handles a single parameter named "prophets"
const displayProphets = (prophets) => {
    // Use forEach loop to process each prophet
    prophets.forEach(prophet => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        
        // Set attributes for img element named portrait
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Populate the h2 element with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Populate the p elements with their content
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append heading and image elements to the section element named card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
       

        // Append the section (card) to the cards div selected above
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

