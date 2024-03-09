import React, { useState } from "react";
import StartPage from "./components/StartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./components/SecondPage/SecondPage";

const App = () => {
  const [username, setUsername] = useState("");
  const [playerNum, setPlayerNum] = useState(0);

  const updatePlayerNum = (num) => {
    setPlayerNum(num);
  };
  const updateUsername = (name) => {
    setUsername(name);
  };
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <StartPage
              username={username}
              playerNum={playerNum}
              updatePlayerNum={updatePlayerNum}
              updateUsername={updateUsername}
            />
          }
        />
        <Route
          path="/queue"
          element={<SecondPage username={username} playerNum={playerNum} />}
        />
      </Routes>
    </Router>
  );
};
export default App;
