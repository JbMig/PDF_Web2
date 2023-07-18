import React, { Fragment } from "react";
import { 
	Button, 
	Label, 
	Profile, 
	SideBarPopup, 
	Header, 
	SubHeader 
	} from "components";
import {
	ButtonInterface,
	LabelInterface,
	ProfileInterface,
	SubHeaderInterface,
	} from "interfaces";
// import "../components/Nav/Nav.tsx";
import { Link, Outlet } from "react-router-dom";



export default function Home() {
    const subHeaderProps : SubHeaderInterface = 
	{
		doWeShowSettingsButton : true,
		text_settings : "Paramètres généraux",
		text_add : "Ajouter bâtiment",
		text_title : "Mes bâtiments",
	};

  	return (
		<section className="bg-background">
			<SubHeader props={subHeaderProps}/>
			<nav>
				<ul>
					<li>
						<Link to="/Building" className="font-sans font-bold text-white">Test page Bâtiment</Link>
					</li>
				</ul>
			</nav>
		</section>
  	);
}
