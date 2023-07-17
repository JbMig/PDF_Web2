import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, NoMatch, Building } from "./pages";
import { Nav } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/Building" element={<Building />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
