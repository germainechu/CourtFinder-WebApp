import React, { useState, useEffect } from "react";
import "./CourtInfo.css";

const CourtInfo = ( {selectButtonID, toggleColor, disableCourts,setDisableCourts, highlightButton} ) => {

  //TODO: For Court-Info-Button--Container:
  // ON CLICK should trigger two things:
  // 1. head(Courts-lnklst) = selected through LocationMap.CourtFrame.index[button]
  // 2. trigger LEAVE page after 5 min wait. 
  
  const [nextCourt, setNextCourt] = useState(null)
  const [assignedCourt, setAssignedCourt] = useState(null);

  useEffect(() => {
    //TODO: get actual court data from API
    const courtFromAPI = 0;
    setAssignedCourt(courtFromAPI);
  }, [assignedCourt]);
 
  const handleClick = () => {
    setNextCourt(1)
  }
  const highlightAndDisable =() =>{
    highlightButton(assignedCourt);
    setDisableCourts(true)
  }
  return (
    <button className="court-info--container_button" onClick={handleClick}>
      <div className="court-info--container_text">
        <div className="court-info--text" onClick={highlightAndDisable}>
         {`GO TO COURT ${assignedCourt+1}`}
        </div>
      </div>
    </button>
  );
};

export default CourtInfo;
