import {ACTION_DATA_WEATHER,ACTION_DATA_WEATHER_FORECAST} from '../index'

const initalState = {
    dataWeather: '',
    dataWeatherForecast: ''
};
  
  export const rootReducer = (state = initalState, action) => {
    switch (action.type) {
      case ACTION_DATA_WEATHER:
        return { ...state, dataWeather: action.payload };
  
      case ACTION_DATA_WEATHER_FORECAST:
        return { ...state, dataWeatherForecast: action.payload };
    }
    return state;
  };