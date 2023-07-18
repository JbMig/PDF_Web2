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
	

	return (
		<Fragment>
			{balise}
		</Fragment>  
	);
}
