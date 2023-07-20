import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { SensorCardInterface } from "interfaces";

export default function SensorCard({ props }: { props: SensorCardInterface }) {

	let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-sensor_card bg-main_yellow p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.data_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0} className="">
				<div className="border w-sensor_card text-white p-lg">
					<input type="checkbox" /> 
					<div className="text-xl font-medium">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>	
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.data_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">
				<div className="w-sensor_card bg-gray p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium p-none">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>
							
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.data_list}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
