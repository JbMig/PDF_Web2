import React, { Fragment } from "react";
import { RoomCardInterface } from "interfaces";

export default function RoomCard({ props }: { props: RoomCardInterface }) {

	let balise;

	if (props.number_bg == 1) {
		balise = (
			<div className="">

				<div className="collapse collapse-arrow w-room_card bg-main_yellow">
					<input type="checkbox"/> 
					<div className="collapse-title text-xl font-medium">
						<p>{props.room}</p>
						<p>{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="collapse-content"> 
						<p>{props.sensor_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 2) {
		balise = (
			<div tabIndex={0}>
				<div className="collapse collapse-arrow border w-room_card text-white mb-xxl">
					<input type="checkbox" /> 
					<div className="collapse-title text-xl font-medium">
						<p>{props.room}</p>
						<p>{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="collapse-content z-0"> 
						<p>{props.sensor_list}</p>

					</div>
				</div>
			</div>
		);
	} else if (props.number_bg == 3) {
		balise = (
			<div className="">

				<div className="collapse collapse-arrow w-room_card bg-gray p-lg">
					<input type="checkbox"/> 
					<div className="collapse-title text-xl font-medium p-none">
						<p>{props.room}</p>
						<p className="mb-md">{props.nb_sensor} capteurs</p>
							
					</div>
					<div className="collapse-content border-t p-none"> 
						<p className="pt-lg">{props.sensor_list}</p>
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
