import React, { useState } from "react";
import "./QueueButton.css";
import QueueInfo from "./QueueInfo/QueueInfo";
import CourtInfo from "./CourtInfo/CourtInfo";

const QueueButton = ({ addToQueue }) => {
  const [showQueueInfo, setShowQueueInfo] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    console.log(newProgress);
  };

  const handleClick = () => {
    addToQueue();
    setShowQueueInfo(!showQueueInfo);
  };

  //TODO: switch between QueueInfo and CourtInfo depending on:
  // 1. CourtInfo <= if timer == 0 && user is in Queue && head(Courts) is RETURNED.
  // 2. QueueInfo <= is user timer is still running || head(Courts) NOT RETURNED.

  return (
    <>
      {progress >= 100 ? (
        <CourtInfo />
      ) : (
        showQueueInfo && (
          <QueueInfo updateProgress={updateProgress} progress={progress} />
        )
      )}
      <button className="queue-button" onClick={handleClick}>
        qup
      </button>
    </>
  );
};

export default QueueButton;
