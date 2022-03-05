import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGV2YXJ0aXN0MjU0IiwiYSI6ImNremsxZTBzMTBjOTcybnRhcnAzOWl6aGMifQ.kLyF8ZZumQ0Ii3iTb59-Sg';

function Maps() {
  //set up init state
  const mapContainer = useRef(null);
  const map = useRef(null);
  //state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map
  const [lng, setLng] = useState(-80.185942);
  const [lat, setLat] = useState(25.774772);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div
      ref={mapContainer}
      style={{
        height: '400px',
      }}
      className="map-container"
    />
  );
}

export default Maps;
