import React, { Fragment } from "react";
import Button from "../components/Button";
import { ButtonInterface, LabelInterface, ProfileInterface } from '../interfaces/interfaces'
import Label from "../components/Label";
import Profile from "../components/Profile";
import SideBarPopup from "../components/popups/SidebarPopup";
import { Header } from "../components";


export default function Home() {
    let balise;
      
    balise = 
	<section className="bg-background px-base">
		<Header></Header>
		<h1 className="text-big font-sans font-bold text-white">Mes bâtiments</h1>
	</section>;
	

	// tests Sandie
	const buttonPlein : ButtonInterface = {
		text: 'Satoshi',
		style: 'fill',
	}
	const buttonVide : ButtonInterface = {
		text: 'abcdef',
		style: 'outline',
	}
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
