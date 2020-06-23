import React from "react";
import "./WeatherInfoFull.css";
import { putStateToProps, putActionToProps } from "store/putToProps";
import { connect } from "react-redux";

function WeatherInfoFull(props) {
  const dataWeather = props.dataWeather;

  let minTemp = dataWeather.main.temp_min;
  let maxTemp = dataWeather.main.temp_max;
  let humidity = dataWeather.main.humidity;
  let speedWind = dataWeather.wind.speed;
  let pressure = dataWeather.main.pressure;
  let windDeg = dataWeather.wind.deg;

  return (
    <ul className="weather__info-full">
      <li>
        {minTemp}
        <sup>o</sup> <div>min temp</div>
      </li>
      <li>
        {maxTemp}
        <sup>o</sup> <div>max temp</div>
      </li>
      <li>
        {speedWind}
        <sup>m</sup>/<sub>s</sub> <div>speed wind</div>
      </li>
      <li>
        {windDeg} <div>wind deg</div>
      </li>
      <li>
        {humidity}% <div>humidity</div>
      </li>
      <li>
        {pressure} <div>pressure</div>
      </li>
    </ul>
  );
}
export default connect(putStateToProps, putActionToProps)(WeatherInfoFull);
