import React from "react";
import { Link } from "react-router-dom";
import { RoomCardInterface } from "interfaces";

export default function RoomCard({ props }: { props: RoomCardInterface }) {
  function cardStyleClass() {
    let bigDivClassName;
    let smallDivClassName;
    if (props.number_bg === 1) {
      bigDivClassName =
        'rounded-xl bg-yellow_card text-black bg-150 bg-top p-lg';
      smallDivClassName =
        'font-sans self-center text-xl font-bold hover:text-white';
    } else if (props.number_bg === 2) {
      bigDivClassName = 'rounded-xl bg-galaxy_card text-white p-lg';
      smallDivClassName =
        'font-sans self-center text-xl font-bold hover:text-main_yellow';
    } else {
      bigDivClassName = 'rounded-xl bg-gray_card text-black bg-150 bg-top p-lg';
      smallDivClassName =
        'font-sans self-center text-xl font-bold hover:text-white';
    }
    return {
      bigDivClassName: bigDivClassName,
      smallDivClassName: smallDivClassName,
    };
  }

  return (
    <div className="">
      <div className={cardStyleClass().bigDivClassName}>
        <div className="text-xl font-medium">
          <Link to="/Room" className={cardStyleClass().smallDivClassName}>
            {props.room}
          </Link>
          <p className="mb-md">{props.nb_sensor} capteurs</p>
        </div>
        <div className="grid grid-cols-2 gap-sm border-t p-none">
          {props.sensor_list.map(function (sensor) {
            return <p className="pt-lg">{sensor}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
