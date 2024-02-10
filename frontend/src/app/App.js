import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesContainer from "./RoutesContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <RoutesContainer />
      </div>
    </Router>
  );
}

export default App;
