import React,{useContext} from 'react'
import Context from "context"
import './WeatherInfoTeperature.css'

function WeatherInfoTeperature(){
    const {dataWeather} = useContext(Context)
    
    let temp = dataWeather.main.temp
    let stateDescription = dataWeather.weather[0].description
    let iconDescription = dataWeather.weather[0].icon
    let src = "http://openweathermap.org/img/wn/" + iconDescription +  "@2x.png"
    
    return (
        <div className="weather__info-teperature">
            <div className="weather__info-teperature-item">
                <img src= {src} alt={stateDescription}/>
            </div>
            <div className="weather__info-teperature-wrapper">
                <div className="weather__current-temperature">{temp} <sup>o</sup></div> 
                <p> {stateDescription} </p>
            </div>
        </div>
    )

}


export default React.memo(WeatherInfoTeperature);

