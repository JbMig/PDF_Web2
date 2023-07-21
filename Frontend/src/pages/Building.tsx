import React, { Fragment } from "react";
import { BodyInterface, SubHeaderInterface } from "interfaces";
import { BuildingBody, SideBarPopup, SubHeader, NotificationsPopup } from "components";
import { useParams } from "react-router-dom";

export default function Building() {
	const param = useParams();
	const building_id : BodyInterface = {id : param.id};
	function buildingNameById() {
		let name;
		if (param.id === "1") {
			name = "Maison";
		}
		else if (param.id === "2") {
			name = "Appart";
		}
		else {
			name = "Travail";
		}
		  
		return name;
	  }
    const subHeaderProps : SubHeaderInterface = 
	{
		text_settings: "",
		text_add: "Ajouter pièce",
		title_1: buildingNameById(),
		title_path_1: "",
		title_2: "",
	};
	
	let balise;
      
    balise = 
		<section className="bg-background">
			<SubHeader props={subHeaderProps}/>
			<SideBarPopup />
			<NotificationsPopup />
			<BuildingBody props={building_id}/>
		</section>
	

	return (
		<Fragment>
			{balise}
		</Fragment>  
	)

}
