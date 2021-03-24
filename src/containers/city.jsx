import React, { Component } from 'react';

// redux files
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
