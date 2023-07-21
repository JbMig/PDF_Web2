import React, { Fragment } from 'react';
import { BodyInterface, RoomCardInterface } from 'interfaces';
import { RoomCard } from 'components';

export default function BuildingBody({ props }: { props: BodyInterface }) {

	function cardListByBuilding() {
		let card_list;
		if (props.id === "1") {				//Maison
			const Card_1: RoomCardInterface = {
				room_name: "Séjour",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 1,
	  			room_id:"1",
			};
			const Card_2: RoomCardInterface = {
				room_name: "Chambre",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 2,
	  			room_id:"2",
			};
			const Card_3: RoomCardInterface = {
				room_name: "Salle de Bain",
				nb_sensor: 3,
				sensor_list: ["température", "humidité", "fuite d'eau"],
				number_bg: 3,
	  			room_id:"3",
			};
			const Card_4: RoomCardInterface = {
				room_name: "Cuisine",
				nb_sensor: 4,
				sensor_list: ["température", "fuite d'eau", "fumée", "CO2"],
				number_bg: 1,
	  			room_id:"4",
			};
			const Card_5: RoomCardInterface = {
				room_name: "Bureau",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 2,
	  			room_id:"5",
			};
			card_list = [Card_1, Card_2, Card_3, Card_4, Card_5];
		}
		else if (props.id === "2") {				//Appart
			const Card_1: RoomCardInterface = {
				room_name: "Séjour",
				nb_sensor: 4,
				sensor_list: ["température", "fuite d'eau", "fumée", "CO2"],
				number_bg: 1,
	  			room_id:"6",
			};
			const Card_2: RoomCardInterface = {
				room_name: "Chambre",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 2,
	  			room_id:"7",
			};
			const Card_3: RoomCardInterface = {
				room_name: "Salle de Bain",
				nb_sensor: 2,
				sensor_list: ["température", "humidité", "fuite d'eau"],
				number_bg: 3,
	  			room_id:"8",
			};
			card_list = [Card_1, Card_2, Card_3];
		}
		else {											//Boulot
			const Card_1: RoomCardInterface = {
				room_name: "Open Space",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 1,
	  			room_id:"9",
			};
			const Card_2: RoomCardInterface = {
				room_name: "Bureau directeur",
				nb_sensor: 2,
				sensor_list: ["température"],
				number_bg: 2,
	  			room_id:"10",
			};
			const Card_3: RoomCardInterface = {
				room_name: "Bureau RH",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 3,
	  			room_id:"11",
			};
			const Card_4: RoomCardInterface = {
				room_name: "Infirmerie",
				nb_sensor: 1,
				sensor_list: ["température"],
				number_bg: 1,
	  			room_id:"12",
			};
			card_list = [Card_1, Card_2, Card_3, Card_4];
		}
		return card_list;
	}

	let balise;
	const card_list_for_this_building = cardListByBuilding();
	balise = (
		<div className="min-h-full w-full bg-background px-base py-lg">
			<div className="grid grid-cols-2 gap-base">
				{card_list_for_this_building.map(function (card) {
					return <RoomCard props={card} />;
				})}
			</div>
		</div>
	);

	return <Fragment>{balise}</Fragment>;
}
