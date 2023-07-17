import React from "react";
import { Button, Profile } from "components";
import { ButtonInterface, ProfileInterface } from "interfaces";
import { Link } from "react-router-dom";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
  const bellButton: ButtonInterface = {
    text: "Notifs",
    style: "outline",
  };

  const profilePicture: ProfileInterface = {
    size: "small",
    picture_link: undefined,
  };

  let balise;

  balise = (
    <div className="flex items-center justify-between bg-background px-base py-lg drop-shadow-lg">
      <Link
        to="/"
        className="font-satoshi text-title font-bold text-white hover:text-text_yellow"
      >
        Nom de l'appli
      </Link>
      <div className="flex space-x-xxl">
        <Button props={bellButton} />
        <Profile props={profilePicture} />
      </div>
    </div>
  );

  return <>{balise}</>;
}
