import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <Fragment>
      <div className="header">
		<div className="header-content">
			<h2 className="white-title">Nom de l'appli</h2>
			<div className="header-right-side">
				<div className="white-title">Notifs</div>
				<div className="white-title profile-button">Profil</div>
			</div>
		</div>
	  </div>
    </Fragment>
  );
}
