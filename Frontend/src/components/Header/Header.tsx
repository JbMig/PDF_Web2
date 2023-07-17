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
		<div className="">
			<Button props={bellButton}/>
			<Profile props={profile_picture}/>
		</div>
	</div>
	
	// Valentine
	// <div className="h-120px bg-background drop-shadow-lg flex">
	// 			<div className="header-content w-full flex-row justify-between self-center flex">
	// 				<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
	// 				<div className="space-x-xxl flex-row self-center">
	// 					<Button props={bellButton}/>
	// 					<Button props={profileButton}/>
	// 				</div>
	// 			</div>
	// 		</div>

{/* 
Moi test
	<div className=" min-h-120px bg-background drop-shadow-lg flex justify-betweenn p-x-base p-y-xl">
		<div>
			<Link to="/" className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</Link>
		</div>
		<div className="flex-row self-center">
			<Button props={bellButton}/>
			<Profile props={profile_picture}/>
		</div>
	</div>
 */}
	return (
		<>
			{balise}
		</>
	);
}
