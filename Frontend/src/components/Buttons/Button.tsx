import React, { Fragment } from "react";
import { ButtonInterface } from "interfaces";

export default function Button({ props }: { props: ButtonInterface }) {
	function buttonContent() {
		return props.text;
	}

	let balise;

	if (props.style == "fill") {
		balise = (
			<button
				className="
				text-md rounded-xl border-2
				border-solid border-border_yellow
				bg-main_yellow px-lg
				py-sm h-btn font-bold hover:border-border_yellow hover:bg-main_yellow"
			>
				{buttonContent()}
			</button>
		);
	} else if (props.style == "outline") {
		balise = (
			<button
				className="
				text-md rounded-xl border-2
				border-solid border-main_yellow
				bg-transparent px-lg py-sm h-btn font-bold
				uppercase text-main_yellow hover:border-main_yellow hover:bg-transparent
				"
			>
				{buttonContent()}
			</button>
		);
	}

	return <Fragment>{balise}</Fragment>;
}
