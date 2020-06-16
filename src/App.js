import React, { useState, useEffect } from "react";

import WeatherData from "weather-data/WeatherData";
import Context from "context";
import axios from "axios";
import listCity from './city.list.json'

function App() {
  const [loading, setLoading] = useState(false);
  const [dataWeather, setDataWeather] = useState();
  const [dataWeatherForecast, setDataWeatherForecast] = useState();
  const [valueSerch, setValueSerch] = useState("");
 
  let lat = 55.7480817
  let lon = 37.59
  
  
  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&dt=1586468027&units=metric&appid=40027024443402de9525844b900358ab"
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
        "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current&units=metric&appid=40027024443402de9525844b900358ab"
      )
      .then(function (response) {
        setDataWeatherForecast(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function loadingData() {
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

  function filterFunc(func){
    for(let i = 0; i < listCity.length; i++){
     func(listCity[i], i)
    }
  }

  function searchCity(item, index, arr){
    if(valueSerch === item.name){
      lon = item.coord.lon
      lat = item.coord.lat
      console.log(lon,lat)
      loadingData()
    }
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
                filterFunc(searchCity);
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
