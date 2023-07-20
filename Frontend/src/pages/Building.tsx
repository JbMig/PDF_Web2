import React, { Fragment } from "react";
import { SubHeaderInterface } from "interfaces";
import { SubHeader } from "components";
import { Link } from "react-router-dom";

export default function Building() {
    const subHeaderProps : SubHeaderInterface = 
	{
		text_settings: "",
		text_add: "Ajouter pièce",
		title_1: "Nom du bâtiment",
		title_path_1: "",
		title_2: "",
		title_path_2: "",
		title_3: "",
	};
	
	let balise;
      
    balise = 
		<section className="bg-background">
			<SubHeader props={subHeaderProps}/>
			<nav className="bg-black">
				<ul>
					<li>
						<Link to="/Room" className="font-sans font-bold text-white">Test page Pièce</Link>
					</li>
				</ul>
			</nav>
		</section>
	

	return (
		<Fragment>
			{balise}
		</Fragment>  
	)

}
