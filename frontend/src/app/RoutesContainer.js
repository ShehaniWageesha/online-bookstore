import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import CreateUser from "../pages/CreateUser";
import Landing from "../pages/Landing";
import BookList from "../pages/BookList";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import Book from "../pages/Book";

function RoutesContainer() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashLanding" />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/dashLanding" element={<Landing />} />
      <Route path="/dashBook" element={<BookList />} />
      <Route path="/editBook/:id" element={<EditBook />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
}

export default RoutesContainer;
