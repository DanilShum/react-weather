import React from "react";

export default function WeatherCard(item) {
  const date = new Date(item.dt * 1000);

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  
  let temp = item.temp;
  let iconDescription = item.weather[0].icon;
  let src = "http://openweathermap.org/img/wn/" + iconDescription + "@2x.png";

  return (
    <div className="weather__card">
      <time>
        {day} {month + 1} {year}
      </time>{" "}
      <br />
      <time>{hours}</time>
      <div className="weather__card-description">
        <img src={src} />
      </div>
      <div className="weather__card-temperature">{temp}</div>
    </div>
  );
}
