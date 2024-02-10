import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import CreateUser from "../pages/CreateUser";
import BookList from "../pages/BookList";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import Book from "../pages/Book";
import NavBar from "../components/Navbar";

function RoutesContainer() {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/createUser" && <NavBar />} 
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/editBook/:id" element={<EditBook />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
}

export default RoutesContainer;
