// Get JSON url resource
const url = 'https://raw.githubusercontent.com/Kemoh/wdd231/refs/heads/main/chamber/data/members.json';

// Select the DOM element for output
const cards = document.querySelector('#adverts');

// Load and filter members on page load
// Set global variables for tracking
let filteredAdvertMembers = [];
let currentIndex = 0;
let rotationalInterval = null;

// 1. Fetch and Prepare data
// Fetch data using the async/await method with error handling
async function getMembersData() {
    try {
        // send request for membersData
        const response = await fetch(url);
    
         if (response.ok) {
              // Parse the JSON data
              const membersData = await response.json();

            //Filter members with isAdvert === true and members level = 'gold' or 'silver'
            filteredAdvertMembers = membersData.members.filter(member => member.isAdvert === true && 
                ['gold', 'silver'].includes(member.membershipLevel.toLowerCase())
            );

            if (filteredAdvertMembers.length === 0) {
                cards.innerHTML = `<p>No qulaifying advertisers found</p>`;
                return;
            }

            // Shuffle members once
            filteredAdvertMembers.sort(() => 0.5 - Math.random());

            // Display the first 3 members
            showNextThree();

            // Set the interval to show next 3 every 5 seconds
            rotationalInterval = setInterval(showNextThree, 5000);

              }  else {
                        // Throw server error
                        throw new Error(`HTTP Error: 
                            ${response.status()}`);
                }
            
            } catch (error) {
                console.error('Failed to load advertiser data', error);
                cards.innerHTML = '<p>Error Loading advertisers. Please try again later.</p>';
            }
}


// Show 3 members at a time, rortating through the list
function showNextThree() {
    // Clear the prevoius cards
    cards.innerHTML = '';

    //If at the end of the list, start over
    if (currentIndex >= filteredAdvertMembers.length){
        currentIndex = 0;

        // Reshuffle for new random set each cycle
        filteredAdvertMembers.sort(() => 0.5 - Math.random());
    }

    // Get next 3 members
    const nextThree = filteredAdvertMembers.slice(currentIndex, currentIndex + 3);

    // Display 3 members at a time
    displayMembers(nextThree);
    currentIndex += 3;
}

// Define displayMembers function named "displayMembers" that handles a single parameter named "members"
const displayMembers = (members) => {
    // Use forEach loop to process each member
    members.forEach(member => {
        // Create elements to add to the div.cards element
        let card = document.createElement('div');
        let name = document.createElement('h3');
        let logoImage = document.createElement('img');
        let address = document.createElement('p');
        let websiteurl = document.createElement('p');
        let phonenumber = document.createElement('p');
        let tagline = document.createElement('p');
        let membersLevel = document.createElement('p');
        
        // Set attributes for img element memberNamed logoImage
        logoImage.setAttribute('src', member.imageurl);
        logoImage.setAttribute('alt', `${member.name} Logo`);
        logoImage.setAttribute('loading', 'lazy');
        logoImage.setAttribute('width', '131');
        logoImage.setAttribute('height', '131');

        // Populate the h4 element with the member's memberName
        name.textContent = `${member.name}`;

        // Populate the p elements with their content
        address.innerHTML = `<span class='label'>${member.address}</span>`;
        websiteurl.innerHTML = `<span class='labe'>${member.websiteurl}</span>`;
        phonenumber.innerHTML = `<span class='label'>${member.phonenumber}</span>`;
        tagline.innerHTML = `<span class='label'>${member.tagline}</span>`;
        membersLevel.innerHTML = `<span class='label'>${member.membershipLevel}</span>`;
       
        // Append elements to the div.card created above
        card.appendChild(logoImage);
        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteurl);
        card.appendChild(membersLevel);

        // Add classList for Styling card
        card.classList.add('business-cards');

        // Append the loaded card to the cards div selected in the DOM above
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

// Start getMembers
getMembersData();
