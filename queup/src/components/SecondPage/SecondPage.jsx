import MapView from "./LocationMap/LocationMap";
import { useEffect, useState } from "react";

const SecondPage = (props) => {
  const [courts, setCourts] = useState([]);
  const username = localStorage.getItem("username");
  const playerNum = localStorage.getItem("playerNum");
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
  console.log(props);
  // console.log("print the result", courts);
  return (
    <div>
      <h1>
        Hello {username}, you are a group of {playerNum}
      </h1>
      <button onClick={addToQueue}>Queup</button>
      <MapView />
    </div>
  );
};
export default SecondPage;
