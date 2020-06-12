import React from 'react'
import WeatherCard from './weather-card/WeatherCard'

export default function WeatherForecast(){
    return (
        <div className="weather__forecast">
            <h3 className="weather__forecast-title"></h3>
            <WeatherCard/>
        </div>
    )
}

