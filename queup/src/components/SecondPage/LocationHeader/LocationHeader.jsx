import React from 'react';
import './LocationHeader.css';

const LocationHeader = ({ locationName, rating }) => {
  return (
    <div className="location-header--container">
    <div className="location-header">
      <h1 className="location-name">{locationName}</h1>
    </div>
    </div>
  );
};

export default LocationHeader;
