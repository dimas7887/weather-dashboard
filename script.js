const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found');
            return;
        }

        document.getElementById('city-name').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather').innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById('weather-info').style.display = 'block';
    } catch (error) {
        alert('Error fetching data');
    }
}
