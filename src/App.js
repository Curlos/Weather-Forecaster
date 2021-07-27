import React, { useState, useEffect } from 'react';
import { getCoordsFromAPI } from './utils/api';
import './style.css';

const App = () => {
  const [location, setLocation] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const fetchFromApi = async () => {
      let coords = await getCoordsFromAPI('Los Angeles')

      setLatitude(coords[0])
      setLongitude(coords[1])

      console.log(coords)
    }

    fetchFromApi()
  }, [])
  

  return (
    <div className="App">
      Weather Forecaster
      <input type="text"></input>
      {latitude}   {longitude}
    </div>
  );
}

export default App;
