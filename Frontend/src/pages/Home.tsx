import React from "react";
import { Button } from "components";
import { ButtonInterface } from '../interfaces/interfaces'


export default function Home() {
	const bellButton : ButtonInterface = {
		text: 'Notifs',
		style: 'outline',
		icon: undefined 
	}
	const profileButton : ButtonInterface = {
		text: 'Profil',
		style: 'fill',
		icon: undefined 
	}

    let balise;
	balise = <body className="bg-background_grey px-xxxl">
				<h1 className="text-big font-sans font-bold text-white">Mes bâtiments</h1>
			</body>;
	
	
	
	
	
			// <div className="h-120px bg-background_grey drop-shadow-lg flex">
			// 	<div className="header-content w-full mx-xxxl flex-row justify-between self-center flex">
			// 		<h2 className="text-title font-sans font-bold text-white self-center hover:text-text_yellow">Nom de l'appli</h2>
			// 		<div className="space-x-xxl flex-row self-center">
			// 			<Button props={bellButton}/>
			// 			<Button props={profileButton}/>
			// 		</div>
			// 	</div>
			// </div>
	return (
		<>
			{balise}
		</>
	);
// 	const buttonPlein : ButtonInterface = {
// 			text: 'coucouuuuuu',
// 			style: 'fill',
// 			icon: undefined 
// 	}
// 	const buttonVide : ButtonInterface = {
// 		text: 'ss',
// 		style: 'outline',
// 		icon: undefined 
// 	}

//   	return (
// 		<Fragment>
// 			<h1>Vous êtes sur la home page.</h1>
// 			<Button props={buttonPlein}/>
// 			<Button props={buttonVide}/>
// 		</Fragment>
//   );
}
