import React, { Fragment } from "react";
import "./Nav.scss";
import { Link, Outlet } from "react-router-dom";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}
