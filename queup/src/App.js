import React from "react";
import StartPage from "./components/StartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/Hompage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/queue/:username/:playerCount" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
