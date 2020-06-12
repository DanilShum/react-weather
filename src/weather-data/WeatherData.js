import React from 'react';
import WeatherInfoDay from './weather-container/WeatherInfoDay' 
import WeatherForecast from './weather-container/WeatherForecast'

export default function WeatherData(){
    return (
        <section className="weather__container">
            <h2 className="weather__city"></h2>
            <WeatherInfoDay/>
            <WeatherForecast/>
        </section>
    )
}