import LocationHeader from "./LocationHeader/LocationHeader";
import LocationMap from "./LocationMap/LocationMap";
import { useParams } from "react-router-dom";


const Homepage = (props) => {
  const { username, playerCount } = useParams();
  return (
    <div>
      <LocationHeader locationName={"Queen Elizabeth Park"} rating={4}></LocationHeader>
      {/* <LocationHeader locationName={"Stanley Park 2"} rating={3}></LocationHeader> */}
      <h2>
        Hello {username}, you are a Group of {playerCount}.
      </h2>
      <LocationMap />
    </div>
  );
};
export default Homepage;
