/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";
import { connect } from "react-redux";
class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dfZoom: 6,
      mapTypeId: "terrain"
    };
  }
  mountRef = ref => {
    console.log(ref);
    this.map = ref;
  };
  handleOnBoundsChanged = () => {
    if (this.map.getZoom() > 10) {
      this.setState({
        dfZoom: this.map.getZoom(),
        mapTypeId: "satellite"
      });
    }else {
        this.setState({
            dfZoom: this.map.getZoom(),
            mapTypeId: "terrain"
          });
    }
  };
  render() {
    return (
      <GoogleMap
        ref={this.mountRef}
        fullscreenControl={false}
        mapTypeControl={true}
        streetViewControl={true}
        defaultOptions={{
          //disableDefaultUI: true, // disable default map UI
          draggable: true, // make map draggable
          keyboardShortcuts: false, // disable keyboard shortcuts
          scaleControl: true, // allow scale controle
          scrollwheel: true, // allow scroll wheel
          styles: [
            {
              featureType: "all",
              elementType: "labels",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 36
                }
              ]
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on"
                },

                {
                  lightness: 16
                }
              ]
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            }
          ] // change default map styles
        }}
        scaleControl={true}
        mapTypeId={this.state.mapTypeId}
        defaultZoom={this.state.dfZoom}
        defaultCenter={{ lat: 14.058324, lng: 108.277199 }}
        onBoundsChanged={this.handleOnBoundsChanged}
      >
        {/* <Polygon
          path={reversedCoords}
          key={1}
          options={{
            fillColor: "red",
            fillOpacity: 0,
            strokeColor: "red",
            strokeOpacity: 1,
            strokeWeight: 2
          }}
          onClick={() => {
            console.log("ahmet");
          }}
        /> */}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(MainMap));
