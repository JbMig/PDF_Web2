import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import { ButtonInterface, ProfileInterface, SubHeaderInterface } from '../../interfaces/interfaces'
import Profile from "../Profile";

export default function SubHeader({props} : {props : SubHeaderInterface}) {
	const settingsButton : ButtonInterface = 
	{
		text: props.text_settings,
		style: 'outline',
	};

	const addButton : ButtonInterface = 
	{
		text: props.text_add,
		style: 'fill',
	};

    let balise;

	if(props.doWeShowSettingsButton)
	{
		balise = 
		<div className="flex bg-background py-sm">
			<div className="flex-1"> 
				<span className="text-big font-sans font-bold text-white self-center hover:text-text_yellow">{props.text_title}</span>
			</div>
			<div className="space-x-xxl flex-row self-center flex">
				<Button props={settingsButton}/>
				<Button props={addButton}/>
			</div>
		</div>;
	}
	else
	{
		balise = 
		<div className="flex bg-background py-sm">
			<div className="flex-1"> 
				<span className="text-big font-sans font-bold text-white self-center hover:text-text_yellow">{props.text_title}</span>
			</div>
			<div className="space-x-xxl flex-row self-center flex">
				<Button props={addButton}/>
			</div>
		</div>;
	}

	return (
		<Fragment>
			{balise}
		</Fragment>
	);
}
