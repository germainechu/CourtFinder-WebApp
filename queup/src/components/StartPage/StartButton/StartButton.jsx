import React from "react";
import "./StartButton.css";
import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <Link to="/queue">
      <button className="start-button">Next</button>
    </Link>
  );
};

export default StartButton;
