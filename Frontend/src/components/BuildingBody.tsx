import React, { Fragment } from "react";
import {RoomCardInterface} from "interfaces";
import RoomCard from "./Cards/RoomCard";

export default function BuildingBody() {

    // répéter la const et l'ajout dans la div autant de fois qu'il y a de piece dans le batiment ou autre moyen
    const Card_1 : RoomCardInterface = 
	{
        room : "Séjour",
		nb_sensor : 2,
		sensor_list : ["température"],
		number_bg : 1,
    };
    const Card_2 : RoomCardInterface = 
	{
        room : "Chambre",
		nb_sensor : 4,
		sensor_list : ["température"],
		number_bg : 2,
    };
    const Card_3 : RoomCardInterface = 
	{
        room : "Salle de Bain",
		nb_sensor : 6,
		sensor_list : ["température", "humidité"],
		number_bg : 3,
    };
	const card_list = [Card_1, Card_2, Card_3, Card_1, Card_2];

    let balise;

	balise = 
		<div className="w-full min-h-full bg-background py-lg px-base">
            <div className="grid grid-cols-2 gap-base">
				{card_list.map(function(card) {
					return (<RoomCard props={card}/>)
				})}
            </div>
		</div>
	
  	return (
		<Fragment>
			{balise}
		</Fragment>  
	);

}
