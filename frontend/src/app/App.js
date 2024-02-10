import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/Navbar/index";
import RoutesContainer from "./RoutesContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <br />
        <RoutesContainer />
      </div>
    </Router>
  );
}

export default App;
