import React, { useContext } from "react";
import WeatherCard from "./weather-card/WeatherCard";
import Context from "context";

export default function WeatherForecast() {
  const { dataWeatherForecast, itemForecast } = useContext(Context);
  return (
    <div className="weather__forecast">
      <h3 className="weather__forecast-title"></h3>
      {itemForecast(dataWeatherForecast.hourly, (item) => (
        <WeatherCard {...item} key={item.dt}/>
      ))}
    </div>
  );
}
