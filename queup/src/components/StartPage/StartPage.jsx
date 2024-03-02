import React from "react";
import { useState } from "react";
import "./StartPage.css";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import StartButton from "./StartButton/StartButton";
import PlayerCount from "./PlayerCount/PlayerCount";
import OnboardingCarousel from "./OnboardingCarousel/OnboardingCarousel";

const StartPage = () => {
  //pass data from PlayerCount (child component) to the StartPage (parent component)
  const [playerCount, setPlayerCount] = useState("");

  const passPlayerCount = (playerCount) => {
    setPlayerCount(playerCount);
  };
  // place useState and useEffect functions here to handle routing
  return (
    <div className="start-page-container">
      <WelcomeHeader></WelcomeHeader>
      <OnboardingCarousel></OnboardingCarousel>
      {/* pass the passPlayerCount function as a prop to the child component PlayerCount */}
      <PlayerCount passPlayerCount={passPlayerCount}></PlayerCount>
      {/* pass playerCount data to the StartButton is*/}
      <StartButton playerCount={playerCount}></StartButton>
    </div>
  );
};

export default StartPage;
