import React from 'react'
import { useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './LocationMap.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VybWFpbmVjIiwiYSI6ImNsc3NheDlqcTFseXQya211czN1MGoyZWUifQ._5a858W_iGnnbdUuD0lYsA';

const LocationMap = () => {
  const mapContainer = useRef(null);
  console.log(mapContainer);
  const map = useRef(null);
  const [lng, setLng] = useState(123.1207);
  const [lat, setLat] = useState(49.2827);
  const [zoom, setZoom] = useState(8);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    
  });
  
  return (
    <div className="map-container">
      <div ref={mapContainer} className="map-bob" />
    </div>
  )
}

export default LocationMap
