import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map google={props.google} zoom={14} 
    center={{
      lat: 40.854885,
      lng: -88.081807
    }}
    style={{width: '100%', height: '100%', position: 'relative', zIndex: 1}}
    onDragend={(state)=> console.log('dragged',state)}
    > 
 
 <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} 
    draggable={true}
   onDragend={(state)=> console.log('dragged',state)}
    />
 
      </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMdyBg_PG6w5qa2mHBFaZpQF68Jz92tjI')
})(MapContainer)
