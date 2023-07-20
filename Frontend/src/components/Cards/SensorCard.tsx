import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { SensorCardInterface } from "interfaces";

export default function SensorCard({ props }: { props: SensorCardInterface }) {

	let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-sensor_card rounded-xl bg-yellow_card bg-150 bg-top p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-white">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.data_list.map(function(data) {
							return (<p className="pt-lg">{data}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0} className="">
				<div className="w-sensor_card rounded-xl text-white p-lg bg-galaxy_card">
					<input type="checkbox" /> 
					<div className="text-xl font-medium">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>	
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.data_list.map(function(data) {
							return (<p className="pt-lg">{data}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">
				<div className="w-sensor_card rounded-xl bg-gray_card bg-150 bg-top p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium p-none">
						<Link to="/Sensor" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.sensor}
						</Link>
						<p className="mb-md">{props.nb_data} données</p>
							
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.data_list.map(function(data) {
							return (<p className="pt-lg">{data}</p>)
						})}
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
