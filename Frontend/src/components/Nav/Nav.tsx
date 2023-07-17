import React, { Fragment } from "react";
import { Button } from "components";
import { ButtonInterface } from "interfaces";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
  const bellButton: ButtonInterface = {
    text: "Notifs",
    style: "outline",
    icon: undefined,
  };
  const profileButton: ButtonInterface = {
    text: "Profil",
    style: "fill",
    icon: undefined,
  };
  let balise;
  balise = (
    <div className="flex h-[120px] w-full items-center justify-between bg-background_grey px-xxxl drop-shadow-lg">
      <h2 className="font-satoshi text-title font-bold text-white hover:text-text_yellow">
        Nom de l'appli
      </h2>
      <div className="space-x-xxl">
        <Button props={bellButton} />
        <Button props={profileButton} />
      </div>
    </div>
  );
  return <Fragment>{balise}</Fragment>;
}
