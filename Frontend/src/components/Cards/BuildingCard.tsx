import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BuildingCardInterface } from "interfaces";

export default function BuildingCard({ props }: { props: BuildingCardInterface }) {

	let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">
				<div className="w-building_card rounded-xl bg-yellow_card bg-150 bg-top p-lg h-full">
					<div className="text-xl font-medium">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-white">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm">
						{props.rooms_list.map(function(room) {
							return (<p className="pt-lg">{room}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div className="">
				<div className="rounded-xl w-building_card h-full text-white p-lg bg-galaxy_card">
					<div className="text-xl font-medium">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
							
					</div>
					<div className="border-t p-none grid grid-cols-2 gap-sm"> 
						{props.rooms_list.map(function(room) {
							return (<p className="pt-lg">{room}</p>)
						})}
					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="h-full">
				<div className="w-building_card rounded-xl bg-gray_card bg-150 bg-top p-lg">
					<div className="text-xl font-medium p-none">
						<Link to="/Building" className="font-sans self-center text-medium font-bold hover:text-main_yellow">
							{props.building}
						</Link>
						<p className="mb-md">{props.nb_rooms} pièces</p>
							
					</div>
					<div className="border-t p-none grid grid-cols-2">
						{props.rooms_list.map(function(room) {
							return (<p className="pt-lg">{room}</p>)
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
