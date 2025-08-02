// Membership Levels Section

// Import membership levels data
import { membershipLevel } from "./levels-data.js";
//console.log(membershipLevel);

// Select the DOM element to display the level card
const memberLevel = document.querySelector('#show-level-card');

// Select dialog DOM elements
const levelDialog = document.querySelector('#level-dialog');

const levelDialogHeading = document.querySelector('#level-dialog h3');

const levelDialogDescription = document.querySelector('#dialog-description');

const levelDialogBenefits = document.querySelector('#dialog-benefits');

const levelDialogCloseButton = document.querySelector('#level-dialog button');

// Add an event listner to the levelCloseButton
levelDialogCloseButton.addEventListener('click', () => levelDialog.close()); 

// Create a function to loop through the membership level array
function displayMemberLevels() {
    membershipLevel.forEach(level => {
        //console.log(level);
        // Create elements
        const sectionContainer = document.createElement('section');
        const sectionHeading = document.createElement('h3');
        const learnMoreLink = document.createElement('button');
       

        // Populate the section heading
        sectionHeading.textContent = level.levelName;

        // Populate the section button with call to action text
        learnMoreLink.textContent = 'Learn More';

        // Add classList to button
        learnMoreLink.classList.add('learn-more-link');

        sectionContainer.classList.add('section-container');

        // Add event listner to the learn more button
        learnMoreLink.addEventListener('click', () => showLevels(level));

        // Append section heading and learn more link to the section container
        sectionContainer.appendChild(sectionHeading);
        sectionContainer.appendChild(learnMoreLink);
        //console.log(sectionContainer);

        // Append the section container to the the DOM using memberLevel
        memberLevel.appendChild(sectionContainer);
    });
}
// Call the displayMembershipLevels function
displayMemberLevels();

function showLevels(level) {
    levelDialogHeading.textContent = level.levelName;
    levelDialogDescription.textContent = level.levelDescription;
    levelDialogBenefits.innerHTML = level.levelBenefits;
    levelDialog.showModal();
};

