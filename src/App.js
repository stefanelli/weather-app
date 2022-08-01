import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/curent-weather/current-weather';
import {WEATHER_URL, WEATHER_KEY} from './api';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ')
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    const currentWeatherFetch = fetch(`${WEATHER_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`)
    const forecastFetch = fetch(`${WEATHER_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (data) => {
        const currentResp = data[0].json()
        const forecastResp = data[1].json()
      })
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather /> 
    </div>
  );
}

export default App;
