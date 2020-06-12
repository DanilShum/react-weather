import React from 'react'
import WeatherInfoTeperature from './weather-info-temerature/WeatherInfoTeperature'
import WeatherInfoFull from './weather__info-full/WeatherInfoFull'

export default function WeatherInfoDay(){
    return (
        <div className="weather__info">
            <h3 className="weather__info-title"></h3>
            <WeatherInfoTeperature/>
            <WeatherInfoFull/>
            
        </div>
    )
}
