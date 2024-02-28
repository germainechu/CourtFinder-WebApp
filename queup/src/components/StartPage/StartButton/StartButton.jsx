import React from "react";
import "./StartButton.css";
import { Link } from "react-router-dom";

const StartButton = (props) => {
  const username = "celine";
  return (
    <Link to={`/queue/${username}/${props.playerCount}`}>
      <button className="start-button">Next</button>
    </Link>
  );
};

export default StartButton;
