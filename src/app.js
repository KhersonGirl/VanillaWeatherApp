

function displayTemperature(response) {
    console.log(response.data);
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#windSpeed");
    let presurreElement = document.querySelector("#pressure");
    let temperatureElement = document.querySelector("#temperature");
    let weatherDescription = document.querySelector("#weatherDescription");
    temperatureElement = Math.round(response.data.temp);
    weatherDescription.innerHTML = response.data.weather[0].description;
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    presurreElement.innerHTML = response.data.main.pressure;
    windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
    
}
let apiKey = "f2828a54751ffee5cb551f9ace005148";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);