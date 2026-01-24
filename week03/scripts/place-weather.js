const apiKey = "385b1e37157639afaa9d3bba84235f46"; // OpenWeatherMap API Key
const city = "Bangkok, TH"; // Change to any city you want

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    );

    if (!response.ok) {
      throw new Error("Weather data not found");
    }

    const data = await response.json();
    updateWeatherUI(data);

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

function updateWeatherUI(data) {
  // Extract values
  const temp = Math.round(data.main.temp);
  const humidity = data.main.humidity;
  const wind = Math.round(data.wind.speed);
  const description = data.weather[0].description;

  // Update DOM
  document.querySelector(".weather-temp").textContent = `${temp}°F`;
  document.querySelector(".weather-humidity").textContent = `${humidity}%`;
  document.querySelector(".weather-wind").textContent = `${wind} mph`;
  document.querySelector(".weather-desc").textContent = description;

}

// Run on page load
getWeather();
