import React, { useState } from "react";
import "./PlayerCount.css";
// accept this passPlayerCount call as props, pass data to the function call in the event handler
const PlayerCount = ({ passPlayerCount }) => {
  const [activeIndex, setActiveIndex] = useState();
  const handleClick = (index) => {
    setActiveIndex(index);
    passPlayerCount(index + 1);
  };
  return (
    <div className="player-count-container">
      {[1, 2, 3, 4].map((number, index) => (
        <button
          key={number}
          onClick={() => handleClick(index)}
          className={`player-count-button ${
            activeIndex === index ? "active" : ""
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PlayerCount;
