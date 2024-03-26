import LocationMap from "./LocationMap/LocationMap";
import { useEffect, useState } from "react";
import LocationHeader from "./LocationHeader/LocationHeader";
import QueueButton from "./LocationMap/QueueButton/QueueButton";
import "./SecondPage.css";

const SecondPage = ({ username, playerNum }) => {
  const [courts, setCourts] = useState([]);
  const base_url = process.env.REACT_APP_BASE_URL;
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
      const response = await fetch(`${base_url}/api/queues`, {
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

  return (
    <div>
      <LocationHeader
        locationName={"Queen Elizabeth Park"}
        rating={4}
      ></LocationHeader>
      {/* <button onClick={addToQueue}>Queup</button> */}
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
