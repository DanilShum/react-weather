import React, {useContext} from 'react'
import Context from "context"

export default function WeatherInfoFull(){
    const {dataWeather} = useContext(Context)

    let minTemp = dataWeather.main.temp_min
    let maxTemp = dataWeather.main.temp_max
    let humidity = dataWeather.main.humidity
    let speedWind = dataWeather.wind.speed
    let pressure = dataWeather.main.pressure
    let windDeg = dataWeather.wind.deg
    
    return (
        <ul className="weather__info-full">
            <li>{minTemp} <div>min temp</div></li>
            <li>{maxTemp} <div>max temp</div></li>
            <li>{speedWind} <div>speed wind</div></li>
            <li>{windDeg} <div>windDeg</div></li>
            <li>{humidity} <div>humidity</div></li>
            <li>{pressure} <div>pressure</div></li>
        </ul>
    )
}
