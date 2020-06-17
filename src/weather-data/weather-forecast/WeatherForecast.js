import React, { useContext } from "react";
import WeatherCard from "./weather-card/WeatherCard";
import Context from "context";
import './WeatherForecast.css'

export default function WeatherForecast() {
  const { dataWeatherForecast} = useContext(Context);
  return (
    <div className="weather__forecast">
      <h3 className="weather__forecast-title"></h3>
      {dataWeatherForecast.list.map((item) => (
        <WeatherCard {...item} key={item.dt}/>
      ))}
    </div>
  );
}
