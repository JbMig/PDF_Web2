import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Profile } from "components";
import { ButtonInterface, ProfileInterface } from 'interfaces'

export default function Header() {
	const bellButton : ButtonInterface = {
		text: "Notifs",
		style: "outline",
	}

	const profilePicture : ProfileInterface = {
		size: "small",
		picture_link: undefined
	}

    let balise;

	balise = 
	<div className="flex bg-background py-lg px-base">
		<div className="flex-1"> 
			<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
		</div>
		<div className="space-x-xxl flex-row self-center flex">
			<Button props={bellButton}/>
			<Profile props={profilePicture}/>
		</div>
	</div>;

	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
