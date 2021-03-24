import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class ActiveCity extends Component {
  render() {
    return (
      <div className="active-city">
        <h2>City Name</h2>
        <p>Adress</p>
        {/* <img src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} alt="" /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
