import React, { Fragment } from "react";
import { Button, Label, Profile, SideBarPopup, Header, SubHeader, } from "components";
import {ButtonInterface,LabelInterface,ProfileInterface,SubHeaderInterface,} from "interfaces";
import { Link, Outlet } from "react-router-dom";
import Body from "components/Body";

export default function Home() {
    const subHeaderProps : SubHeaderInterface = 
	{
		doWeShowSettingsButton : true,
		text_settings : "Paramètres généraux",
		text_add : "Ajouter bâtiment",
		text_title : "Mes bâtiments",
	};
	
  	return (
		<Fragment>
			<Header />
			<SubHeader props={subHeaderProps}/>
			<SubHeader props={subHeaderProps}/>
			<SideBarPopup />
			<Body />
		</Fragment>  
	);

}
