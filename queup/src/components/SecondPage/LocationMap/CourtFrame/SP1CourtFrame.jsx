import React from "react";
import "./SP1CourtFrame.css";
import generateCourtArray from "../../../../utils/generateCourtArray";

const SP1CourtFrame = ({ selectButtonID, toggleColor, disableCourts }) => {
  const MAX_COURTS = 12;
  const courtArray = generateCourtArray(MAX_COURTS);

  return (
    <>
      <div className="SP1-court-frame--top">
        {courtArray.slice(0, 3).map((court) => (
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
      <div className="SP1-court-frame--mid">
        {courtArray.slice(3, 7).map((court) => (
          <button
          disabled={disableCourts}
            key={court.id}
            className={`court-button ${court.status} ${
              selectButtonID === court.id ? "selected" : ` `
            } court-button--rotated`}
            onClick={() => toggleColor(court.id)}
          >
            {court.id + 1}
          </button>
        ))}
      </div>
      <div className="SP1-court-frame--bottom">
        {courtArray.slice(7, 12).map((court) => (
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

export default SP1CourtFrame;
