import React from 'react';
import { BuildingCardInterface } from 'interfaces';
import { BuildingCard } from 'components';

export default function HomeBody() {
  const Card_1: BuildingCardInterface = {
    building: 'Appart',
    nb_rooms: 2,
    rooms_list: ['Séjour', 'Salle de bain'],
    number_bg: 1,
  };
  const Card_2: BuildingCardInterface = {
    building: 'Travail',
    nb_rooms: 4,
    rooms_list: ['Bureau patron', 'Bureau RH', 'Infirmerie', 'Open space'],
    number_bg: 2,
  };
  const Card_3: BuildingCardInterface = {
    building: 'Maison',
    nb_rooms: 6,
    rooms_list: [
      'Bureau',
      'Salle de bain',
      'Séjour',
      'Cuisine',
      'Chambre',
      "Chambre d'amis",
    ],
    number_bg: 3,
  };
  const card_list = [Card_1, Card_2, Card_3, Card_3, Card_1];

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
