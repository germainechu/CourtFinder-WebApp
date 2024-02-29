import React from "react";
import StartPage from "./components/StartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondPage from "./components/SecondPage/SecondPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/queue" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};
export default App;
