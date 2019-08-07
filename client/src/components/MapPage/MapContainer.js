import React, { Component } from "react";
import MapMain from './MapMain'
const places = [
    {
      name: "Newcastle",
      title: "Newcastle",
      lat: -33.0029954,
      lng: 147.204751,
      id: 1
    },
    {
      name: "Sydney",
      title: "Sydney",
      lat: -33.847927,
      lng: 150.6517938,
      id: 2
    },
    {
      name: "Melbourne",
      title: "Melbourne",
      lat: -37.9722342,
      lng: 144.7729561,
      id: 3
    },
    {
      name: "Perth",
      title: "Perth",
      lat: -31.9546904,
      lng: 115.8350292,
      id: 4
    }
  ];
  
class MapContainer extends Component {
  render() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
        <MapMain
           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJ3OhlLAMrjzUBCU2vcHRSTlAqBc-NGTI`}
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: -33.8665433, lng: 151.1956316 }}
          zoom={4}
          places={places}
        />
      </div>
    );
  }
}

export default MapContainer;
