import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import { ButtonInterface, ProfileInterface } from '../../interfaces/interfaces'
import Profile from "../Profile";

export default function Header() {
	const bellButton : ButtonInterface = {
		text: 'Notifs',
		style: 'outline',
	}

	const profile_picture : ProfileInterface = {
		size: 'small',
		picture_link: undefined
	}

    let balise;

	balise = 
			<div className="flex bg-background px-base py-xl">
				<div className="flex-1"> 
					<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
				</div>
				<div className="flex space-x-xxl">
					<div className="self-center">
						<Button props={bellButton} />
					</div>
					<div className="self-center">
						<Profile props={profile_picture}/>
					</div>
				</div>
			</div>

	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
