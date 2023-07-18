import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Notifications, Profile } from "components";
import { NotificationsInterface, ProfileInterface } from 'interfaces'

export default function Header() {
	const bellButton : NotificationsInterface = {
		open: false,
	}

	const profilePicture : ProfileInterface = {
		size: "small",
		picture_link: undefined
	}

    let balise;

	balise = 
	<div className="flex bg-background py-lg px-base">
		<div className="flex-1"> 
			<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-main_yellow">Nom de l'appli</Link>
		</div>
		<div className="space-x-xxl flex-row self-center flex">
			<Notifications props={bellButton}/>
			<Profile props={profilePicture}/>
		</div>
	</div>;

	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
