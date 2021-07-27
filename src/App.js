import React, { useState, useEffect } from 'react';
import {convertFromKelvinToCelsius, convertFromKelvinToFarenheit} from './utils/tempConverter'
import { getCoordsFromAPI, getWeatherDataFromAPI } from './utils/api';
import './style.css';

const App = () => {
  const [location, setLocation] = useState('London')

  const fetchFromApi = async () => {
    const coords = await getCoordsFromAPI(location)

    const latitude = coords[0]
    const longitude = coords[1]
    console.log([latitude, longitude])
    const data = await getWeatherDataFromAPI(latitude, longitude)

    console.log(data)
  }

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const handleClick = (event) => {
    fetchFromApi()
  }

  

  return (
    <div className="App">
      Weather Forecaster
      <input type="text" className="locationInput" id="locationInput" onChange={handleChange}></input>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
