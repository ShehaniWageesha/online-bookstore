// /** @format */
// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Navigate } from "react-router-dom";
// import NavBar from "../components/Navbar/index";
// import RoutesPaths from "../routes/index";
// import { Route, Routes } from "react-router"
// import "./App.css";
// import LoginUser from "../pages/LoginUser";
// import CreateUser from "../pages/CreateUser";
// import Landing from "../pages/Landing";

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route exact path="/" component={() => (<Navigate to="/dashLanding" />)} />
//         <Route exact path="/login" component={LoginUser} />
//         <Route exact path="/createuser" component={CreateUser} />
//         <Route exact path="/dashLanding" component={Landing} />
//         <div>
//           <NavBar />
//           <div className="container">
//             <br />
//             <RoutesPaths />
//           </div>
//         </div>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


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


