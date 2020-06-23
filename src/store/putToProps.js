import { bindActionCreators } from "redux";
import { updateWeather, updateWeatherForecast } from "./actions";

export const putStateToProps = (state) => {
    return {
      dataWeather: state.dataWeather,
      dataWeatherForecast: state.dataWeatherForecast,
    };
  };
export const putActionToProps = (dispatch) => {
    return {
      updateWeather: bindActionCreators(updateWeather, dispatch),
      updateWeatherForecast: bindActionCreators(updateWeatherForecast, dispatch),
    };
  };