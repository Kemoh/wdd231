// From membership.js
import { memberships } from "../scripts/membership.js";
//console.log(memberships);

// Grab a reference of the div element to display the membership levels
const membershipLevels = document.querySelector("#show-levels");

// Get references to the dialog items
const leveldialog = document.querySelector("#level-details");
const leveltitle = document.querySelector("#level-details h2");
const levelbenefits = document.querySelector("#level-details p");
const closebutton = document.querySelector("#level-details button");
closebutton.addEventListener('click', () => leveldialog.close());

// Loop thhroughh the membership levels array
function displayLevels(levelsArray){
    console.log(levelsArray);
    levelsArray.forEach(level => {
        console.log(level);
        const levelSection = document.createElement("section");
        levelSection.classList.add("levelSectionStyle");

        const levelType = document.createElement("h5");
        levelType.textContent = level.levelName;
        levelType.classList.add("levelTypeStyle");
        levelSection.appendChild(levelType);

        const levelLink = document.createElement("p");
        levelLink.innerHTML = level.learnMoreLink;
        levelLink.classList.add("levelLinkStyle");
        levelSection.appendChild(levelLink);
  
        // Add an event listener to the membership button
        levelSection.addEventListener('click', () => showDetails(level));

        membershipLevels.appendChild(levelSection);
        
    });
}
// Start displaying all membership levels
displayLevels(memberships);

// Populate the dialog with information when the membership card is click
function showDetails(level){
    leveltitle.innerHTML = level.levelName;
    levelbenefits.textContent = level.levelBenefits;
    leveldialog.showModal();

}
