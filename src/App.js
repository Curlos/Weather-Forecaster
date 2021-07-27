import React, { useState, useEffect } from 'react';
import {convertFromKelvinToCelsius, convertFromKelvinToFarenheit} from './utils/tempConverter'
import { getCoordsFromAPI, getWeatherDataFromAPI } from './utils/api';
import DailyWeather from './components/DailyWeather';
import CurrentWeather from './components/CurrentWeather';
import './style.css';

const App = () => {
  const [location, setLocation] = useState('London')
  const [sevenDayWeatherInfo, setSevenDayWeatherInfo] = useState([])

  const fetchFromApi = async () => {
    const coords = await getCoordsFromAPI(location)

    const latitude = coords[0]
    const longitude = coords[1]
    console.log([latitude, longitude])
    const data = await getWeatherDataFromAPI(latitude, longitude)

    return data
  }

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const handleClick = async () => {
    const dailyData = await fetchFromApi()
    console.log('info:')
    console.log(dailyData)
    setSevenDayWeatherInfo(dailyData)
  }
  

  return (
    <div className="App">
      Your city: 
      <input type="text" className="locationInput" id="locationInput" onChange={handleChange}></input>
      <button onClick={handleClick}>Get forecast</button>

      <div className="weatherInfo">
        {sevenDayWeatherInfo.map((day) => {
          return (
            <DailyWeather day={day} className="dailyWeather"/>
          )
        })}
      </div>
    </div>
  );
}

export default App;