const url = (city) => 
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "13de76fde6msh08ac0697f30452ap176380jsnb9508d9a6b50",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  // Ensure these elements are correctly selected from the DOM
  const cityName = document.getElementById('cityName');
  const cloud_pct = document.getElementById('cloud_pct');
  const cloud_pct_pul = document.getElementById('cloud_pct_pul');
  const temp = document.getElementById('temp');
  const temp2 = document.getElementById('temp2');
  const feels_like = document.getElementById('feels_like');
  const humidity = document.getElementById('humidity');
  const humidity2 = document.getElementById('humidity2');
  const min_temp = document.getElementById('min_temp');
  const max_temp = document.getElementById('max_temp');
  const wind_speed = document.getElementById('wind_speed');
  const wind_speed2 = document.getElementById('wind_speed2');
  const wind_degrees = document.getElementById('wind_degrees');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');
  
  cityName.innerHTML = city;
  (async () => {
    try {
      const response = await fetch(url(city), options);
      const result = await response.json(); // Parse the response as JSON
      console.log(result); // Check the response in the console

      // Update the DOM elements with the weather data
      cloud_pct.innerHTML = result.cloud_pct;
      cloud_pct_pul.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp2.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      humidity2.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_speed2.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  })();
}

// Add the event listener to the submit button
document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault(); // Prevents refresh
  const city = document.getElementById('city').value;
  getWeather(city);
});

// Get weather for the initial city
getWeather("Kathmandu");
