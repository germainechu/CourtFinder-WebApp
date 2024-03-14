import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./LocationMap.css";
import QECourtFrame from "./CourtFrame/QECourtFrame";
import SP2CourtFrame from "./CourtFrame/SP2CourtFrame";
import SP1CourtFrame from "./CourtFrame/SP1CourtFrame";
import KTCourtFrame from "./CourtFrame/KTCourtFrame";

const LocationMap = ({ selectButtonID, toggleColor, disableCourts }) => {
  // TODO: add switching for different elements based on route
  // const locationIDToRender = locations.find((location) => location.id === locationID).id
  // TODO: when locationID is undefined, return empty page
  const { locationID } = useParams();

  const selectLocationToRender = (locationID) => {
    if (!locationID) {
      return (
        <ul>
          <Link to="/queue/queen-elizabeth">
            <li>Queen Elizabeth Park</li>
          </Link>
          <Link to="/queue/stanley-park-1">
            <li>Stanley Park (Main)</li>
          </Link>
          <Link to="/queue/stanley-park-2">
            <li>Stanley Park (Beaver Lake)</li>
          </Link>
          <Link to="/queue/kits">
            <li>Kitsilano Beach Park</li>
          </Link>
        </ul>
      );
    }
    switch (locationID) {
      case "queen-elizabeth":
        return <QECourtFrame selectButtonID={selectButtonID} toggleColor={toggleColor} disableCourts={disableCourts} />;
      case "stanley-park-1":
        return <SP1CourtFrame selectButtonID={selectButtonID} toggleColor={toggleColor} disableCourts={disableCourts} />;
      case "stanley-park-2":
        return <SP2CourtFrame selectButtonID={selectButtonID} toggleColor={toggleColor} disableCourts={disableCourts} />;
      case "kits":
        return <KTCourtFrame selectButtonID={selectButtonID} toggleColor={toggleColor} disableCourts={disableCourts} />;
      default:
        console.log("wrong path");
    }
  };

  return (
    <>
      <div className="location-frame">
        <p className="location-frame--info">
          Looks like there are no courts available. Please join the queue!
        </p>
        <div className="location-frame--background">
          <div className="location-frame--container">
            <div className="location-frame--map">
              {selectLocationToRender(locationID)}
            </div>
            {selectButtonID !== null && (
              <div className="selected-court-box">
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
