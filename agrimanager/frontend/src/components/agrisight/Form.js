import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addAcreage } from "../../actions/acreage";

export class Form extends Component {
  state = {
    name: "",
    address: "",
    email: ""
  };

  static propTypes = {
    addAcreage: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, address, email } = this.state;
    const acreage = { name, email, address };
    this.props.addAcreage(acreage);
    this.setState({
      name: "",
      address: "",
      email: ""
    });
  };

  render() {
    const { name, email, address } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Acreage</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              test-id="add-acreage-name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              type="text"
              name="address"
              onChange={this.onChange}
              value={address}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addAcreage }
)(Form);
