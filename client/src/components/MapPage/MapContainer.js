import React, { Component } from "react";
import _ from 'lodash'
import MapMain from './MapMain'
import { connect } from 'react-redux'
class MapContainer extends Component {
  render() {
    var {currentAdress}= this.props;
    var zoom = (!_.isEmpty(currentAdress)) ? 9 : 6
    var point = (!_.isEmpty(currentAdress)) ? { lat: currentAdress.points.coordinates[1], lng: currentAdress.points.coordinates[0] } : { lat: 14.058324, lng: 108.277199 };
    return (

      <div style={{ width: "100%", height: "100%" }}>
        <MapMain
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCJ3OhlLAMrjzUBCU2vcHRSTlAqBc-NGTI`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          zoom= {zoom}
          point={point}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentAdress: state.mapReducers.currentAddress,
    listAddress: state.mapReducers.listAddressInside
  }
}


export default connect(mapStateToProps, null)(MapContainer);
