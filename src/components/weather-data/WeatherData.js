import React from "react";
import WeatherInfoDay from "./weather-day/WeatherInfoDay";
import WeatherForecast from "./weather-forecast/WeatherForecast";

import "./WeatherData.css";
import { putStateToProps, putActionToProps } from "store/putToProps";
import { connect } from "react-redux";

function WeatherData(props) {
  const dataWeather = props.dataWeather;

  let city = dataWeather.name;
  return (
    <section className="weather__container">
      <h2 className="weather__city"> {city}</h2>
      <WeatherInfoDay />
      <WeatherForecast />
    </section>
  );
}

export default connect(putStateToProps, putActionToProps)(WeatherData);
