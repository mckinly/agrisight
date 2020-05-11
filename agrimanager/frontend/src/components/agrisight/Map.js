import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
  padding: "60%"
};

export class MapContainer extends Component {
  state = {
    center: { lat: 31.92782, lng: -105.212091 }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.state.center}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
