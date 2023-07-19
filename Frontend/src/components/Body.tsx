import React, { Fragment } from "react";
import { RoomCardInterface } from "interfaces";
import { RoomCard } from "components";

export default function Body() {
  // répéter la const et l'ajout dans la div autant de fois qu'il y a de piece dans le batiment ou autre moyen
  const Card_n: RoomCardInterface = {
    room: "room1",
    nb_sensor: 2,
    sensor_list: ["coucou", "test"],
    number_bg: 1,
  };
  const Card_2: RoomCardInterface = {
    room: "room2",
    nb_sensor: 4,
    sensor_list: "test",
    number_bg: 2,
  };
  const Card_3: RoomCardInterface = {
    room: "room3",
    nb_sensor: 6,
    sensor_list: "aKJZBJGBRIUBG",
    number_bg: 3,
  };
  let balise;

  balise = (
    <div className="h-full w-full bg-background px-base py-lg">
      {/* if page = pieces */}
      <div className="flex flex-wrap justify-between">
        <RoomCard props={Card_n} />
        <RoomCard props={Card_2} />
        <RoomCard props={Card_3} />
      </div>

      {/* if page = batiments 
            // cartes de batiments
            */}
    </div>
  );

  return <Fragment>{balise}</Fragment>;
}
