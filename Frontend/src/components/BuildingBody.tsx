import React, { Fragment } from 'react';
import { RoomCardInterface } from 'interfaces';
import { RoomCard } from 'components';

export default function BuildingBody() {
  const Card_1: RoomCardInterface = {
    room: 'Séjour',
    nb_sensor: 2,
    sensor_list: ['température'],
    number_bg: 1,
  };
  const Card_2: RoomCardInterface = {
    room: 'Chambre',
    nb_sensor: 4,
    sensor_list: ['température'],
    number_bg: 2,
  };
  const Card_3: RoomCardInterface = {
    room: 'Salle de Bain',
    nb_sensor: 6,
    sensor_list: ['température', 'humidité'],
    number_bg: 3,
  };
  const card_list = [Card_1, Card_2, Card_3, Card_1, Card_2];

  let balise;

  balise = (
    <div className="min-h-full w-full bg-background px-base py-lg">
      <div className="grid grid-cols-2 gap-base">
        {card_list.map(function (card) {
          return <RoomCard props={card} />;
        })}
      </div>
    </div>
  );

  return <Fragment>{balise}</Fragment>;
}
