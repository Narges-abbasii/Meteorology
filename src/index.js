function refreshWeather(response) {
  let elementTemperature = document.querySelector("#temperature");
  let currentTemperature = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#city");
  let elementDiscription = document.querySelector("#weather-description");
  let currentWeatherCondition = response.data.condition.description;
  let elementHumidity = document.querySelector("#humidity");
  let currentHumidity = `${response.data.temperature.humidity}%`;
  let elementWind = document.querySelector("#wind-speed");
  let currentWindSpeed = `${response.data.wind.speed}km/h`;
  let timeElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");
  let iconImage = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" id="weather-app-icon" />`;

  cityName.innerHTML = response.data.city;
  elementTemperature.innerHTML = currentTemperature;
  elementDiscription.innerHTML = currentWeatherCondition;
  elementHumidity.innerHTML = currentHumidity;
  elementWind.innerHTML = currentWindSpeed;
  timeElement.innerHTML = formatDate(date);
  icon.innerHTML = iconImage;
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apikey = "b318adc2a4e42ff5a70at1cf59b30fbo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchedCityName = document.querySelector("#search-form-input");
  searchCity(searchedCityName.value);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "sat"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
  <div class="weather-forecast-days">
    <div class="weather-forecast-date">${day}</div>
    <div class="weather-forecast-icon">🌤️</div>
    <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature">
        <strong>24°</strong>
      </div>
      <div class="weather-forecast-temperature">18°</div>
    </div>
  </div>
`;
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
searchCity("Tehran");

displayForecast();
