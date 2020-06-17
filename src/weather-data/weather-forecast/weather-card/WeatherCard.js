import React from "react";
import "./WeatherCard.css";

export default function WeatherCard(item) {
  const date = new Date(item.dt * 1000);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();

  let temp = item.main.temp;
  let iconDescription = item.weather[0].icon;
  let src = "http://openweathermap.org/img/wn/" + iconDescription + "@2x.png";

  return (
    <div className="weather__card">
      <time>
        {day}.{month + 1}.{year}
      </time>
      <br />
      <time>{hours}:00</time>
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
