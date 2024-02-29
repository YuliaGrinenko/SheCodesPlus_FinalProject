function showWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
  let iconElement = document.querySelector("#icon");
  let iconId = response.data.weather[0].icon;
  iconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconId}@2x.png" class="current-temperature-icon"/>`;

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

function getCoordinates(response) {
  let lat = response.data[0].lat;
  let lon = response.data[0].lon;
  console.log(response.data[0].lat);
  console.log(response.data[0].lon);
  let apiKey = "195c2c787bc01a377e2ef01266be08ce";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=195c2c787bc01a377e2ef01266be08ce`;
  axios.get(apiUrl).then(showForecast);
}

function getLocation(city) {
  let apiUrllocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=195c2c787bc01a377e2ef01266be08ce`;
  axios.get(apiUrllocation).then(getCoordinates);
}

function searchApi(city) {
  let apiKey = "195c2c787bc01a377e2ef01266be08ce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=195c2c787bc01a377e2ef01266be08ce&units=metric`;
  axios.get(apiUrl).then(showWeather);
  //https:https://api.openweathermap.org/data/3.0/onecall?q=London&appid=195c2c787bc01a377e2ef01266be08ce&units=metric
  //https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=195c2c787bc01a377e2ef01266be08ce
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

function formatDay(date) {
  let dateForecast = new Date(response.data.list.dt * 1000);
  console.log(dateForecast);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[dateForecast.getDay()];
}

function showForecast(response) {
  console.log(response);
}

searchApi("London");
getLocation("London");
