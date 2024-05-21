function refreshWeather(response) {
  let elementTemperature = document.querySelector("#temperature");
  let currentTemperature = Math.round(response.data.temperature.current);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.city;
  elementTemperature.innerHTML = currentTemperature;
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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
searchCity("Tehran");
