function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "de879077b25c4821b4116348dcf1cdcc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
