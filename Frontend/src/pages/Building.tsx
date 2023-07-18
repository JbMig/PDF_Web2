import React, { Fragment } from "react";
import { SubHeaderInterface } from '../interfaces/interfaces'
import { Header, SubHeader } from "../components";


export default function Building() {
    const subHeaderProps : SubHeaderInterface = 
	{
		doWeShowSettingsButton : false,
		text_settings : "",
		text_add : "Ajouter pièce",
		text_title : "Nom du bâtiment",
	};
	
	let balise;
      
    balise = 
	<section className="bg-background px-base">
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
