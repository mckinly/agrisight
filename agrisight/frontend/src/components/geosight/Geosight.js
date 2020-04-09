import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress } from "../../actions/address";

export class Geosight extends Component {
  static propTypes = {
    address: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <h1>Geosight main view</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.geosightReducer.address
});

export default connect(mapStateToProps)(Geosight);
