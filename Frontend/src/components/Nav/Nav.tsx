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
    <div className="flex bg-background py-lg">
      <div className="flex-1">
        <Link
          to="/"
          className="text-white self-center font-satoshi text-title font-bold hover:text-text_yellow"
        >
          Nom de l'appli
        </Link>
      </div>
      <div className="flex flex-row space-x-xxl self-center">
        <Button props={bellButton} />
        <Profile props={profilePicture} />
      </div>
    </div>
  );

  return <>{balise}</>;
}
