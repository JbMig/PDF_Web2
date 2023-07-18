import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
	return (
		<Fragment>
			<h1>404</h1>
			<Link to="/">Go to the home page</Link>
		</Fragment>
	);
}
