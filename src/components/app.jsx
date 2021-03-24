import React from 'react';
import CityList from '../containers/cityList';
import ActiveCity from '../containers/activeCity';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
