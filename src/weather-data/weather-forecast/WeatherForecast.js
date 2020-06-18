import React, { useContext } from "react";
import WeatherCard from "./weather-card/WeatherCard";
import WeatherGraph from "./weather-graph/WeatherGraph";
import Context from "context";
import './WeatherForecast.css'

export default function WeatherForecast() {
  const { dataWeatherForecast} = useContext(Context);

  return (
    <section className="weather__forecast-info">
      <div className="weather__forecast">
        <h3 className="weather__forecast-title"></h3>
        {dataWeatherForecast.list.map((item) => (
          <WeatherCard {...item} key={item.dt} />
        ))}
      </div>
        <WeatherGraph/>
    </section>
  );
}
