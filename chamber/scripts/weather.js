// CURRENT WEATHER
// SELECT HTML ELEMENTS IN THE DOCUMENT
const temp = document.querySelector('#current-temp');
const condition = document.querySelector("#weather-condition");
const highTemp = document.querySelector("#current-high-temp");
const lowTemp = document.querySelector("#current-low-temp");
const humidity = document.querySelector("#current-humidity");
const sunrise = document.querySelector("#current-sunrise-time");
const sunset = document.querySelector("#current-sunset-time");
const weatherIcon = document.querySelector('#weather-icon');

// URL Variables
const myKey = "52b5da027b37133e1c13be7f5c1d8d2e";
const myLat = "-13.25";
const myLong = "8.48";

// API call
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// API Fetch Function
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }


  // Function to convert unixTimestamp to time string in 12-hour format (with a.m./p.m.)
  function convertUnixToTime(unixTimestamp) {
    // Multiply by 1000 for milliseconds
    const date = new Date(unixTimestamp * 1000);

    // Get the hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Convert to 12-hour format
    const period = hours >= 12 ? "p.m." : "a.m.";

    // Adjust hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes to ensure two digits
    minutes = String(minutes).padStart(2, '0');

    // Return the formatted time string
    return `${hours}:${minutes} ${period}`;
  }

  // DISPLAY THE JSON DATA ONTO MY WEB PAGE
  function displayResults(data) {
    // Create the variables for the unixTimeStamp
    let sunriseUnix = data.sys.sunrise;
    let sunsetUnix = data.sys.sunset;

    // Call the convertUnixToTime function to convert to time objects
    let sunriseTime = convertUnixToTime(sunriseUnix);
    let sunsetTime = convertUnixToTime(sunsetUnix);

    
    temp.innerHTML = `${Math.ceil(data.main.temp)}&degF`;
    condition.innerHTML = `<span class = "label">${data.weather[0].description}</span>`;
    highTemp.innerHTML =  `<span class = "label">High: </span>${Math.ceil(data.main.temp_max)}&degF`;
    lowTemp.innerHTML =  `<span class = "label">Low: </span>${Math.ceil(data.main.temp_min)}&degF`;
    humidity.innerHTML = `<span class = "label">Humidity: </span>${data.main.humidity}%`;
    sunrise.innerHTML = `<span class = "label">Sunrise :</span>${sunriseTime}`;
    sunset.innerHTML = `<span class = "label">Sunset: </span> ${sunsetTime}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('width', 100);
    weatherIcon.setAttribute('height', 100);
  }  
}
apiFetch();


// WEATHER FORECAST
// CALL FOR 3 DAYS FORECAST
// SELECT HTML ELEMENTS IN THE DOCUMENT
// SELECT HTML ELEMENTS IN THE DOCUMENT
const firstForecast = document.querySelector("#forecast-1");
const secondForecast = document.querySelector("#forecast-2");
const thirdForecast = document.querySelector("#forecast-3");

// CONSTRUCT A PATH USING TEMPLATE LITERAL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// FUNCTION TO CONVERT TIMESTAMP (dt) TO WEEKDAY
function convertDateTimeToWeekDay(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

// FETCH FORECAST
async function forecastAPIFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forecastData = await response.json();
            showResults(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

// FUNCTION TO DISPLAY RESULTS
function showResults(data) {
    const forecasts = data.list;

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize time to midnight

    const daySlots = []; // Store 3 daily forecasts

    for (let i = 0; i < forecasts.length; i++) {
        const forecast = forecasts[i];
        const forecastDate = new Date(forecast.dt * 1000);
        forecastDate.setHours(0, 0, 0, 0);

        // Check how many days ahead this forecast is
        const diffInDays = Math.floor((forecastDate - today) / (1000 * 60 * 60 * 24));

        // Only collect forecast close to 12:00 PM for today, tomorrow, and day-after
        const forecastHour = new Date(forecast.dt * 1000).getHours();
        if ((diffInDays >= 0 && diffInDays <= 2) && (forecastHour === 12)) {
            daySlots[diffInDays] = forecast; // Store forecast by day offset
        }
    }

    // Display them if available
    if (daySlots[0]) {
        firstForecast.innerHTML = `<span class="label">${convertDateTimeToWeekDay(daySlots[0].dt)}:</span>${Math.round(daySlots[0].main.temp)}&deg;F`;
    }

    if (daySlots[1]) {
        secondForecast.innerHTML = `<span class="label">${convertDateTimeToWeekDay(daySlots[1].dt)}:</span>${Math.round(daySlots[1].main.temp)}&deg;F`;
    }

    if (daySlots[2]) {
        thirdForecast.innerHTML = `<span class="label">${convertDateTimeToWeekDay(daySlots[2].dt)}:</span>${Math.round(daySlots[2].main.temp)}&deg;F`;
    }
}

// CALL THE FUNCTION
forecastAPIFetch();
