import React, { useState } from "react";
import "./LocationMap.css";
import QECourtFrame from "./CourtFrame/QECourtFrame";
import QueueButton from "./QueueButton/QueueButton";

const LocationMap = () => {
  //TODO: add switching for different elements based on route
  // const locationIDToRender = locations.find((location) => location.id === locationID).id
  // switch (locationIDToRender):
  //  case 'qe':
  //        return <LocationMap-QE />

  //TODO: use a for each through the CourtArray to check if any have "available" status. if so, continue showing the court number drop down.

  const [selectButtonID, setSelectButtonID] = useState(null);
  const toggleColor = (courtID) => {
    setSelectButtonID((prevCourtID) =>
      prevCourtID === courtID ? null : courtID
    );
  };

  return (
    <>
      <div className="location-frame">
        <p>
          Looks like there are courts available. Please select which court you
          will play on today!
        </p>
        <div className="location-frame--background">
          <div className="location-frame--container">
            <div className="location-frame--map">
              <QECourtFrame
                selectButtonID={selectButtonID}
                toggleColor={toggleColor}
              ></QECourtFrame>
              {/* <CourtFrameSP2
                selectButtonID={selectButtonID}
                toggleColor={toggleColor}
              ></CourtFrameSP2> */}
            </div>
            {selectButtonID !== null && (
              <div className="selected-court-box">
                {" "}
                Court {selectButtonID + 1}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
