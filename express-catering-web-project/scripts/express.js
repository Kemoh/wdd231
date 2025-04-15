// Import dates.js
import { displayFooterInfo } from './bundle.js';

// Call the function to display the footer information
displayFooterInfo();

// import { dishes } from "../data/dishes.mjs";
// console.log(dishes);

// main.js
import { displayDishes } from './bundle.js';
displayDishes();

// Import the function for Populate Timestamp and Daily Form Result
import { populateTimestamp } from './bundle.js';
populateTimestamp();

import { displayFormResults } from './bundle.js';
displayFormResults();

import { formatDateTime } from './bundle.js';
window.addEventListener("DOMContentLoaded", () => {
    formatDateTime();
});

