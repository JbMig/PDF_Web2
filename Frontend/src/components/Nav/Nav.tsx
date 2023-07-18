import React, { Fragment } from "react";
import { Header } from "components";
import { ButtonInterface, ProfileInterface } from "interfaces";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
	const bellButton: ButtonInterface = {
		text: "Notifs",
		style: "outline",
	};

	const profilePicture: ProfileInterface = {
		size: "small",
		picture_link: undefined,
	};

	let balise;

	balise = <section className="bg-background px-base">
				<Header />
			</section>;

	return <Fragment>
	{balise}
	</Fragment>;
}
