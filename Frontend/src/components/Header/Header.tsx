import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <h2 className="font-satoshi text-[48px] font-bold text-white">
            Nom de l'appli
          </h2>
          <div className="header-right-side">
            <div className="font-satoshi text-[48px] font-bold text-white">
              Notifs
            </div>
            <div className="profile-button font-satoshi text-[48px] font-bold text-white">
              Profil
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
