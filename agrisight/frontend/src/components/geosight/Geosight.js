import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress } from "../../actions/address";

export class Geosight extends Component {
  static propTypes = {
    address: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getAddress();
  }

  render() {
    return (
      <Fragment>
        <h2>Geosight main view</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.address.map(lead => {
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  address: state.geosightReducer.address
});

export default connect(
  mapStateToProps,
  { getAddress }
)(Geosight);
