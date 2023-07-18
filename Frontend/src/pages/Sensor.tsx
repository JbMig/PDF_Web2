import React from "react";
import { SubHeaderInterface } from 'interfaces'
import { SubHeader } from "../components";


export default function Sensor() {
    const subHeaderProps : SubHeaderInterface = 
	{
		text_settings : "Paramètres capteur",
		text_add : "",
		title_1 : "Nom du bâtiment",
		title_path_1 : "/Building",
		title_2 : "Nom de la pièce",
		title_path_2 : "/Room",
		title_3 : "Nom du capteur",
	};

	return (
		<section className="bg-background">
			<SubHeader props={subHeaderProps}/>
		</section>
	);
}
