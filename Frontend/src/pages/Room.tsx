import React, { Fragment } from "react";
import { SubHeaderInterface, BodyInterface } from 'interfaces'
import { RoomBody, SideBarPopup, SubHeader, NotificationsPopup } from "../components";
import { useParams } from "react-router-dom";

export default function Room() {
	const param = useParams();
	const room_id : BodyInterface = {id : param.id};
	// rooms by building : "Maison" : 1->5, "Appart" : 6->8, "Travail" : 9->12
	function buildingById() {
		let name;
		let id;
		if (["1","2","3","4","5"].indexOf(param.id) > -1) {
			name = "Maison";
			id = 1;
		}
		else if (["6","7","8"].indexOf(param.id) > -1) {
			name = "Appart";
			id = 2;
		}
		else {
			name = "Travail";
			id = 3;
		}
		return {name:name, id:id};
	  }

	function roomNameById() {
		let name;
		if (param.id === "1" || param.id === "6") {
			name = "Séjour";
		}
		else if (param.id === "2" || param.id === "7") {
			name = "Chambre";
		}
		else if (param.id === "3" || param.id === "8") {
			name = "Salle de Bain";
		}
		else if (param.id === "4") {
			name = "Cuisine";
		}
		else if (param.id === "5") {
			name = "Bureau";
		}
		else if (param.id === "9") {
			name = "Open Space";
		}
		else if (param.id === "10") {
			name = "Bureau directeur";
		}
		else if (param.id === "11") {
			name = "Bureau RH";
		}
		else {
			name = "Infirmerie";
		}
		return name;
	  }

  const subHeaderProps: SubHeaderInterface = {
    text_settings: '',
    text_add: 'Ajouter capteur',
    title_1: buildingById().name,
    title_path_1: `/Building/${buildingById().id}`,
    title_2: roomNameById(),
  };

  let balise;

	balise = (
		<section className="bg-background">
			<SubHeader props={subHeaderProps}/>
			<SideBarPopup />
			<NotificationsPopup />
			<RoomBody />
		</section>
	)
	
	
	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
