import React from 'react'
import WeatherInfoTeperature from './weather-info-temerature/WeatherInfoTeperature'
import WeatherInfoFull from './weather__info-full/WeatherInfoFull'
import './WeatherInfoDay.css'

export default function WeatherInfoDay(){
    
    let currentDay = new Date().toLocaleString('ru', { day: 'numeric', month: 'long', weekday: 'long' })

    return (
        <div className="weather__info">
            <h3 className="weather__info-title"> {currentDay}</h3>
            <div className="weather__info-content">
                <WeatherInfoTeperature/>
                <WeatherInfoFull/>
            </div>
        </div>
    )
}
