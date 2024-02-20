import React from "react";
import "./StartButton.css";
import { Link } from "react-router-dom";

const StartButton = (props) => {
  // const [playerCount, setPlayerCount] = useState("");
  const data = { playerCount: props.playerCount };
  return (
    <Link to={`/queue/${data.playerCount}`}>
      <button className="start-button">Next</button>
    </Link>
  );
};

export default StartButton;
