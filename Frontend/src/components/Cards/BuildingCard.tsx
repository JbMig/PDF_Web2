import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BuildingCardInterface } from "interfaces";

export default function BuildingCard({ props }: { props: BuildingCardInterface }) {

	let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-building_card bg-main_yellow p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.rooms_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0} className="">
				<div className="border w-building_card text-white p-lg">
					<input type="checkbox" /> 
					<div className="text-xl font-medium">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
							
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.rooms_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">
				<div className="w-building_card bg-gray p-lg">
					<input type="checkbox"/> 
					<div className="text-xl font-medium p-none">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
							
					</div>
					<div className="border-t p-none"> 
						<p className="pt-lg">{props.rooms_list}</p>
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
