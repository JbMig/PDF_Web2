import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/index";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
