import React, { Component } from 'react';

// redux files
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const { name } = this.props.city;

    let classes = "city";
    if (this.props.city === this.props.selectedCity) { classes += " selected"; }

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className={classes} onClick={this.handleClick}>
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
