import React from 'react';
import './LocationHeader.css';
import StarRating from './StarRating'; // Assume the StarRating component is in the same folder

const LocationHeader = ({ locationName, rating }) => {
  return (
    <div className="location-header">
      <h1 className="location-name">{locationName}</h1>
      <StarRating rating={rating} />
    </div>
  );
};

export default LocationHeader;
