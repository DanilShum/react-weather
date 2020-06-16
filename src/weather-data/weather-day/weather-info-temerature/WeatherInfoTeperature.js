import React,{useContext} from 'react'
import Context from "context"

export default function WeatherInfoTeperature(){
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
                <p> {temp} <sup>o</sup> </p>
                <p> {stateDescription} </p>
            </div>
        </div>
    )

}

