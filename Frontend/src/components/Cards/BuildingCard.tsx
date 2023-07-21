import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingCardInterface } from 'interfaces';

export default function BuildingCard({
  props,
}: {
  props: BuildingCardInterface;
}) {
  function cardStyleClass() {
    let bigDivClassName;
    let smallDivClassName;
    if (props.number_bg === 1) {
      bigDivClassName =
        'w-building_card rounded-xl bg-yellow_card bg-150 bg-top h-full p-lg';
      smallDivClassName =
        'font-sans self-center text-medium font-bold hover:text-white';
    } else if (props.number_bg === 2) {
      bigDivClassName =
        'w-building_card rounded-xl bg-galaxy_card h-full p-lg text-white';
      smallDivClassName =
        'font-sans self-center text-medium font-bold hover:text-main_yellow';
    } else {
      bigDivClassName =
        'w-building_card rounded-xl bg-gray_card bg-150 bg-top h-full p-lg';
      smallDivClassName =
        'font-sans self-center text-medium font-bold hover:text-main_yellow';
    }
    return {
      bigDivClassName: bigDivClassName,
      smallDivClassName: smallDivClassName,
    };
  }

  const link = `/Building/${props.building_id}`
  return (
    <div className="">
      <div className={cardStyleClass().bigDivClassName}>
        <div className="text-xl font-medium">
          <Link to={link} className={cardStyleClass().smallDivClassName}>
            {props.building_name}
          </Link>
          <p className="mb-md">{props.nb_rooms} pièces</p>
        </div>
        <div className="grid grid-cols-2 gap-sm border-t p-none">
          {props.rooms_list.map(function (room_name) {
            return <p className="pt-lg">{room_name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
