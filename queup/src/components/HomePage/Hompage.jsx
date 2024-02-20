import MapView from "./MapView";
import { useParams } from "react-router-dom";

const Homepage = (props) => {
  const { username, playerCount } = useParams();
  return (
    <>
      <h2>
        Hello {username}, you are a Group of {playerCount}.
      </h2>
      <MapView />
    </>
  );
};
export default Homepage;
