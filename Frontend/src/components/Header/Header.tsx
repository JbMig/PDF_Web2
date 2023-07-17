import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Buttons/Button";
import { ButtonInterface } from '../../interfaces/interfaces'

export default function Header() {
	const bellButton : ButtonInterface = {
		text: 'Notifs',
		style: 'outline',
		icon: undefined 
	}
	const profileButton : ButtonInterface = {
		text: 'Profil',
		style: 'fill',
		icon: undefined 
	}
    let balise;
	balise = <div className="h-120px bg-background_grey drop-shadow-lg flex">
				<div className="header-content w-full flex-row justify-between self-center flex">
					<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
					<div className="space-x-xxl flex-row self-center">
						<Button props={bellButton}/>
						<Button props={profileButton}/>
					</div>
				</div>
			</div>
	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
