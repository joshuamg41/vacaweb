import React, { Component } from 'react'
import GoogleMaps from 'simple-react-google-maps'
export class Maps extends Component {
  render() {
    return (
      <div><GoogleMaps
      apiKey={"AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI"}
      style={{height: "400px", width: "100%"}}
      zoom={6}
      center={{lat: 37.4224764, lng: -122.0842499}}
      markers={{lat: 37.4224764, lng: -122.0842499}} //optional
    /></div>
    )
  }
}

export default Maps
