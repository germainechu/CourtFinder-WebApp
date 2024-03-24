import LocationMap from "./LocationMap/LocationMap";
import { useEffect, useState } from "react";
import LocationHeader from "./LocationHeader/LocationHeader";
import QueueButton from "./LocationMap/QueueButton/QueueButton";
import "./SecondPage.css";

import { useParams } from "react-router-dom";

const SecondPage = ({ username, playerNum }) => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const { locationID } = useParams();
  console.log(locationID);
  const locationDict = {
    1: "Queen Elizabeth Park",
    2: "Stanley Park - Main Courts",
    3: "Stanley Park - Beaver Lake",
    4: "Kitsilano Beach Park",
  };

  const [courts, setCourts] = useState([]);
  useEffect(() => {
    //   const fetchCourts = async () => {
    //     try {
    //       const response = await fetch(`${base_url}/api/courts`, {
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //         },
    //       });
    //       const jsonResult = await response.json();
    //       setCourts(jsonResult.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   fetchCourts();
  }, []);

  const addToQueue = async () => {
    const queue_item = {
      username: username,
      playerNum: playerNum,
    };
    try {
      const response = await fetch(`${base_url}/api/queues/${locationID}`, {
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

  //TODO: need to pass rating from API
  return (
    <div>
      <LocationHeader
        locationName={locationDict[locationID]}
        rating={4}
      ></LocationHeader>

      <div className="second-page__main">
        <LocationMap />
        <QueueButton
          className="queue-button"
          addToQueue={addToQueue}
        ></QueueButton>
      </div>
    </div>
  );
};
export default SecondPage;
