import React, { useState } from 'react';
import './LocationHeader.css';

const LocationHeader = ({ locationName }) => {
  const [currentTraffic, setCurrentTraffice] = useState("low")
const COURT_TRAFFIC = {"high": "/assets/red-ball.svg", "low": "/assets/green-ball.svg", "mid":"/assets/yellow-ball.svg"}
const MESSAGES = ["While waiting take a quick survey of our tennis app.", "When you are done, please leave queue for next players.", "While waiting take a quick survey of our tennis app."]
let tennisBoy;

switch (currentTraffic) {
  case 'low':
    tennisBoy = <img className='location-tennisboy' src={COURT_TRAFFIC[currentTraffic]} alt="Low Traffic" />;
    break;
  case 'medium':
    tennisBoy = <img  className='location-tennisboy' src={COURT_TRAFFIC[currentTraffic]} alt="Medium Traffic" />;
    break;
  case 'high':
    tennisBoy= <img  className='location-tennisboy' src={COURT_TRAFFIC[currentTraffic]} alt="High Traffic" />;
    break;
  default:
    tennisBoy = <img className='location-tennisboy'  src={COURT_TRAFFIC["low"]} alt="Default Traffic" />;
    break;
}

return (
    <div className="location-header--container">
      <img className='white-logo' src="/assets/queup-white-logo.svg" alt="Queup Logo" />

    <div className="location-header">
      <div className="location-text"> 
        <h1 className="location-name">{locationName}</h1>
        <p className="location-broadcast">Click here for a short survey.</p>
      </div>
      <div className='location-status'>
      {/* {tennisBoy} */}
      <img  className='location-tennisboy' src={"/assets/red-ball.svg"} alt="Medium Traffic" />
      {/* <div className="court-traffic">{currentTraffic == "high" ? "busy" : (currentTraffic == "mid" ?  "not busy" : "empty")}</div> */}
       <div className="court-traffic">busy</div>
      </div>
    </div>

    </div>
  );
};

export default LocationHeader;
