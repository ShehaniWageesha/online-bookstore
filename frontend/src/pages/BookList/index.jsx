import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import "../../app/App";

function BooksList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await getData();
      setData(tempData);
      console.log(JSON.stringify(tempData));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:8000/api/book/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeBook = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:8000/api/book/" + _id, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
          },
        });
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic", color: "white" }}>Book Info</h2>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key="{item._id}">
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.image}</td>
              <td>
                <Link
                  to={`${RoutePaths.editBook}${item._id}`}
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit |{" "}
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => removeBook(item._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
