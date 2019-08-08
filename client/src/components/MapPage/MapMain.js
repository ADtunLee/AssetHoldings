/* global google */
import React from "react";
import _ from 'lodash'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  withScriptjs
} from "react-google-maps";
import { connect } from "react-redux";
class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dfZoom: 6,
      mapTypeId: "roadmap",
      point: { lat: 14.058324, lng: 108.277199 },
      marker: {}
    };
  }
  mountRef = ref => {
    this.map = ref;
  };
  handleOnDragEnd = () =>{
    var bound = this.map.getBounds();
    console.log(this.map.LatLngBounds())
    var marker = {
      lat: bound.ga.l,
      lng:bound.ga.l
    }
    console.log(marker)
    this.setState({
      marker: marker
    })
  }
  handleOnZoomChanged = () => {
    if (this.map.getZoom() === 19) {
      this.setState({
        dfZoom: 6,
        mapTypeId: "satellite",
      })
    }
    if (this.map.getZoom() === 18) {
      this.setState({
        dfZoom: 6,
        mapTypeId: "roadmap",
      })
    }
  };
  render() {
    var listMarker, ListPolygon;
    var reversedCoords = [];
    try {

      var currentAddress = this.props.currentAddress;
      //draw polygon current Address
      var coords = currentAddress.polygon.polygons.coordinates[0]
      var point = {
        lat: currentAddress.points.coordinates[1],
        lng: currentAddress.points.coordinates[0]
      }

      for (var i = 0; i < coords.length; i++) {
        var obj = {
          lat: coords[i][1],
          lng: coords[i][0]
        }
        reversedCoords.push(obj)
      }
      //List product point in map
      var ListProduct = this.props.listProductMarker;
      listMarker = (
        ListProduct.map((product, index) => {
          return (
            <Marker
              key={index}
              position={{ lat: product.points.coordinates[1], lng: product.points.coordinates[0] }}
              icon={{
                url: '/Marker/marker_bds_ban.svg',
                scaledSize: new window.google.maps.Size(15, 15)
              }}
            // onMouseOver={() => this.handleMarkerMouseOver(product)}
            // onMouseOut={this.handleMarkerMouseOut}
            />
          )
        })
      )
      ListPolygon = (
        this.props.ListAddressInside.map((addressInside, index) => {
          var nowReversedCoords = [];

          for (var i = 0; i < addressInside.polygon.polygons.coordinates[0].length; i++) {

            var obj = {
              lat: addressInside.polygon.polygons.coordinates[0][i][1],
              lng: addressInside.polygon.polygons.coordinates[0][i][0]
            }
            nowReversedCoords.push(obj)
          }

          return (<Polygon
            path={nowReversedCoords}
            key={index}
            //onMouseOver={() => this.handleMarkerMouseOver(addressInside)}
            options={{
              fillColor: "#000",
              fillOpacity: 0,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1
            }}
            onClick={() => {
              console.log("ahmet")
            }} />
          )
        })
      )

    } catch (err) {
      console.log(err)
    }



    return (
      <GoogleMap
        onDragEnd={this.handleOnDragEnd}
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

        zoom={this.props.zoom}
        center={this.props.point}
        onZoomChanged={this.handleOnZoomChanged}
      >
        <Marker
              position={this.state.marker}
              icon={{
                url: '/Marker/marker_bds_ban.svg',
                scaledSize: new window.google.maps.Size(15, 15)
              }}
            // onMouseOver={() => this.handleMarkerMouseOver(product)}
            // onMouseOut={this.handleMarkerMouseOut}
            />
        <Polygon
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
            console.log("ahmet")
          }} />
        {ListPolygon}
        {listMarker}
      </GoogleMap>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ListAddressInside: state.mapReducers.listAddressInside,
    listProductMarker: state.mapReducers.listProductMarker,
    currentAddress: state.mapReducers.currentAddress,
    listAddress: state.mapReducers.listAddressInside
  }
}

export default connect(mapStateToProps, null)(withScriptjs(withGoogleMap(MainMap)));
