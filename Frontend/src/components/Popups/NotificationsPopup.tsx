import React from 'react';
import { Link } from "react-router-dom";
import { NotificationsInterface } from 'interfaces';
import { Notifications } from 'components';



export default function NotificationsPopup() {
	const bellButton: NotificationsInterface = {
		open: true,
	};
	const notifs_list = [
		{
			room_name : "Salle de Bain",
			text : "Fuite d'eau détectée !",
			link : "/Room/8",
		},
		{
			room_name : "Cuisine",
			text : "Fumée détectée !",
			link : "/Room/4",
		},
		{
			room_name : "Cuisine",
			text : "Taux de CO2 anormal !",
			link : "/Room/4",
		},
	];

	return (
		<div className="drawer drawer-end">
			<input id="popUp" type="checkbox" className="drawer-toggle" />
			<div className="drawer-side z-2">
				<label htmlFor="popUp" className="drawer-overlay"></label>
				<div className="text-md menu h-full w-sidebar bg-background px-xxl py-none  text-white">
					<div className="flex-wrap space-y-lg py-xxl">
						<label htmlFor="popUp">
							<Notifications props={bellButton} />
						</label>

						<div className="border-t p-none"> 
							{notifs_list.map(function(notif) {
								return (
									<div className="border-t-2 border-gray_border text-xl font-medium p-md">
										<Link to={notif.link} className="font-sans self-center text-xl font-bold hover:text-white">
											{notif.room_name}
										</Link>
										<p className="mt-sm">{notif.text}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  
}
