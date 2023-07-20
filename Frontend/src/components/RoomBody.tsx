import React, { Fragment } from "react";
import {SensorCardInterface, SensorInterface} from "interfaces";
import {SensorCard} from "components";

export default function RoomBody() {
    const Sensor_1 : SensorInterface = 
	{
        sensor_name : "Température",
        alert : false,
        data : "17°C" ,
        settings : "18°C",
    };

    const Sensor_2 : SensorInterface = 
	{
        sensor_name : "Détecteur de fuite",
        alert : false,
        data : undefined ,
        settings : undefined,
    };
    
    const Sensor_3 : SensorInterface = 
	{
        sensor_name : "Détecteur de fumée",
        alert : true,
        data : undefined ,
        settings : undefined,
    };
	const card_list = [Sensor_1, Sensor_2, Sensor_3];
    let balise;

	balise = 
		<div className="w-full min-h-full bg-background py-lg px-base">
            <div className="grid grid-cols-1">
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
