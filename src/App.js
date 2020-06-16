import React, { useState, useEffect } from "react";

import WeatherData from "weather-data/WeatherData";
import Context from "context";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [dataWeather, setDataWeather] = useState();
  const [dataWeatherForecast, setDataWeatherForecast] = useState();
  const [valueSerch, setValueSerch] = useState("");

  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=55.7480817&lon=37.59&dt=1586468027&units=metric&appid=40027024443402de9525844b900358ab"
      )
      .then(function (response) {
        setDataWeather(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function forecastData() {
    setLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=55.7480817&lon=37.59&exclude=current&units=metric&appid=40027024443402de9525844b900358ab"
      )
      .then(function (response) {
        setDataWeatherForecast(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function searhCity() {
    console.log(dataWeather);
    console.log(dataWeatherForecast);
    fetchData();
    forecastData();
  }

  function itemForecast(arr, func) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
      newArr.push(func(arr[i], i, arr));
    }
    return newArr;
  }

  return (
    <Context.Provider
      value={{
        fetchData,
        searhCity,
        dataWeather,
        dataWeatherForecast,
        valueSerch,
        setValueSerch,
        itemForecast,
      }}
    >
      <section className="weather">
        <h1 className="weather__logo">Weather</h1>
        <label className="weather__search">
          <input
            value={valueSerch}
            onChange={(evt) => setValueSerch(evt.target.value)}
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                searhCity();
              }
            }}
            type="text"
            placeholder="Your city"
          />
        </label>
        {dataWeather && dataWeatherForecast && <WeatherData />}
      </section>
    </Context.Provider>
  );
}

export default App;
