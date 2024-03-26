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
  const locationIDs = ["1", "2", "3", "4"];
  const handleChange = (event) => {
    updateUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !playerNum) {
      alert("Please fill in your First Name.");
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
          <label htmlFor="name"></label>
          <input
            className="input-field"
            name="name"
            type="text"
            placeholder="First Name"
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
