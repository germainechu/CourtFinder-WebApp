import LocationMap from "./LocationMap/LocationMap";
import { useEffect, useState } from "react";
import LocationHeader from "./LocationHeader/LocationHeader";
import QueueButton from "./QueueButton/QueueButton";
import "./SecondPage.css";
import { useParams } from "react-router-dom";

const SecondPage = ({ username, playerNum }) => {
  const [courts, setCourts] = useState([]);
  const { locationID } = useParams();
  console.log(locationID);
  const locationDict = {
    "queen-elizabeth": "Queen Elizabeth Park",
    "stanley-park-1": "Stanley Park - Main Courts",
    "stanley-park-2": "Stanley Park - Beaver Lake",
    kits: "Kitsilano Beach Park",
  };

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch(`/api/courts`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const jsonResult = await response.json();
        setCourts(jsonResult.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourts();
  }, []);

  const addToQueue = async () => {
    const queue_item = {
      username: username,
      playerNum: playerNum,
    };
    try {
      const response = await fetch("/api/queues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queue_item),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //TODO: use a for each through the CourtArray to check if any have "available" status. if so, continue showing the court number drop down.

  // states to change button to be selected
  const [selectButtonID, setSelectButtonID] = useState(null);
  const toggleColor = (courtID) => {
    setSelectButtonID((prevCourtID) =>
      prevCourtID === courtID ? null : courtID
    );
  };
  const [disableCourts, setDisableCourts] = useState(false);
  
  const highlightButton = (courtID) => {
    setSelectButtonID(courtID)
  }

  return (
    <div>
      <LocationHeader locationName={locationDict[locationID]}></LocationHeader>

      <div className="second-page__main">
        <LocationMap
          selectButtonID={selectButtonID}
          toggleColor={toggleColor}
          disableCourts={disableCourts}
        />
        <QueueButton
          className="queue-button"
          addToQueue={addToQueue}
          selectButtonID={selectButtonID}
          disableCourts ={disableCourts}
          setDisableCourts ={setDisableCourts}
          highlightButton={highlightButton}
        ></QueueButton>
      </div>
    </div>
  );
};
export default SecondPage;
