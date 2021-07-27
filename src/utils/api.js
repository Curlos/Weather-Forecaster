const GEOCODING_ACCESS_TOKEN = process.env.REACT_APP_GEOCODING_ACCESS_TOKEN
const BASE_API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places`


export const getCoordsFromAPI = async (locationText) => {
    let API_URL = `${BASE_API_URL}/${locationText}.json?access_token=${GEOCODING_ACCESS_TOKEN}`
    let response = await fetch(API_URL)
    let data = await response.json()
    
    let longitude = data.features[0].center[0]
    let latitude = data.features[0].center[1]

    return [latitude, longitude]
}