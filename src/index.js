//function searchApi(city) {
//let apiKey = "195c2c787bc01a377e2ef01266be08ce";
//let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=195c2c787bc01a377e2ef01266be08ce`;
///axios.get(apiUrl).then(showWeather);

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input").value;
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInputElement;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
