// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import citiesReducer from './reducers/citiesReducer';
import selectedCityReducer from './reducers/selectedCityReducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
