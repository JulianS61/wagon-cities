import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  render() {
    const { name } = this.props.city;
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
}

export default City;
