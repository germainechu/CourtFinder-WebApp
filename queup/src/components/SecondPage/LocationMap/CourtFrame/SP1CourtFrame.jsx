import React from "react";
import "./SP1CourtFrame.css";

const SP1CourtFrame = ({ selectButtonID, toggleColor }) => {
  const MAX_COURTS = 12;
  const courtArray = generateCourtArray(12);

  return (
    <>
      <div className="court-frame--top">
        {courtArray.slice(0, 3).map((court) => (
          <button
            key={court.id}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            }`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
      <div className="court-frame--mid">
        {courtArray.slice(3, 7).map((court) => (
          <button
            key={court.id}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            }`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
      <div className="court-frame--bottom">
        {courtArray.slice(7, 12).map((court) => (
          <button
            key={court.id}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            }`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default SP1CourtFrame;
