// API details
const API_KEY = "8594400ed560682ee5fa46e00ff56279"; // 👉 Get free from openweathermap.org
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("cityInput");
const button = document.getElementById("getWeatherBtn");
const result = document.getElementById("weatherResult");

// fetch weather data
async function getWeather(Kasarani) {
  try {
    // Build API URL
    const url = `${BASE_URL}?q=${Kasarani}&appid=${API_KEY}&units=metric`;

    // Fetch data from API
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    // Convert response to JSON
    const data = await response.json();

    // Extract useful info
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    // Display result
    result.innerHTML = `
      <h3>Weather in ${Kasarani}</h3>
      <p>Temperature: ${temperature}°C</p>
      <p>Condition: ${description}</p>
    `;
  } catch (error) {
    // Handle errors (e.g., wrong city name)
    result.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}

// Add click event to button
button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) {
    getWeather(city); // call async function
  } else {
    result.innerHTML = `<p style="color:red;">Please enter a city name!</p>`;
  }
});