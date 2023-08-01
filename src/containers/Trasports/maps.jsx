import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {

  return (
    <div 
    >

      <Map
        google={props.google}
        zoom={14}
        initialCenter={{
          lat: 18.561254,
          lng: -68.365072,
        }}
        center={{
          lat: props?.latitude,
          lng: props?.longitude,
        }}
     containerStyle={{ position:'relative', width:'auto', height:500}}
        onDragend={(state) => console.log("dragged", state)}
      >
        <Marker
          title={"Destino"}
          name={"Destino"}
          position={{ lat: 18.561254, lng: -68.365072 }}
          draggable={true}
          onDragend={(state) => console.log("dragged", state)}
        />
        <Marker
          title={"Tu ubicación"}
          name={"Tu ubicación"}
          position={{ lat: props.latitude, lng: props.longitude }}
          draggable={true}
          onDragend={(state) => console.log("dragged", state)}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMdyBg_PG6w5qa2mHBFaZpQF68Jz92tjI",
})(MapContainer);
