// Export this as a function to use in other files
export function displayFooterInfo() {
    // ******************Start of Navigation****************//
    // Select the hamburger button by using it's id and it's related ul for output.
        const hamButton1 = document.querySelector('#menu');
        const navigation1 = document.querySelector('#animateme');
        
        //Add a click eventlistner to the hamburger button and a callback function that toggles the list element's list of classes.
        hamButton1.addEventListener('click', () => {
            navigation1.classList.toggle('open');
            hamButton1.classList.toggle('open');
        });
    //******************* End of Navigation****************//


    // ************* Start of Footer *********************** //
// Select the DOM elements for output
const currentYear = document.querySelector(".copyYear");
const lastModified = document.querySelector(".lastModified");
const socialMediaLinks = document.querySelector(".socialMediaLinks");

// Use the date object for the "currentyear"
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);

// Format the date as dd/mm/yy
const formattedDate = lastModifiedDate.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
});

// Format the date as hh/mm/ss
const formattedTime = lastModifiedDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
});

// Populate the current year span with the getFullYear():
currentYear.innerHTML = `<span class="copyYear">©${today.getFullYear()} Freetown Chamber of Commerce </span>`;

// Populate the "lastModified" span with the formatted date
lastModified.innerHTML = `<span class="modifiedDate">Last Modification: ${formattedDate} ${formattedTime}</span>`;

}

// Enf of Footer //

// Start of spotlight-dishes
export function displayDishes() {
    const url = 'https://raw.githubusercontent.com/Kemoh/wdd231/main/express-catering-web-project/data/dishes.json';

    let spotlightDishesContainer;
    let dishSets = [];
    let currentIndex = 0;

    async function getDishes() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setupSlide(data.dishes);
        } catch (error) {
            console.error('Error fetching dish data:', error);
        }
    }

    const setupSlide = (dishes) => {
        spotlightDishesContainer = document.querySelector(".spotlightDishes");

        // Filter only local/european
        const menuDishes = dishes.filter(d => d.menuType === "local" || d.menuType === "european");
        const shuffled = shuffleArray(menuDishes);

        chunkAndDisplay(shuffled); // Call here on first load

        // Listen for screen resize and re-chunk
        window.addEventListener("resize", () => {
            dishSets = []; // Clear previous chunks
            chunkAndDisplay(shuffled);
        });
    };

    // ⬇️⬇️ PLACE THIS HERE ⬇️⬇️
    const chunkAndDisplay = (dishes) => {
        const screenWidth = window.innerWidth;

        let itemsPerSet = 3;
        if (screenWidth < 768) {
            itemsPerSet = 1;
        } else if (screenWidth < 1024) {
            itemsPerSet = 2;
        }

        dishSets = [];
        for (let i = 0; i < dishes.length; i += itemsPerSet) {
            dishSets.push(dishes.slice(i, i + itemsPerSet));
        }

        currentIndex = 0;
        showSet(currentIndex);

        clearInterval(window.dishSliderInterval);
        window.dishSliderInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % dishSets.length;
            showSet(currentIndex);
        }, 6000);
    };
    // ⬆️⬆️ END OF chunkAndDisplay ⬆️⬆️

    const showSet = (index) => {
        const set = dishSets[index];
        spotlightDishesContainer.classList.add("slide-out");

        setTimeout(() => {
            spotlightDishesContainer.innerHTML = "";

            set.forEach(dish => {
                const card = document.createElement("section");

                const img = document.createElement("img");
                img.setAttribute("src", dish.pictureLink);
                img.setAttribute("alt", dish.name);
                img.setAttribute("width", "300");
                img.setAttribute("height", "200");
                img.setAttribute("loading", "lazy");

                const name = document.createElement("h4");
                name.textContent = dish.name;

                const description = document.createElement("p");
                description.textContent = dish.description;

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(description);

                spotlightDishesContainer.appendChild(card);
            });

            spotlightDishesContainer.classList.remove("slide-out");
            spotlightDishesContainer.classList.add("slide-in");

            setTimeout(() => spotlightDishesContainer.classList.remove("slide-in"), 1000);
        }, 500);
    };

    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    document.addEventListener("DOMContentLoaded", () => {
        getDishes();
    });
}




// End of spotlight-dishes


