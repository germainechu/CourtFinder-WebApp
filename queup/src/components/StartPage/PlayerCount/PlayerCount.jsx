import React, { useState } from "react";
import "./PlayerCount.css";
const PlayerCount = ({ updatePlayerNum }) => {
  const [activeIndex, setActiveIndex] = useState();

  // update the player num with the number selected by the client
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log("index", index);
    updatePlayerNum(index + 1);
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
