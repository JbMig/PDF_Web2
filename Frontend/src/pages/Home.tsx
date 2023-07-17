import React, { Fragment } from "react";
import Button from "../components/Button";
import { ButtonInterface, LabelInterface, ProfileInterface, SubHeaderInterface } from '../interfaces/interfaces'
import Label from "../components/Label";
import Profile from "../components/Profile";
import SideBarPopup from "../components/popups/SidebarPopup";
import { Header, SubHeader } from "../components";
import "../components/Nav/Nav.scss";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    const subHeaderProps : SubHeaderInterface = 
	{
		doWeShowSettingsButton : true,
		text_settings : 'Paramètres généraux',
		text_add : 'Ajouter bâtiment',
		text_title : 'Mes bâtiments',
	};
	
	let balise;
      
    balise = 
	<section className="bg-background px-base">
		<nav>
			<ul>
				<li>
					<Link to="/Building" className="font-sans font-bold text-white">Test page Bâtiment</Link>
				</li>
			</ul>
		</nav>
		<Header />
		<SubHeader props={subHeaderProps}/>
	</section>;
	

	// tests Sandie
	// const buttonPlein : ButtonInterface = {
	// 	text: 'Satoshi',
	// 	style: 'fill',
	// }
	// const buttonVide : ButtonInterface = {
	// 	text: 'abcdef',
	// 	style: 'outline',
	// }
//   const test : LabelInterface = {
//     	text: 'label',
//     	style: 'outline',
//     	label: 'test',
//   }

//   const test2 : ProfileInterface = {
//     	size: 'small',
//     	picture_link: undefined
//   }

	return (
		<Fragment>
			{balise}
			{/* tests Sandie */}
			{/* <Header />
			<SideBarPopup />
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
			<Label props={test}/>
			<Profile props={test2}/> */}
		</Fragment>  
	);
}
