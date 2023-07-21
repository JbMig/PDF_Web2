import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { NotificationsInterface, ProfileInterface } from 'interfaces';
import { Notifications, Profile } from 'components';



    fetch(`http://backioshi.w2-groupe4.hetic-projects.arcplex.tech/api/building/new`, {
        method: 'post',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((data) => console.log(data.json()))

export default function Header() {
  const bellButton: NotificationsInterface = {
    open: false,
  };

  const profilePicture: ProfileInterface = {
    size: 'small',
    picture_link: undefined,
    // isTrue: true,
    // toggle:(),
  };

  let balise;

  balise = (
    <div className="fixed z-1 flex w-full bg-background px-base py-lg shadow-header">
      <div className="flex-1">
        <Link
          to="/"
          className="font-sans hover:text-text_yellow self-center text-title font-bold text-white"
        >
          IOSHI
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
