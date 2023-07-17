import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "components";

export default function RootLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
