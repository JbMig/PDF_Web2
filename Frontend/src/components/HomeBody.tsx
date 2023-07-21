import React from 'react';
import { BuildingCardInterface } from 'interfaces';
import { BuildingCard } from 'components';

export default function HomeBody() {
	const Card_1: BuildingCardInterface = {
		building_name: 'Maison',
		nb_rooms: 5,
		rooms_list: [
			"Séjour",
			"Chambre",
			"Salle de Bain",
			"Cuisine",
			"Bureau",
		],
		number_bg: 3,
		building_id:"1",
	};
	const Card_2: BuildingCardInterface = {
		building_name: 'Appart',
		nb_rooms: 3,
		rooms_list: ["Séjour", "Chambre", "Salle de Bain"],
		number_bg: 1,
		building_id:"2",
	};
	const Card_3: BuildingCardInterface = {
		building_name: 'Travail',
		nb_rooms: 4,
		rooms_list: ["Open Space", "Bureau directeur", "Bureau RH", "Infirmerie"],
		number_bg: 2,
		building_id:"3",
	};
	const card_list = [Card_1, Card_2, Card_3];

	return (
		<div className="min-h-full w-full bg-background px-base py-lg">
			<div className="grid grid-cols-3 gap-base">
				{card_list.map(function (card) {
					return <BuildingCard props={card} />;
				})}
			</div>
		</div>
  );
}
