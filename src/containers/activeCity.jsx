import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class ActiveCity extends Component {
  render() {
    let name = "City Name";
    let address = "Address";
    let imageUrl = `https://source.unsplash.com/random`;
    if (this.props.selectedCity) {
      name = this.props.selectedCity.name;
      address = this.props.selectedCity.address;
      imageUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
    }
    return (
      <div className="active-city">
        <h2>{name}</h2>
        <p>{address}</p>
        <img src={imageUrl} alt={name} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
