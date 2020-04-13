import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { viewAcreage } from "../../actions/acreage";
import Map from "./Map";

export class Acreage extends Component {
  state = {
    isVisible: false
  };

  static propTypes = {
    viewAcreage: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { isVisible } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Acreage Overview</h2>
        <Map />
        <button className="btn btn-primary">Close Acreage</button>
      </div>
    );
  }
}

export default connect(
  null,
  { viewAcreage }
)(Acreage);
