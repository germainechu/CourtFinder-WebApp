import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
  );
};

export default StarRating;
