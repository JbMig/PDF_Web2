import React, { Fragment } from "react";
import {RoomCardInterface, SensorInterface} from "interfaces";
import RoomCard from "./Cards/RoomCard";
import Sensor from "./Sensor";

export default function Body() {
  
    const Sensor_n : SensorInterface = 
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
      
    let balise;

	balise = 
		<div className="w-full h-full bg-background py-lg px-base">
            {/* en fonction du chemin contient :
            le composant des cartes bâtiment, 
            le composant des cartes pièces
            ou la liste des capteurs
            */}
            <Sensor props={Sensor_2} />
            <Sensor props={Sensor_n} />
            <Sensor props={Sensor_3} />            
		</div>
	
  	return (
		<Fragment>
			{balise}
		</Fragment>  
	);

}
