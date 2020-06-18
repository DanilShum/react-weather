import React, { useState } from "react";
import WeatherData from "weather-data/WeatherData";
import Context from "context";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [dataWeather, setDataWeather] = useState();
  const [dataWeatherForecast, setDataWeatherForecast] = useState();
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
        console.log(dataWeather);
        setErrorSrc(false);
        setDataWeather(response.data);
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
        console.log(dataWeatherForecast);
        setDataWeatherForecast(response.data);
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
    <Context.Provider
      value={{
        fetchData,
        loadingData,
        dataWeather,
        dataWeatherForecast,
        valueSerch,
        setValueSerch,
      }}
    >
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
    </Context.Provider>
  );
}

export default App;
