import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginUser from "../pages/LoginUser";
import CreateUser from "../pages/CreateUser";
import Landing from "../pages/Landing";

function RoutesContainer() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashLanding" />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/createuser" element={<CreateUser />} />
      <Route path="/dashLanding" element={<Landing />} />
    </Routes>
  );
}

export default RoutesContainer;
