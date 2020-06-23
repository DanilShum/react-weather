import React from "react";
import WeatherCard from "./weather-card/WeatherCard";
import WeatherGraph from "./weather-graph/WeatherGraph";
import "./WeatherForecast.css";
import { putStateToProps, putActionToProps } from "store/putToProps";
import { connect } from "react-redux";

function WeatherForecast(props) {
  const dataWeatherForecast = props.dataWeatherForecast;

  return (
    <section className="weather__forecast-info">
      <div className="weather__forecast">
        <h3 className="weather__forecast-title"></h3>
        {dataWeatherForecast.list.map((item) => (
          <WeatherCard {...item} key={item.dt} />
        ))}
      </div>
      <WeatherGraph />
    </section>
  );
}

export default connect(putStateToProps, putActionToProps)(WeatherForecast);
