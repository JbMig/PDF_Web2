import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NotificationsInterface, ProfileInterface } from "interfaces";
import { Notifications, Profile } from "components";

export default function Header() {
  const bellButton: NotificationsInterface = {
    open: false,
  };

  const profilePicture: ProfileInterface = {
    size: "small",
    picture_link: undefined,
    // isTrue: true,
    // toggle:(),
  };

  let balise;

  balise = (
    <div className="fixed flex w-full bg-background px-base py-lg shadow-header">
      <div className="flex-1">
        <Link
          to="/"
          className="font-sans hover:text-text_yellow self-center text-title font-bold text-white"
        >
          Nom de l'appli
        </Link>
      </div>
      <div className="flex flex-row space-x-xxl self-center">
        <Notifications props={bellButton} />
        <Profile props={profilePicture} />
      </div>
    </div>
  );

  return <Fragment>{balise}</Fragment>;
}
