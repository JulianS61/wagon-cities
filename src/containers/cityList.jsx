import React, { Component } from 'react';
import City from '../containers/city';

// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  componentWillMount() {}

  render() {
    const { cities } = this.props;
    return (
      <div className="cities list-group-item" >
        {cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
