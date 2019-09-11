import React from "react";
import GoogleMapReact from "google-map-react";
class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.Latitude,
        lng: this.props.Longitude
      },
      zoom: 17
    };
  }

  render() {
    return (
      <div style={{ height: 200, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDbey85sD1Q5dABgn-awStG-snXi4q2F1w" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
