import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/dashLanding" className="navbar-brand" style={{ marginLeft: "15px" }}>
      Online BookStore
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item" style={{ marginLeft: "15px" }}>
          <Link to="/dashBook" className="nav-link">
            Books
          </Link>
        </li>

        <li style={{ float: "right", marginLeft: "960px" }}>
          <Link
            to="/dashLanding"
            style={{
              borderRadius: "3px",
              letterSpacing: "1.5px",
              width: "10rem",
            }}
            className="btn btn-dark"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
