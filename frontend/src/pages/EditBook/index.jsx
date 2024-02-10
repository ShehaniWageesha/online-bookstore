/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../app/App";

function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempBook = await getData(id);
      setBook(tempBook);
      console.log(JSON.stringify(tempBook));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:8000/api/book/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setBook({
      ...book,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(book));
    try {
      e.preventDefault();

      const res = await axios({
        method: "put",
        baseURL: "http://localhost:8000",
        url: "/api/book/update" + id,
        data: book,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000/books");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);
  if (!book) {
    return <>Loading the data</>;
  }

  return (
    <div style={{ color: "white" }}>
       <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Edit Book</h2>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)} style={{ width: "30rem", fontWeight: "bolder" }}>
        
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
          <input
            type="submit"
            value="Update"
            className="btn btn-dark"
          />
        </div>
      </form>
      
    </div>
  );
}

export default EditBook;
