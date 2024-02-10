import React from "react";
import { Route } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import User from "../pages/User";
import LoginUser from "../pages/LoginUser";
import AddBook from "../pages/AddBook";
import EditBook from "../pages/EditBook";
import BookList from "../pages/BookList";
import Book from "../pages/Book";
import { RoutePaths } from "./route-paths";

const RoutesPaths = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/dashUser" exact component={User} />
      <Route path="/login" exact component={LoginUser} />
      <Route path={paths.createUser} component={CreateUser} />
      <Route path="/books" exact component={BookList} />
      <Route path="/book" exact component={Book} />
      <Route path={`${paths.editBook}:id`} component={EditBook} />
      <Route path={paths.createBook} component={AddBook} />
    </>
  );
};

export default RoutesPaths;
