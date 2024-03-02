import WelcomeHeader from "../StartPage/WelcomeHeader/WelcomeHeader";
import MapView from "./LocationMap/LocationMap";
import { useParams } from "react-router-dom";


const Homepage = (props) => {
  const { username, playerCount } = useParams();
  return (
    <div>
      <WelcomeHeader></WelcomeHeader>
      <h2>
        Hello {username}, you are a Group of {playerCount}.
      </h2>
      <MapView />
    </div>
  );
};
export default Homepage;
