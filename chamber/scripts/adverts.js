// Get JSON url resource
const url = 'https://raw.githubusercontent.com/Kemoh/wdd231/refs/heads/main/chamber/data/members.json';

// Select the DOM element for output
const cards = document.querySelector('#adverts');

// Fetch data using the async/await method
async function getMembersData() {
    // send request for data
    const response = await fetch(url);
    // Parse the JSON data
    const data = await response.json();
    // Check the parse data
    //console.table(data.members);
    //Call a function named displayMembers
    displayMembers(data.members);
}
// Call the getMembersData function
getMembersData();


// Define displayMembers function named "displayMembers" that handles a single parameter named "members"
const displayMembers = (members) => {
    // Use forEach loop to process each member
    members.forEach(member => {
        // Create elements to add to the div.cards element
        let card = document.createElement('div');
        let name = document.createElement('h4');
        let logoImage = document.createElement('img');
        let address = document.createElement('p');
        address.classList.add('address');
        let websiteurl = document.createElement('p');
        websiteurl.classList.add('weburl');
        let phonenumber = document.createElement('p');
        phonenumber.classList.add('mobilenumber');
        let tagline = document.createElement('p');
        tagline.classList.add('tag');
        
        // Set attributes for img element named logoImage
        logoImage.setAttribute('src', member.imageurl);
        logoImage.setAttribute('alt', `${member.name} Logo`);
        logoImage.setAttribute('loading', 'lazy');
        logoImage.setAttribute('width', '131');
        logoImage.setAttribute('height', '131');

        // Populate the h2 element with the member's name
        name.textContent = `${member.name}`;

        // Populate the p elements with their content
        address.textContent = `${member.address}`;
        websiteurl.textContent = `${member.websiteurl}`;
        phonenumber.textContent = `${member.phonenumber}`;
        tagline.textContent = `${member.tagline}`;
       
        // Append elements to the div.card created above
        card.appendChild(logoImage);
        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteurl);

        // Add classList for Styling card
        card.classList.add('business-cards');

        // Append the loaded card to the cards div selected in the DOM above
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
