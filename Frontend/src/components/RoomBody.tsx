import React, { Fragment } from "react";
import {SensorCardInterface} from "interfaces";
import {SensorCard} from "components";

// sensor_name : string;
// data: string ;
// settings: any;
// number_bg : number;
// alert : any;
export default function RoomBody() {

    // répéter la const et l'ajout dans la div autant de fois qu'il y a de capteurs dans la pièce ou autre moyen
    const Card_1 : SensorCardInterface = 
	{
        sensor_name : "Température",
		data : "20,5°C",
		settings : "19°C",
		alert : false,
		number_bg : 1,
    };
    const Card_2 : SensorCardInterface = 
	{
        sensor_name : "Humidité",
		data : "36%",
		settings : "20%",
		alert : false,
		number_bg : 2,
    };
    const Card_3 : SensorCardInterface = 
	{
        sensor_name : "Fuite d'eau",
		data : "Fuite au niveau du lave-vaisselle",
		settings : "",
		alert : true,
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