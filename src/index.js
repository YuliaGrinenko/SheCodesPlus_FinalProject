function showWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response.data);
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="response.data.weather[0].icon"/>`;
  let timeElement = document.querySelector("#current-day-time");
  let date = new Date(response.data.dt * 1000);
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  console.log();
  return `${day}, ${hours}:${minutes}`;
}

function searchApi(city) {
  let apiKey = "195c2c787bc01a377e2ef01266be08ce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=195c2c787bc01a377e2ef01266be08ce&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input").value;
  let city = document.querySelector("#current-city");
  city.innerHTML = searchInputElement;
  searchApi(searchInputElement);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

searchApi("London");
