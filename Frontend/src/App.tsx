import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, NoMatch, Building, Login, Register } from "pages";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"*"} element={<NoMatch />} />
        <Route path={"/building"} element={<Building />} />
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
    </Routes>
  );
}
