// select HTML elements in the document
const town = document.querySelector('#town');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#figcaption');
const temperature = document.querySelector('#temperature');

// URL Variables
const myKey = "52b5da027b37133e1c13be7f5c1d8d2e";
const myLat = "49.75";
const myLong = "6.64";

// API call
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// API Fetch Function
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}


// Display Result
function displayResults(data) {
    console.log("Hello!");
    town.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconSource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconSource);
    weatherIcon.setAttribute('alt', data.weather[0].description);

} 

// Start the Process
apiFetch()

