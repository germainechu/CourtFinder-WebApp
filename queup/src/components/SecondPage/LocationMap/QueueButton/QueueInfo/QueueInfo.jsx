import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import { ProgressBar } from "react-bootstrap";
import "./QueueInfo.css";

const QueueItem = () => {
  const [progress, setProgress] = useState(0);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    console.log(newProgress);
  }

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

export default QueueItem;
