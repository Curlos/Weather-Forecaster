import React, { useState, useEffect } from 'react';
import { getCoordsFromAPI, getWeatherDataFromAPI } from './utils/api';
import './style.css';

const App = () => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    const fetchFromApi = async () => {
      const coords = await getCoordsFromAPI('Los Angeles')
      const latitude = coords[0]
      const longitude = coords[1]



      const data = await getWeatherDataFromAPI(latitude, longitude)

      console.log(data)
    }

    fetchFromApi()
  }, [])
  

  return (
    <div className="App">
      Weather Forecaster
      <input type="text"></input>
    </div>
  );
}

export default App;
