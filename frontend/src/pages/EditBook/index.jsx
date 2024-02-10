import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../app/App";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/book/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBook(res.data.book);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, token]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setBook({
      ...book,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/book/update/${id}`,
        book,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/dashBook");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white", marginLeft: "330px" }}>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Edit Book</h2>
      <br />
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ width: "30rem", fontWeight: "bolder" }}
      >
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            required
            className="form-control"
            defaultValue={book.title}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            required
            className="form-control"
            defaultValue={book.author}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            required
            className="form-control"
            defaultValue={book.image}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            required
            className="form-control"
            defaultValue={book.description}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            name="price"
            required
            className="form-control"
            defaultValue={book.price}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Available Stock</label>
          <input
            type="text"
            name="availableStock"
            required
            className="form-control"
            defaultValue={book.availableStock}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-dark" />
        </div>
      </form>
    </div>
  );
}

export default EditBook;
