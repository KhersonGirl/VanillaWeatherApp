function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let day = days[date.getDay()];

    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${day}   ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#windSpeed");
    let presurreElement = document.querySelector("#pressure");
    let temperatureElement = document.querySelector("#temperature");
    let weatherDescription = document.querySelector("#weatherDescription");
    let currentDateElement = document.querySelector("#currentDate");
    let iconElement = document.querySelector("#icon");

    temperatureElement = Math.round(response.data.temp);
    weatherDescription.innerHTML = response.data.weather[0].description;
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    presurreElement.innerHTML = response.data.main.pressure;
    windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
    currentDateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http:/openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    
}
function search(city){
let apiKey = "f2828a54751ffee5cb551f9ace005148";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);