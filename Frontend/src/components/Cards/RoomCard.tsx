import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RoomCardInterface } from "interfaces";

export default function RoomCard({ props }: { props: RoomCardInterface }) {
  let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-room_card bg-main_yellow p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-main_yellow">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.sensor_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0} className="">
				<div className="border w-room_card text-white p-lg">
					<input type="checkbox" /> 
					<div className="text-xl font-medium">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-main_yellow">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.sensor_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">
				<div className="w-room_card bg-gray p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium p-none">
						<Link to="/Room" className="font-sans self-center text-xl font-bold hover:text-main_yellow">
							{props.room}
						</Link>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.sensor_list}</p>
					</div>
				</div>
			</div>
		);
	}

  return <Fragment>{balise}</Fragment>;
}
