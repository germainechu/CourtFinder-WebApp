import React from "react";
import generateCourtArray from "../../../../utils/generateCourtArray";
import "./KTCourtFrame.css";

const KTCourtFrame = ({ selectButtonID, toggleColor, disableCourts}) => {
  const MAX_COURTS = 11;
  const courtArray = generateCourtArray(MAX_COURTS);
  
  console.log("disableCourts: " + disableCourts)

  return (
  <>
   <div className="KT-court-frame--top">
        {courtArray.slice(0, 5).map((court) => (
          <button
            key={court.id}
            disabled={disableCourts}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            } court-button--rotated`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
      <div className="KT-court-frame--bottom">
        {courtArray.slice(5, 11).map((court) => (
          <button
            key={court.id}
            disabled={disableCourts}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            } court-button--rotated`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
  </>
  );
};

export default KTCourtFrame;
