import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { MapStyles } from "./MapStyles";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -37.788031, lng: 144.929969 }}
        defaultOptions={{
          styles: MapStyles,
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false
        }}
        disableDefaultUI
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: -37.788031, lng: 144.929969 }} />
        )}
      </GoogleMap>
    </div>
  ))
);

export default MyMapComponent;
