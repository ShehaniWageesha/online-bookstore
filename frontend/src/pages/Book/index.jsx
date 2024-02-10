import React from "react";
import { Link } from "react-router-dom";

function Book() {
  return (
    <div className="DashMain">
      <br></br>
      <div>
        <Link to="/addBook" className="nav-link">
          <h1 style={{ color: "white" }}>Add Book</h1>
        </Link>
      </div>
      <div>
        <Link to="/books" className="nav-link">
          <h1 style={{ color: "white" }}>Books</h1>
        </Link>
      </div>
    </div>
  );
}

export default Book;
