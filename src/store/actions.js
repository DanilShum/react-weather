import {ACTION_DATA_WEATHER,ACTION_DATA_WEATHER_FORECAST} from '../index'



  export const updateWeather = (newData) => {
    return {
      type: ACTION_DATA_WEATHER,
      payload: newData,
    };
  };
  export const updateWeatherForecast = (newData) => {
    return {
      type: ACTION_DATA_WEATHER_FORECAST,
      payload: newData,
    };
  };