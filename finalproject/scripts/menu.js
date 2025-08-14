// JSON URL
const menuURL = "https://raw.githubusercontent.com/Kemoh/wdd231/28140062428e66cf4dd3a76d26e649c0bf2b5884/finalproject/data/menu.json";

// Global variable to store menu data
let menuData = [];

// Fetch and store menu
async function fetchMenu() {
    const errorMessage = document.getElementById('error-message'); 

    try {
        const response = await fetch(menuURL);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const jsonData = await response.json();

        // Make sure property names match your JSON structure
        menuData = jsonData.menu || [];

        //console.log("Menu Data Loaded:", menuData); // Debug log

        // Display all by default AFTER data loads
        displayMenuCard("all");

        errorMessage.textContent = '';
        
    } catch (error) {
        console.log(errorMessage);
        errorMessage.innerHTML = '<p>Failed to load the menu. Please try again later.</p>';
    }
}


// Display menu cards with filtering
function displayMenuCard(category) {
    const foodList = document.querySelector('#filtered-food-grid');
    foodList.innerHTML = '';

    // Filter menu by category
    const filteredMenu = category === "all"
        ? menuData
        : menuData.filter(food => food.category?.toLowerCase() === category.toLowerCase());

    if (filteredMenu.length === 0) {
        foodList.innerHTML = `<p>No items found for category: ${category}</p>`;
        return;
    }

    // Create cards
    filteredMenu.forEach(food => {

        // Create Elements
        let card = document.createElement('section');
        let foodName = document.createElement('h2');
        let foodType = document.createElement('p');
        let foodPrice = document.createElement('p');
        let foodImage = document.createElement('img');
        let orderLink = document.createElement('a'); 


        // Setup Food Details
        foodName.textContent = food.name;
        foodType.innerHTML = `<span class='label'>Category: </span>${food.type}`;
        foodPrice.innerHTML = `<span class='label'>Price: </span>${food.price}`;


        //Food Image Setup
        foodImage.setAttribute('src', food.image_url);
        foodImage.setAttribute('alt', food.name);
        foodImage.setAttribute('width', 300);
        foodImage.setAttribute('height', 300);
        foodImage.setAttribute('loading', 'lazy');


        // Order link setup - pass both name & price
        orderLink.textContent = "Order Now";
        orderLink.href = `order.html?item=${encodeURIComponent(food.name)}&price=${encodeURIComponent(food.price)}`;
        orderLink.classList.add('order-btn');
        

        // Add elements to card
        card.appendChild(foodName);
        card.appendChild(foodType);
        card.appendChild(foodPrice);
        card.appendChild(foodImage);
        card.appendChild(orderLink);

        // Add food cards to the DOM
        foodList.appendChild(card);
    });
}

// Event listeners for filter buttons with highlight effect
function setupFilterButtons() {
    const filterbuttons = document.querySelectorAll('.filter-btn');

    filterbuttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category; // use data-category="local" etc.

            // Remove active from all filterbuttons
            filterbuttons.forEach(btn => btn.classList.remove('active'));

            // Add active to the clicked button
            button.classList.add('active');

            // Display filtered items
            displayMenuCard(category);
        });
    });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    fetchMenu(); // Fetch data first
    setupFilterButtons(); // Setup filter buttons
});
