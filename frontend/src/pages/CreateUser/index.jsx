import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import create from "./createuser.png";
import "../../app/App";

function CreateUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
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

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:8000",
        url: "/api/user/signup",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div
        style={{
          color: "white",
          justifyContent: "center",
        }}
      >
        <br></br>
        <br></br>
        <div>
          <center>
            <img src={create} alt="login" style={{ width: "100px" }} />
          </center>
        </div>
        <br></br>
        <h2
          style={{
            fontFamily: "bolder",
          }}
        >
          Sign Up Below
        </h2>
        
        <p style={{ fontFamily: "bolder" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ fontFamily: "bolder", color: "black" }}>
            Sign In
          </Link>
        </p>
        <form
          noValidate
          onSubmit={(e) => onSubmitForm(e)}
          style={{ width: "30rem", fontWeight: "bolder" }}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              value={data.name}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              required
              className="form-control"
              value={data.email}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={data.password}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              style={{ width: "10rem" }}
              type="submit"
              value="Sign Up"
              className="btn btn-dark"
            />
          </div>
        </form>
      </div>
    </center>
  );
}

export default CreateUser;
