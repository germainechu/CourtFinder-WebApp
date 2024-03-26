import React from "react";
import CountdownTimer from "./CountdownTimer";
import { ProgressBar } from "react-bootstrap";
import "./QueueInfo.css";

const QueueInfo = ({ progress, updateProgress }) => {

  return (
    <>
      <div className="queue-info--container">
        <div className="queue-info-align">
          <div className="queue-info--time-text">Time Left</div>
          <CountdownTimer progress={progress} updateProgress={updateProgress} className="countdown-timer"></CountdownTimer>
        </div>
        <ProgressBar animated now={progress} max={100}></ProgressBar>
      </div>
    </>
  );
};

export default QueueInfo;
