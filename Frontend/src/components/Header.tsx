import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NotificationsInterface, ProfileInterface } from '../interfaces'
import { Notifications, Profile, Button } from "components";

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

	balise = 
		<div className="flex">
			<div className="bg-background py-lg px-base shadow-header flex w-full fixed">

				<div className="flex-1">
					<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
				</div>
				<div className="space-x-xxl flex-row self-center flex">
          <Notifications props={bellButton} />
					<Profile props={profilePicture}/>
				</div>

			</div>
		</div>
		
	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
