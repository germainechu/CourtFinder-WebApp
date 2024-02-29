import React, { useState } from "react";
import "./StartPage.css";
import WelcomeHeader from "./StartPage/WelcomeHeader/WelcomeHeader";
import PlayerCount from "./StartPage/PlayerCount/PlayerCount";
import OnboardingCarousel from "./StartPage/OnboardingCarousel/OnboardingCarousel";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [username, setUsername] = useState("");
  const [playerNum, setPlayerNum] = useState(0);
  localStorage.setItem("username", username);
  localStorage.setItem("playerNum", playerNum);
  const updatePlayerNum = (num) => {
    setPlayerNum(num);
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !playerNum) {
      alert("please fill in all fields");
    } else {
      alert("submission success");
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

      <Link to="/queue">
        <button
          form="username_form"
          type="submit"
          onSubmit={handleSubmit}
          className="start-button"
        >
          NEXT
        </button>
      </Link>
    </div>
  );
};

export default StartPage;
