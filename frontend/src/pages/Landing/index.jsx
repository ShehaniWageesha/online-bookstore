import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <br></br>
      <center>
        <div
          className="row"
          style={{ fontFamily: "bolder", marginTop: "12rem" }}
        >
          <div className="col">
            <Link
              to="/createUser"
              style={{
                borderRadius: "3px",
                letterSpacing: "1.5px",
                width: "20rem",
              }}
              className="btn btn-light"
            >
              Sign Up
            </Link>

            <br></br>
            <br></br>

            <Link
              to="/login"
              style={{
                width: "20rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-dark"
            >
              Sign In
            </Link>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Landing;
