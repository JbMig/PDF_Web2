import React, { Fragment } from "react";
import { Header } from "../components";
import Button from "../components/Buttons/Button";
import { ButtonInterface } from '../interfaces/interfaces'


export default function Home() {
	const buttonPlein : ButtonInterface = {
			text: 'coucouuuuuu',
			style: 'fill',
			icon: undefined 
	}
	const buttonVide : ButtonInterface = {
		text: 'ss',
		style: 'outline',
		icon: undefined 
	}

  	return (
		<Fragment>
			<Header></Header>
			<h1>Vous êtes sur la home page.</h1>
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
		</Fragment>
  );
}
