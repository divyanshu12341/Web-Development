document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descDisplay = document.getElementById("description");
  const errorDisplay = document.getElementById("error-message");
  const API_KEY = 'e9f15d858a7d40ab9ac6a982d87dfd07';

  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError("error.message"); // Display specific error message
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    const {name,weather,main} = data;
    console.log(name);
    cityNameDisplay.textContent = name;
    descDisplay.textContent = main;
    if(cityNameDisplay.textContent != ''){
        weatherInfo.classList.remove('hidden')
    }
    temperatureDisplay.textContent = `Temperature:${main.temp}`
    descDisplay.textContent = `Description:${weather[0].description}`

    
    // ... (update temperature, description, etc. based on weatherData)
  }

  function showError(errorMessage) {
    weatherInfo.classList.add('hidden');

    errorDisplay.classList.remove('hidden');
  }
});