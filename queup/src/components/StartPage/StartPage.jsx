import React, { useState } from "react";
import "./StartPage.css";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import PlayerCount from "./PlayerCount/PlayerCount";
import OnboardingCarousel from "./OnboardingCarousel/OnboardingCarousel";
import { useNavigate } from "react-router-dom";

const StartPage = ({
  username,
  playerNum,
  updatePlayerNum,
  updateUsername,
}) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    updateUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !playerNum) {
      alert("please fill in all fields");
    } else {
      // localStorage.setItem("username", username);
      // localStorage.setItem("playerNum", playerNum);
      navigate("/queue");
    }
  };
  return (
    <div className="start-page-container">
      <WelcomeHeader></WelcomeHeader>
      <OnboardingCarousel></OnboardingCarousel>
      <form id="username_form" type="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Please enter your name</label>
        <input
          name="name"
          type="text"
          placeholder="username"
          onChange={handleChange}
          value={username}
        />
      </form>
      <PlayerCount
        playerNum={playerNum}
        updatePlayerNum={updatePlayerNum}
      ></PlayerCount>
      <button
        form="username_form"
        type="submit"
        onSubmit={handleSubmit}
        className="start-button"
      >
        NEXT
      </button>
    </div>
  );
};

export default StartPage;
