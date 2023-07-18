import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ButtonInterface, ProfileInterface } from '../interfaces'
import Button from "./Buttons/Button";
import Profile from "./Labels/Profile";

export default function Header() {
	const bellButton : ButtonInterface = {
		text: 'Notifs',
		style: 'outline',
	}

	const profilePicture : ProfileInterface = {
		size: 'small',
		picture_link: undefined
	}

    let balise;

	balise = 
		<div className="flex">
			<div className="bg-background py-lg px-base shadow-header flex w-full fixed">

				<div className="flex-1">
					<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
				</div>
				<div className="space-x-xxl flex-row self-center flex">
					<Button props={bellButton}/>
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
