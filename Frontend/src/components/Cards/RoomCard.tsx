import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RoomCardInterface } from "interfaces";

export default function RoomCard({ props }: { props: RoomCardInterface }) {
  let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-room_card rounded-xl bg-yellow_card bg-150 bg-top p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-white">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.sensor_list.map(function(sensor) {
							return (<p className="pt-lg">{sensor}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0} className="">
				<div className="w-room_card rounded-xl text-white p-lg bg-galaxy_card">
					<input type="checkbox" /> 
					<div className="text-xl font-medium">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-main_yellow">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.sensor_list.map(function(sensor) {
							return (<p className="pt-lg">{sensor}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">
				<div className="w-room_card rounded-xl bg-gray_card bg-150 bg-top p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium p-none">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-main_yellow">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.sensor_list.map(function(sensor) {
							return (<p className="pt-lg">{sensor}</p>)
						})}
					</div>
				</div>
			</div>
		);
	}

  return <Fragment>{balise}</Fragment>;
}
