import React, { useState } from "react";
import "./CourtInfo.css";

const CourtInfo = () => {

  //TODO: For Court-Info-Button--Container:
  // ON CLICK should trigger two things:
  // 1. head(Courts-lnklst) = selected through LocationMap.CourtFrame.index[button]
  // 2. trigger LEAVE page after 5 min wait. 
  const [nextCourt, setNextCourt] = useState(null)
  const handleClick = () => {
    setNextCourt(1)
}
  return (
    <button className="court-info--container_button" onClick={handleClick}>
      <div className="court-info--container_text">
        <div className="court-info--text">
          GO TO
          <div className="court-info--text_specific">
            {/* {court_id} */}
            COURT 1
          </div>
        </div>
      </div>
    </button>
  );
};

export default CourtInfo;
