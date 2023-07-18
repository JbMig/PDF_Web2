import React, { Fragment } from "react";
import { LabelInterface } from "interfaces/index";

export default function Label({ props }: { props: LabelInterface }) {
  // {text, style, color, icon}:{text: string, style: string, color:string, icon?: string}
  function buttonContent() {
    // if(props.icon == undefined){
    return props.text;
    // } else {
    //     return (
    //         <>
    //             <img className="pr-2" src={props.icon} alt="icon button" />
    //             {props.text}
    //         </>
    //     )
    // }
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

  // else if(props.style=="undefined"){
  //     balise = <button className={"btn btn-secondary text-neutral-600 font-os text-paragraph"} >
  //         {buttonContent()}
  //     </button>
  // }
  return <Fragment>{balise}</Fragment>;
}
