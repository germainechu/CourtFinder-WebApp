import React from 'react'
import "./WelcomeHeader.css"

const WelcomeHeader = () => {
  return (
    <>
    <div className="WelcomeHeader">
      <div className="welcome-text">welcome to</div>
      <div className="header-logo">
        <img src={"/assets/queup-banner.png"} alt="Queup Banner"></img>
      </div>
    </div>
  </>
);
}

export default WelcomeHeader;
