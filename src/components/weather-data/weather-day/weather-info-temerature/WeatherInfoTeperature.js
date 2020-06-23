import React from "react";
import "./WeatherInfoTeperature.css";
import { putStateToProps, putActionToProps } from "store/putToProps";
import { connect } from "react-redux";

function WeatherInfoTeperature(props) {
  const dataWeather = props.dataWeather;
  let temp = dataWeather.main.temp;
  let stateDescription = dataWeather.weather[0].description;
  let iconDescription = dataWeather.weather[0].icon;
  let src = "http://openweathermap.org/img/wn/" + iconDescription + "@2x.png";

  return (
    <div className="weather__info-teperature">
      <div className="weather__info-teperature-item">
        <img src={src} alt={stateDescription} />
      </div>
      <div className="weather__info-teperature-wrapper">
        <div className="weather__current-temperature">{temp}°</div>
        <p> {stateDescription} </p>
      </div>
    </div>
  );
}

export default connect(
  putStateToProps,
  putActionToProps
)(WeatherInfoTeperature);
