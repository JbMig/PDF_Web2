import React from "react";
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
        bg-text_yellow px-lg
        py-sm font-bold hover:border-border_yellow hover:bg-text_yellow"
      >
        {buttonContent()}
      </button>
    );
  } else if (props.style == "outline") {
    balise = (
      <button
        className="
        text-md rounded-xl border-2
        border-solid border-yellow
        bg-transparent px-lg py-sm font-bold
        uppercase text-yellow hover:border-yellow hover:bg-transparent
        "
      >
        {buttonContent()}
      </button>
    );
  }

  return <>{balise}</>;
}
