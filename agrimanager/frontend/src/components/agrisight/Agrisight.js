import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAcreage, deleteAcreage } from "../../actions/acreage";

export class Agrisight extends Component {
  static propTypes = {
    acreage: PropTypes.array.isRequired,
    getAcreage: PropTypes.func.isRequired,
    deleteAcreage: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getAcreage();
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
            {this.props.acreage.map(acreage => (
              <tr key={acreage.id}>
                <td>{acreage.id}</td>
                <td>{acreage.name}</td>
                <td>{acreage.address}</td>
                <td>{acreage.email}</td>
                <td>
                  <button
                    onClick={this.props.deleteAcreage.bind(this, acreage.id)}
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
  acreage: state.agrisightReducer.acreage
});

export default connect(
  mapStateToProps,
  { getAcreage, deleteAcreage }
)(Agrisight);
