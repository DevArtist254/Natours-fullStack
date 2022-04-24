import React from 'react';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';

const Location = ({ longitude, latitude, locations }) => {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      {locations.map((point) => (
        <Marker
          key={point._id}
          position={{
            lat: point.coordinates[1],
            lng: point.coordinates[0],
          }}
        />
      ))}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Location));

export default MapWrapped;
