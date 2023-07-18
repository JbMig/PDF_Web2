import React, { Fragment } from "react";
import { LabelInterface } from "interfaces";

export default function Label({ props }: { props: LabelInterface }) {
  
  function buttonContent() {
    return props.text;
  }

  let balise;

  if (props.style == "fill") {
    balise = (
      <button
        className="
        btn rounded-xl border-2 border-solid 
        border-border_yellow bg-text_yellow
        px-lg py-sm text-medium 
        font-bold uppercase hover:bg-text_yellow "
      >
        {buttonContent()}
      </button>
    );
  } else if (props.style == "outline") {
    balise = (
      <button
        className="
        btn rounded-xl border-2 border-solid
        border-yellow bg-transparent 
        px-lg py-sm text-medium font-bold
        uppercase text-yellow hover:bg-transparent
        "
      >
        {buttonContent()}
      </button>
    );
  }

  return (
    <Fragment>
      {balise}
    </Fragment>
  );
}