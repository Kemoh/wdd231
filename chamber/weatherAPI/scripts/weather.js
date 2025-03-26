// CURRENT WEATHER CALL
// SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector("#freetown");
const myTemp = document.querySelector('#temperature');
const myDescription = document.querySelector("#description");
const highTemp = document.querySelector("#high");
const lowTemp = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const weatherIcon = document.querySelector('#weatherIcon');

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = `075d83d2516c1fbd2c1caca204a4e06e`;
const myLat = "8.48";
const myLong = "-13.23";

// CONSTRUCT A PATH USING TEMPLATE LITERAL
// FOR THE CURRENT WEATHER:
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`;

// TRY TO GRAB THE CURRENT WEATHER DATA
async function currentWeatherAPIFetch() {
  try {
    const response = await fetch(currentWeatherURL);
    if (response.ok) {
      const currentData = await response.json();
      //console.log(currentData); // testing only
      displayResults(currentData); // uncomment when ready
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

    //console.log("Hello!");
    myTown.innerHTML = `<span  class = "location-pin">📍</span>${data.name}`;
    myTemp.innerHTML = `${Math.ceil(data.main.temp)}&degF`;
    myDescription.innerHTML = `Weather: ${data.weather[0].description}`;
    highTemp.innerHTML =  `High Temperature: ${Math.ceil(data.main.temp_max)}&degF`;
    lowTemp.innerHTML =  `Low Temperature: ${Math.ceil(data.main.temp_min)}&degF`;
    humidity.innerHTML = `<span>🌡💧</span>Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    sunset.innerHTML = `Sunset: ${sunsetTime}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
  }  
}
currentWeatherAPIFetch();




// CALL FOR 3 DAYS FORECAST
// SELECT HTML ELEMENTS IN THE DOCUMENT
const firstForecast = document.querySelector("#forecast-1");
const secondForecast = document.querySelector("#forecast-2");
const thirdForecast = document.querySelector("#forecast-3");

// CONSTRUCT A PATH USING TEMPLATE LITERAL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// FUNCTION TO CONVERT TIMESTAMP (dt) TO WEEKDAY
function convertDateTimeToWeekDay(timestamp) {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    return date.toLocaleDateString("en-US", { weekday: "long" }); // Get full weekday name
}

// TRY TO GRAB THE HOURLY WEATHER DATA
async function forecastAPIFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forecastData = await response.json();
            //console.log(forecastData); // Testing only
            showResults(forecastData); // Uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}

// FUNCTION TO DISPLAY RESULTS
function showResults(data) {
    // Select forecasts per days
    const firstDayForecast = data.list[0]; // Today
    const thirdDayForecast = data.list[13]; // Wednesday
    const sixDayForecast = data.list[28]; // Friday

    // Get weekday names
    const firstDayName = convertDateTimeToWeekDay(firstDayForecast.dt);
    const thirdDayName = convertDateTimeToWeekDay(thirdDayForecast.dt);
    const sixDayName = convertDateTimeToWeekDay(sixDayForecast.dt);

    // Display results in HTML
    firstForecast.innerHTML = `<span id="today">${firstDayName}: ${Math.ceil(firstDayForecast.main.temp)}&deg;F</span>`;
    secondForecast.innerHTML = `${thirdDayName}: ${Math.ceil(thirdDayForecast.main.temp)}&deg;F`;
    thirdForecast.innerHTML = `${sixDayName}: ${Math.ceil(sixDayForecast.main.temp)}&deg;F`;
}

// CALL THE FUNCTION
forecastAPIFetch();
