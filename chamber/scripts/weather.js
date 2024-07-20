const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.40338&lon=2.17403&appid=9aa72b3339345fb3ee7919efaab78b24&units=imperial';
//const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.40338&lon=2.17403&appid=9aa72b3339345fb3ee7919efaab78b24&units=imperial';


async function apiFetch() {
    try {
        const response1 = await fetch(url);
        if (response1.ok) {
        const data = await response1.json();
        console.log(data);
        displayResults(data);
        } else {
            throw Error(await response1.text());
        }
        const response2 = await fetch(urlForecast);
        if (response2.ok) {
            const data = await response2.json();
            console.log(data);
            displayResults(data);
            } else {
                throw Error(await response2text());
            }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

async function fetchWeather() {
    try {
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            console.log("Forecast Data:", dataForecast);
            displayForecast(dataForecast);
        } else {
            throw Error(await responseForecast.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

function displayForecast(data) {
    
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));

    // Display the forecast for the next 3 days
    forecastContainer.innerHTML = ''; // Clear existing content
    dailyData.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = day.main.temp.toFixed(0);
        const desc = day.weather[0].description;
        const iconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        forecastContainer.innerHTML += `
            <div class="forecast-day">
                <h3>${dayName}</h3>
                <img src="${iconSrc}" alt="${desc}" />
                <p>${temp}&deg;F - ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
            </div>
        `;
    });
}

fetchWeather();