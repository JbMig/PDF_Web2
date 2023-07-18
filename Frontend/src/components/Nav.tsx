import React, { Fragment } from "react";
import { Header } from "components";

// Ce fichier va probablement devenir inutile, et on déplacera simplement le header en haut de la page Home
export default function Nav() {
	let balise;
	balise = <section className="">
				<Header />
			</section>;

	return <Fragment>
				{balise}
			</Fragment>;
}
