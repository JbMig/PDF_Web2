import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Notifications, Profile } from "components";
import { NotificationsInterface, ProfileInterface } from "interfaces";

export default function Header() {
  const bellButton: NotificationsInterface = {
    open: false,
  };

  const profilePicture: ProfileInterface = {
    size: "small",
    picture_link: undefined,
  };

  let balise;

  balise = (
    <div className="flex bg-background px-base py-lg">
      <div className="flex-1">
        <Link
          to="/"
          className="font-sans self-center text-title font-bold text-white hover:text-main_yellow"
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
