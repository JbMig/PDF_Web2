import React from "react";
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
		<>
			<h1>Vous êtes sur la home page.</h1>
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
		</>
  );
}
