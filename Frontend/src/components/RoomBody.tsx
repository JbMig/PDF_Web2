import React, { Fragment } from "react";
import {SensorCardInterface} from "interfaces";
import {SensorCard} from "components";

export default function RoomBody() {
    const Card_1 : SensorCardInterface = 
	{
        sensor : "Température",
		nb_data : 1,
		data_list : ["20,5°C"],
		number_bg : 1,
    };
    const Card_2 : SensorCardInterface = 
	{
        sensor : "Humidité",
		nb_data : 1,
		data_list : ["36%"],
		number_bg : 2,
    };
    const Card_3 : SensorCardInterface = 
	{
        sensor : "Fuite d'eau",
		nb_data : 1,
		data_list : ["Pas de fuite détectée"],
		number_bg : 3,
    };
	const card_list = [Card_1, Card_2, Card_3, Card_1, Card_2];
    let balise;

	balise = 
		<div className="w-full min-h-full bg-background py-lg px-base">
            <div className="grid grid-cols-2 gap-base">
				{card_list.map(function(card) {
					return (<SensorCard props={card}/>)
				})}
            </div>
		</div>
	
  	return (
		<Fragment>
			{balise}
		</Fragment>  
	);

}
