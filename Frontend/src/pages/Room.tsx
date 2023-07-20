import React, { Fragment } from "react";
import { SubHeaderInterface } from 'interfaces'
import { RoomBody, SideBarPopup, SubHeader, NotificationsPopup } from "../components";

export default function Room() {
  const subHeaderProps: SubHeaderInterface = {
    text_settings: '',
    text_add: 'Ajouter capteur',
    title_1: 'Nom du bâtiment',
    title_path_1: '/Building',
    title_2: 'Nom de la pièce',
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
