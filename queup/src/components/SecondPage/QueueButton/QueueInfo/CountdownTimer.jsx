import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";
import CourtItem from "../CourtInfo/CourtInfo";

const CountdownTimer = ({ progress, updateProgress }) => {
  const MAX_WAIT_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds
  const DEMO_WAIT_TIME = 5*1000 // 5 s in ms
  const [targetTime, setTargetTime] = useState(new Date().getTime() + DEMO_WAIT_TIME);
  const [timeLeft, setTimeLeft] = useState(DEMO_WAIT_TIME);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;
      setTimeLeft(remainingTime); // Update state to force re-render

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0); // Make sure we don't go negative
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTime]);

  useEffect(() => {
    const newProgress = calculateProgress(timeLeft);
    updateProgress(newProgress);
  }, [timeLeft, updateProgress]);

  const calculateProgress = (remainingTime) => {
    const progress = (1 - remainingTime / DEMO_WAIT_TIME) * 100;
    return Math.max(0, Math.min(100, progress));
  };

  const formattedTime = `${Math.floor(timeLeft / (60 * 1000))
    .toString()
    .padStart(2, "0")}:${Math.floor((timeLeft % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, "0")}`;


  return (
    <div className="timer-container">
      <div className="timer">{formattedTime}</div>
    </div>
  );
};

export default CountdownTimer;
