// Start of Main

// Get the source of the image and store it in a variable:
const contoonTreeImageSrc = "images/contoon-tree-large.webp";
const profilePictureImageSrc = "images/profile-large.webp";
const countryFlagImageSrc = "images/sierra-leone-flag-large.webp";

// Get the full name and stored it in a variable:
const fullName = "Umaru Bayoh";

// Get the div where you want to insert the image:
const contoonTreePicDiv = document.querySelector(".contoon-tree-pic");
const profilePictureDiv = document.querySelector(".profile-picture");
const countryFlagDiv = document.querySelector(".countryFlag");

// Create an image element:
const contoonTreeImgElement = document.createElement("img");
const profilePictureImgElement = document.createElement("img");
const countryFlagImgElement = document.createElement("img");

// Set the image source:
contoonTreeImgElement.src = contoonTreeImageSrc;
profilePictureImgElement.src  = profilePictureImageSrc;
countryFlagImgElement.src  = countryFlagImageSrc;

// Set the alt, width and height attributes:
contoonTreeImgElement.alt = "Contoon Tree Image";
profilePictureImgElement.alt = "Profile Image of Author";
countryFlagImgElement.alt = "Flag of sierra Leone";

// Set the width attribute size:
contoonTreeImgElement.width = 217;
profilePictureImgElement.width = 68;
countryFlagImgElement.width = 82;

// Set the height attribute size:
contoonTreeImgElement.height = 225;
profilePictureImgElement.height = 102;
countryFlagImgElement.height = 56;

// Create a span element for the full name:
const fullNameSpan = document.createElement("span");

// Set the full name as the text content of the span:
fullNameSpan.textContent = fullName;

// Append the image element to the div:
contoonTreePicDiv.appendChild(contoonTreeImgElement);
profilePictureDiv.appendChild(profilePictureImgElement);
countryFlagDiv.appendChild(countryFlagImgElement);

// Append the full name span element to the div:
profilePictureDiv.appendChild(fullNameSpan);

// End of Main

// Start of Footer



// End of Footer