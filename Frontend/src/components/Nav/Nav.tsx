import React from "react";
import "./Nav.scss";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <h2 className="font-satoshi text-[48px] font-bold text-white">
            Nom de l'appli
          </h2>
          <div className="nav-right-side">
            <div className="font-satoshi text-[48px] font-bold text-white">
              Notifs
            </div>
            <div className="profile-button font-satoshi text-[48px] font-bold text-white">
              Profil
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
