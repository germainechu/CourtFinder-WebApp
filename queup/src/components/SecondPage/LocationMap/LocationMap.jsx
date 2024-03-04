import React, { useState } from "react";
import "./LocationMap.css";
import CourtFrameQE from "./CourtFrame/CourtFrameQE";

const LocationMap = () => {

  //TODO: add switching for different elements based on route
  // const locationIDToRender = locations.find((location) => location.id === locationID).id
  // switch (locationIDToRender):
  //  case 'qe':
  //        return <LocationMap-QE />

  //TODO: use a for each through the CourtArray to check if any have "available" status. if so, continue showing the court number drop down.

  const [selectButtonID, setSelectButtonID] = useState(null);
  const toggleColor = (courtID) => {
    setSelectButtonID((prevCourtID) => (prevCourtID === courtID ? null : courtID));
  };

  return (
    <div className="map-frame">
      <div className="map-background">
        <p>Looks like there are courts available. Please select which court you will play on today!</p>
        <CourtFrameQE selectButtonID={selectButtonID} toggleColor={toggleColor}></CourtFrameQE>
        <p>You've Selected: Court {selectButtonID+1}</p>
      </div>
    </div>
  );
};

export default LocationMap;
