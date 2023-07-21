import React from 'react';
import { SensorCardInterface, BodyInterface } from 'interfaces';
import { SensorCard } from 'components';

export default function RoomBody({ props }: { props: BodyInterface }) {
	
	function cardListByBuilding() {
		let card_list;
		if (props.id === "1" || props.id === "5" || props.id === "9" || props.id === "10" || props.id === "11" || props.id === "12") {
			const Card_1 : SensorCardInterface = 
			{
				sensor_name : "Température",
				data : "20,5°C",
				settings : "20°C",
				alert : false,
				number_bg : 1,
			};
			card_list = [Card_1];
		}
		else if (props.id === "2" || props.id === "7") {
			const Card_1 : SensorCardInterface = 
			{
				sensor_name : "Température",
				data : "20,5°C",
				settings : "18°C",
				alert : false,
				number_bg : 1,
			};
			card_list = [Card_1];
		}
		else if (props.id === "3" || props.id === "8") {
			const Card_1 : SensorCardInterface = 
			{
				sensor_name : "Température",
				data : "20,5°C",
				settings : "22°C",
				alert : false,
				number_bg : 1,
			};
			const Card_2 : SensorCardInterface = 
			{
				sensor_name : "humidité",
				data : "45%",
				settings : "30%",
				alert : false,
				number_bg : 2,
			};
			const Card_3 : SensorCardInterface = 
			{
				sensor_name : "fuite d'eau",
				data : "Pas de fuite détecté",
				settings : "",
				alert : false,
				number_bg : 3,
			};
			card_list = [Card_1, Card_2, Card_3];
		}
		else if (props.id === "4" || props.id === "6") {
			const Card_1 : SensorCardInterface = 
			{
				sensor_name : "Température",
				data : "20,5°C",
				settings : "22°C",
				alert : false,
				number_bg : 1,
			};
			const Card_2 : SensorCardInterface = 
			{
				sensor_name : "fuite d'eau",
				data : "",
				settings : "",
				alert : true,
				number_bg : 2,
			};
			const Card_3 : SensorCardInterface = 
			{
				sensor_name : "fumée",
				data : "Pas de fumée détectée",
				settings : "",
				alert : false,
				number_bg : 3,
			};
			const Card_4 : SensorCardInterface = 
			{
				sensor_name : "CO2",
				data : "Taux de CO2 normal",
				settings : "",
				alert : false,
				number_bg : 1,
			};
			card_list = [Card_1, Card_2, Card_3, Card_4];
		}
		else {
			const Card_1 : SensorCardInterface = 
			{
				sensor_name : "Température",
				data : "20,5°C",
				settings : "20°C",
				alert : false,
				number_bg : 1,
			};
			card_list = [Card_1];
		}

		return card_list;
	}
	
  	return (
		<div className="w-full min-h-full bg-background py-lg px-base">
            <div className="grid grid-cols-2 gap-base">
				{cardListByBuilding().map(function(card) {
					return (<SensorCard props={card}/>)
				})}
            </div>
		</div>
	);

}
