import React, { useState } from "react";
import "./StartPage.css";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import PlayerCount from "./PlayerCount/PlayerCount";
import OnboardingCarousel from "./OnboardingCarousel/OnboardingCarousel";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
const StartPage = ({
  username,
  playerNum,
  updatePlayerNum,
  updateUsername,
}) => {
  const navigate = useNavigate();
  const { locationID } = useParams();
  // get ids from api?
  const locationIDs = [
    "queen-elizabeth",
    "stanley-park-1",
    "stanley-park-2",
    "kits",
  ];
  const handleChange = (event) => {
    updateUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !playerNum) {
      alert("please fill in all fields");
    } else {
      navigate(`/queue/${locationID}`);
    }
  };

  if (locationIDs.includes(locationID) || !locationID) {
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
  } else {
    return <ErrorPage></ErrorPage>;
  }
};

export default StartPage;
