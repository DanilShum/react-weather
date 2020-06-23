import React, { useState } from "react";
import WeatherData from "components/weather-data/WeatherData";
import axios from "axios";
import { connect } from "react-redux";
import { putStateToProps, putActionToProps } from "store/putToProps";

function App(props) {
  const [loading, setLoading] = useState(false);
  const {
    dataWeather,
    dataWeatherForecast,
    updateWeather,
    updateWeatherForecast,
  } = props;
  const [valueSerch, setValueSerch] = useState("");
  const [errorSrc, setErrorSrc] = useState(false);

  let city;

  function fetchData() {
    setLoading(true);

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: valueSerch,
          dt: 1586468027,
          units: "metric",
          appid: "40027024443402de9525844b900358ab",
        },
      })
      .then(function (response) {
        setErrorSrc(false);
        updateWeather(response.data);
      })
      .catch(function (error) {
        setErrorSrc(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function forecastData() {
    setLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=40027024443402de9525844b900358ab"
      )
      .then(function (response) {
        updateWeatherForecast(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function loadingData() {
    fetchData();
    forecastData();
  }

  function searchCity() {
    city = valueSerch;
    loadingData();
  }

  return (
    <section className="weather">
      <h1
        className={`weather__logo ${
          !errorSrc && dataWeather && dataWeatherForecast && "translate"
        }`}
      >
        Weather
      </h1>
      <label
        className={`weather__search ${
          !errorSrc &&
          dataWeather &&
          dataWeatherForecast &&
          "weather__search-translate"
        }`}
      >
        <input
          value={valueSerch}
          onChange={(evt) => setValueSerch(evt.target.value)}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              searchCity();
            }
          }}
          type="text"
          placeholder="Your city"
        />
      </label>
      {errorSrc ? (
        <div className="notFound">Sorry, no such city was found</div>
      ) : (
        dataWeather && dataWeatherForecast && <WeatherData />
      )}
    </section>
  );
}

export default connect(putStateToProps, putActionToProps)(App);
