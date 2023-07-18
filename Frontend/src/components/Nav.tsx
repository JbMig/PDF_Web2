import React, { Fragment } from "react";
import { Header } from "components";

// Le lien vers home ici va devenir inutile, à condition d'inclure le header partout.
export default function Nav() {
	let balise;
	balise = <section className="bg-background px-base">
				<Header />
			</section>;

	return <Fragment>
				{balise}
			</Fragment>;
}
