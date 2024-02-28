import MapView from "./LocationMap/LocationMap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SecondPage = () => {
  const { username, playerCount } = useParams();
  console.log(useParams);
  const [courts, setCourts] = useState([]);
  useEffect(() => {
    const fetchCourts = async () => {
      try {
        // `/api/users/${userId}

        const results = await fetch(`/queue/${username}/${playerCount}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const jsonResutl = results.json();
        console.log("print the response", jsonResutl);
        setCourts(jsonResutl);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourts();
  }, []);
  console.log("print the result", courts);
  return (
    <>
      <h2>
        Hello {username}, you are a Group of {playerCount}.
      </h2>
      <MapView />
    </>
  );
};
export default SecondPage;
