import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, NoMatch, Register } from "pages";
import { Header } from "components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
    </Routes>
  );
}
