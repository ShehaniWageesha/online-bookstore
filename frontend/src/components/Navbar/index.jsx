import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <><nav className="navbar navbar-dark navbar-expand-lg">
      <h5 style={{ color: "white", marginTop: "1.5px" }}>eBookStore</h5>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item" style={{ marginLeft: "15px", width: "100px" }}>
            <Link to="/addBook" className="nav-link">
              Add Books
            </Link>
          </li>
          <li className="navbar-item" style={{ marginLeft: "10px" }}>
            <Link to="/dashBook" className="nav-link">
              Books
            </Link>
          </li>

          <li style={{ float: "right", marginLeft: "665px" }}>
            <Link
              to="/login"
              style={{
                borderRadius: "3px",
                letterSpacing: "1.5px",
                width: "10rem",
              }}
              className="btn btn-dark"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          </li>
        </ul>
      </div>

    </nav><>
        <br></br>
      </></>
    
  );
};

export default NavBar;
