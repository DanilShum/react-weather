import React from "react";
import "./WeatherCard.css";

export default function WeatherCard(item) {
  const iconDescription = item.weather[0].icon;
  const src = "http://openweathermap.org/img/wn/" + iconDescription + "@2x.png";
  const temp = item.main.temp;
  const forecastDate = new Date(item.dt_txt).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
  });
  const forecastTime = new Date(item.dt_txt).toLocaleString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="weather__card">
      <time>{forecastDate}</time>
      <br />
      <time>{forecastTime}</time>
      <div className="weather__card-description">
        <img src={src} alt="state" />
      </div>
      <div className="weather__card-temperature">
        {temp}
        <sup>o</sup>
      </div>
    </div>
  );
}
