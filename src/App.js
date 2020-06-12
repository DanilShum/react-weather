import React from 'react';
import WeatherSearch from './search/WeatherSearch'
import WeatherData from './weather-city/WeatherData'
import Context from "./context"

function App() {
  return (
    <Context.Provider>
      <section className="weather">
        <h1 className="weather__logo">Weather</h1>
        <WeatherSearch/>
        <WeatherData/>
      </section>
    </Context.Provider>
  );
}

export default App;
