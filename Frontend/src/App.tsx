import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, NoMatch } from "./pages";
import { Nav } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
