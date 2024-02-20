import React from "react";
import "./StartButton.css";
import { Link } from "react-router-dom";

const StartButton = (props) => {
  const testUsername = "TheQueupTeam";
  return (
    <Link to={`/queue/${testUsername}/${props.playerCount}`}>
      <button className="start-button">Next</button>
    </Link>
  );
};

export default StartButton;
