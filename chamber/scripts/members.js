// Declare a const variable named "url" that
//  contains the URL string of the JSON resource
//  provided.
const url = `https://raw.github.com/Kemoh/wdd231/blob/main/chamber/data/members.json`;

// Declare a const variable name "grid" that selects the HTML div element from the document with an id
//  value of "grid".
const grid = document.querySelector(".grid");

// Create an async defined function named 
// "getMembersData" to fetch data from the JSON
//  source url using the await fetch() method.
async function getMembersData() {
    // Store the response from the fetch() method in
    //  a const variable named "response".
    const response = await fetch(url);
    // Convert the response to a JSON object using
    //  the .json method and store the results in a
    //  const variable named "data".
    const data = await response.json();  // 
    console.log(data);
    // Add a console.table() expression method to
    //  check the data response at this point in the
    //  console window.
    // console.table(data.members); // temporary testing of data response

    // Comment out the console line and call a
    //  function named "displayMembers" and include
    //  the "data.members" argument. Why do you send data.members versus just the data variable? The
    //  displayMembers() function expects an array
    //  parameter
    displayMembers(data.members);
}
// Call the function getMembersData() in the main
//  line of your .js code to test the fetch and
//  response.
getMembersData();


// Define a function expression named
//  "displayMembers" that handles a single parameter
//  named "members" somewhere in your js file. Use
//  an arrow expression to contain statements that
//  will process the parameter value and build a card
//  for each member.
const displayMembers = (members) => {
    // Card build code goes here:
    // Inside the function, use a forEach loop with
    //  the array parameter to process each "member"
    //  record one at a time, creating a new card
    //  each time.
    members.forEach((member) => {
        // create a section element and store it in a
        //  variable named card using createElement(),
        let card = document.createElement("section");

        // Create an div container to store the business name and tagline.
        // Add a class list to the div container for styling.
        // Create an h1 element and store it in a varibale named businessName.
        // Create a p element and store it in a variable named tag.
        let businessNameAndTagContainer = document.createElement("div");
        businessNameAndTagContainer.classList.add("businessNameAndTagContainer");
        let businessName = document.createElement("h3");
        let tag = document.createElement("p");
        //let hrElement = document.createElement("hr");

        // Create an div container to store the logo image.
        // Add a class list to the div container for styling.
        // Create an portrait element and store it in a varibale named portrait.
        let portraitBusinessInfoContainer = document.createElement("div");
        portraitBusinessInfoContainer.classList.add("portraitBusinessInfoContainer");
        let portrait = document.createElement("img");
        

        // Create an div container to store the email, phone number and websiate.
        // Add a class list to the div container for styling.
        // Create a p element and store it in a variable named email.
        // Create a p element and store it in a variable named phonenumber.
        // Create a p element and store it in a variable named websiteurl.
        let otherBusinessInfoContainer = document.createElement("div");
        otherBusinessInfoContainer.classList.add("otherBusinessInfoContainer");
        let email = document.createElement("p");
        let phonenumber = document.createElement("p");
        let websiteurl = document.createElement("p");
        
        
        // populate the heading element with the
        //  member's business name using a template
        //  string to build the business name,
        businessName.textContent = `${member.name}`;
        // populate the p element with the
        //  member's tag line using a template
        //  string to build the tag line,
        tag.textContent = `${member.tagline}`;
        // populate the p element with the
        //  member's email address using a template
        //  string to build the email address,
        email.innerHTML = `<span class = "label">EMAIL: </Span>${member.email}`;
        // populate the p element with the
        //  member's phone number using a template
        //  string to build the phone number,
        phonenumber.innerHTML = `<span class = "label">PHONE: </Span>${member.phonenumber}`;
        // populate the p element with the
        //  member's url using a template
        //  string to build the url,
        websiteurl.innerHTML = `<span class = "label">URL: </Span>${member.websiteurl}`;

        // Build the image portrait by setting all
        //  the relevant attributes:
        portrait.setAttribute("src", member.imageurl);
        portrait.setAttribute("alt", `Portrait of ${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "84");
        portrait.setAttribute("height", "84");


        // Append the business name and the tag to its container:
        businessNameAndTagContainer.appendChild(businessName);
        businessNameAndTagContainer.appendChild(tag);
        //businessNameAndTagContainer.insertBefore(hrElement, tag.nextSibling);
        // Append the businessNameAndTagContainer to the section element created above:
        card.appendChild(businessNameAndTagContainer);
        
        // Append the logo image to its container:
        portraitBusinessInfoContainer.appendChild(portrait);
        
        // portraitBusinessInfoContainer.appendChild(a.href);
        // portraitBusinessInfoContainer.appendChild(a.target);

        // Append the email, phonenumber and website to its container:
        otherBusinessInfoContainer.appendChild(email);
        otherBusinessInfoContainer.appendChild(phonenumber);
        otherBusinessInfoContainer.appendChild(websiteurl);
        // Append the otherBusinessInfoContainer to the section element created above:
        portraitBusinessInfoContainer.appendChild(otherBusinessInfoContainer);

        // Append the portraitBusinessInfoContainer to the section element created above:
        card.appendChild(portraitBusinessInfoContainer);
    

        // Finally, add the section card to the "grid" div that was selected at the beginning of the script file.
        grid.appendChild(card); // end of arrow
        //  function and forEach loop
    });


// Gets the DOM elements and assign to a variables:
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. 
// How? We may have to simplfiy our HTMl and think about a 
// default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using 
// defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

}



