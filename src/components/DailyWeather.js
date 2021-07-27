const DailyWeather = ({day}) => {
    return (
        <div key={day.dt} className="dailyWeather">
            Day: {new Date(day.dt * 1000).toLocaleTimeString() + ", " + new Date(day.dt * 1000).toString().slice(0, 15)}
            Temp: {day.temp.day} 
            Weather Condition: {day.weather[0].main} 
            Icon: <img src={'http://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png'} alt={day.weather[0].main}/> 
            Humidity: {day.humidity}  
            Wind Speed: {day.wind_speed}
            <br></br>
        </div>
    )
}

const TestWeather = ({day}) => {
    return (
        <div key={day.dt} className="dailyWeather">
            Day: {new Date(day.dt * 1000).toLocaleTimeString() + ", " + new Date(day.dt * 1000).toString().slice(0, 15)}
            Temp: {day.temp.day} 
            Weather Condition: {day.weather[0].main} 
            Icon: <img src={'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png'} alt={day.weather[0].main}/> 
            Humidity: {day.humidity}  
            Wind Speed: {day.wind_speed}
            <br></br>
        </div>
    )
}

export default DailyWeather;