import React, { useState } from "react";
import axios from "axios";
import "../../app/App";

function AddBook() {
  const [data, setData] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
    price: "",
    availableStock: "",
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const token = localStorage.getItem("token");

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:8000",
        url: "/api/book/create",
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white", marginLeft: "330px" }}>
      <h1 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Add Book</h1>
      <br></br>
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
            value={data.title}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Author Name</label>
          <input
            type="text"
            name="author"
            required
            className="form-control"
            value={data.author}
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
            value={data.image}
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
            value={data.description}
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
            value={data.price}
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
            value={data.availableStock}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Submit"
            className="btn btn-dark"
          />
        </div>
      </form>
      
    </div>
  );
}

export default AddBook;
