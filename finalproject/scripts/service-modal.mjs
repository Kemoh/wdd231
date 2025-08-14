

// Import services data
import { services } from "../data/servicedata.mjs";
//console.log(services);

// Select the DOM element to display the service card
const serviceData = document.querySelector('#show-service-cards');

// Select dialog DOM elements
const serviceDialog = document.querySelector('#service-dialog');

const serviceDialogHeading = document.querySelector('#service-dialog h3');

const serviceDialogDescription = document.querySelector('#service-description');

const serviceDialogReward = document.querySelector('#service-rewards');

const serviceDialogDiscount = document.querySelector('#service-discount');

const serviceContactDialogBtn = document.querySelector('#service-contact-btn');

const serviceDialogCloseButton = document.querySelector('#service-dialog button');


// Add an event listner to the serviceCloseButton
serviceDialogCloseButton.addEventListener('click', () => serviceDialog.close()); 

// Create a function to loop through the services array
function displayServices() {
    services.forEach(service => {
        //console.log(service);

        // Create elements
        const sectionContainer = document.createElement('section');
        const sectionHeading = document.createElement('h3');
        const serviceLink = document.createElement('button');
       

        // Populate the section heading
        sectionHeading.textContent = service.serviceName;

        // Populate the section button with call to action text
        serviceLink.textContent = 'Book My Event';

        // Add classList to button
        serviceLink.classList.add('service-link');

        sectionContainer.classList.add('section-container');

        // Add event listner to the Book My Event button
        serviceLink.addEventListener('click', () => showServices(service));

        // Append section heading and service link to the section container
        sectionContainer.appendChild(sectionHeading);
        sectionContainer.appendChild(serviceLink);
        //console.log(sectionContainer);

        // Append the section container to the the DOM using serviceData
        serviceData.appendChild(sectionContainer);
    });
}
// Call the displayServices function
displayServices();

function showServices(service) {
    serviceDialogHeading.textContent = service.serviceName;
    serviceDialogDescription.innerHTML = `<span class = "label">Description</span> <br> ${service.serviceDescription}`;
    serviceDialogReward.innerHTML = `<span class = "label">Rewards</span> <br> ${service.serviceRewards}`;
    serviceDialogDiscount.innerHTML = `<span class = "label">Discount</span> <br><li> ${service.serviceDiscount}</li>`;
    serviceContactDialogBtn.classList.add('service-contact-dialog-btn');
    serviceContactDialogBtn.textContent = 'Contact Us';
    serviceDialog.showModal();
};

