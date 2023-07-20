import React, { Fragment } from "react";
import {SensorCardInterface} from "interfaces";
import SensorCard from "./Cards/SensorCard";

export default function RoomBody() {

    // répéter la const et l'ajout dans la div autant de fois qu'il y a de capteurs dans la pièce ou autre moyen
    const Card_1 : SensorCardInterface = 
	{
        sensor : "Température",
		nb_data : 1,
		data_list : "20,5°C",
		number_bg : 1,
    };
    const Card_2 : SensorCardInterface = 
	{
        sensor : "Humidité",
		nb_data : 1,
		data_list : "36%",
		number_bg : 2,
    };
    const Card_3 : SensorCardInterface = 
	{
        sensor : "Fuite d'eau",
		nb_data : 1,
		data_list : "Pas de fuite détectée",
		number_bg : 3,
    };
    let balise;

	balise = 
		<div className="w-full min-h-full bg-background py-lg px-base">
            <div className="grid grid-cols-2 gap-base">
                <SensorCard props={Card_1}/>
                <SensorCard props={Card_2}/>
                <SensorCard props={Card_3}/>
                <SensorCard props={Card_1}/>
                <SensorCard props={Card_2}/>
                <SensorCard props={Card_3}/>
            </div>
		</div>
	
  	return (
		<Fragment>
			{balise}
		</Fragment>  
	);

}
