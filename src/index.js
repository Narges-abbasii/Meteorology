function handleCityName(event) {
  event.preventDefault();
  let SearchedCityName = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = SearchedCityName.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleCityName);
