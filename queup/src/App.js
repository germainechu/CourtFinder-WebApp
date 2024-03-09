import React from "react";
import StartPage from "./components/StartPage/StartPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./components/SecondPage/SecondPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/queue/:username/:playerCount" element={<SecondPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
