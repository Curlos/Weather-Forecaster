const GEOCODING_ACCESS_TOKEN = process.env.REACT_APP_GEOCODING_ACCESS_TOKEN
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_GEOCODING_API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places`
const BASE_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/onecall`


export const getCoordsFromAPI = async (locationText) => {
    let API_URL = `${BASE_GEOCODING_API_URL}/${locationText}.json?access_token=${GEOCODING_ACCESS_TOKEN}`
    console.log(API_URL)
    let response = await fetch(API_URL)
    let data = await response.json()
    
    let longitude = data.features[0].center[0]
    let latitude = data.features[0].center[1]

    return [latitude, longitude]
}

export const getWeatherDataFromAPI = async (latitude, longitude) => {
    let API_URL = `${BASE_WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    let response = await fetch(API_URL)
    let data = await response.json()

    return data.daily
}