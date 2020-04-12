import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAddress, deleteAddress } from "../../actions/address";

export class Agrisight extends Component {
  static propTypes = {
    address: PropTypes.array.isRequired,
    getAddress: PropTypes.func.isRequired,
    deleteAddress: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getAddress();
  }

  render() {
    return (
      <Fragment>
        <h2>Agrisight main view</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.address.map(address => (
              <tr key={address.id}>
                <td>{address.id}</td>
                <td>{address.name}</td>
                <td>{address.address}</td>
                <td>{address.email}</td>
                <td>
                  <button
                    onClick={this.props.deleteAddress.bind(this, address.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  address: state.agrisightReducer.address
});

export default connect(
  mapStateToProps,
  { getAddress, deleteAddress }
)(Agrisight);
