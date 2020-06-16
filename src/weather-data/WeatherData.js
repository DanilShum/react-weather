import React,{useContext} from 'react';
import WeatherInfoDay from './weather-day/WeatherInfoDay' 
import WeatherForecast from './weather-forecast/WeatherForecast'
import Context from "context"

export default function WeatherData(){
    const {dataWeather} = useContext(Context)
    let city =  dataWeather.name


    return (
        <section className="weather__container">
            <h2 className="weather__city"> {city}</h2>
            <WeatherInfoDay/>
            <WeatherForecast/>
        </section>
    )
}