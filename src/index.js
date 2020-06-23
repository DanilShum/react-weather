import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from './store/reducers'

export const ACTION_DATA_WEATHER = 'ACTION_DATA_WEATHER'
export const ACTION_DATA_WEATHER_FORECAST = 'ACTION_DATA_WEATHER_FORECAST'
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
