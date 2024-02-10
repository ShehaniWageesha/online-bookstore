import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import "../../app/App";

function BooksList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not authenticated.");
        return;
      }

      try {
        const tempData = await getData(token);
        setData(tempData);
        console.log(JSON.stringify(tempData));
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };
    fetchData();
  }, []);

  const getData = async (token) => {
    try {
      const finalURL = "http://localhost:8000/api/book/";
      const res = await axios.get(finalURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const books = res.data?.books || [];

      return books;
    } catch (error) {
      console.log("Error fetching book data:", error);
      throw error;
    }
  };

  const removeBook = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not authenticated. Redirecting to login page.");
        return;
      }
  
      if (window.confirm("Are you sure?")) {
        const finalURL = `http://localhost:8000/api/book/${_id}`;
        const res = await axios.delete(finalURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log(res.data);
        window.location.reload(false);
      }
    } catch (error) {
      console.log("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic", color: "white" }}>Book Info</h2>
      <br></br>
      <table className="table">
        <thead  style={{ backgroundColor: "lightgray" }}>
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
