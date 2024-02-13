import React, { useState } from 'react';
import './PlayerCount.css';

const PlayerCount = () => {
  const [activeIndex, setActiveIndex] = useState(); 

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="player-count-container">
      {[1, 2, 3, 4].map((number, index) => (
        <button
          key={number}
          onClick={() => handleClick(index)}
          className={`player-count-button ${activeIndex === index ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PlayerCount
