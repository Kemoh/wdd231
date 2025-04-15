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
}
    //******************* End of Navigation****************//


    // ************* Start of Footer *********************** //
export function formatDateTime() {
    const currentYear = document.querySelector(".copyYear");
    const lastModified = document.querySelector(".lastModified");
    const formDateAndTime = document.querySelector("#timestampInput");

    const today = new Date();
    const lastModifiedDate = new Date(document.lastModified);

    const formattedDate = lastModifiedDate.toLocaleDateString('en-GB'); // dd/mm/yyyy
    const formattedTime = lastModifiedDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    if (currentYear) {
        currentYear.textContent = `© ${today.getFullYear()} Freetown Chamber of Commerce`;
    }

    if (lastModified) {
        lastModified.textContent = `Last Modified: ${formattedDate} ${formattedTime}`;
    }

    if (formDateAndTime) {
        formDateAndTime.value = `${formattedDate} ${formattedTime}`;
    }
}

//******************/ Enf of Footer *********************** //

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
            // console.log(data);
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

// Start of thankyou page for the form for Express Restaurant and Catering Services

// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

export const populateTimestamp = () => {
    const timestampInput = document.getElementById('timestampInput');
    if (timestampInput) {
        timestampInput.value = Date.now();
    }
};

export const displayFormResults = () => {
    const myInfo = new URLSearchParams(window.location.search);

    const resultDiv = document.querySelector("#result");
    if (resultDiv) {
        resultDiv.innerHTML = `
            <p>Your first name is: ${myInfo.get('firstName')}</p>
            <p>Your last name is: ${myInfo.get('lastName')}</p>
            <p>Your phone: ${myInfo.get('phone')}</p>
            <p>Your email is: ${myInfo.get('email')}</p>
            <p>The type of service you selected is: ${myInfo.get('service')}</p>
            <p>You wrote this note: ${myInfo.get('note')}</p>
            <p>You selected this location: ${myInfo.get('location')}</p>
            <p>The date and time that the form was uploaded is: ${myInfo.get('timestamp')}</p>
        `;
    }
};

