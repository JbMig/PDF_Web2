import React from 'react';
import { LabelInterface } from '../interfaces/interfaces'

export default function Label({props} : {props : LabelInterface}) {
    // {text, style, color, icon}:{text: string, style: string, color:string, icon?: string}
    function buttonContent(){
        // if(props.icon == undefined){
            return props.text
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

    if(props.style=="fill"){
        balise = <label htmlFor={props.label} className="
        rounded-xl py-sm px-lg 
        bg-text_yellow hover:bg-text_yellow
        text-md font-bold
        border-solid border-2 border-border_yellow hover:border-border_yellow">
            {buttonContent()}
        </label>
    } 

    else if(props.style=="outline"){
        balise = <label htmlFor={props.label} className="
        rounded-xl py-sm px-lg
        bg-transparent hover:bg-transparent 
        text-md font-bold uppercase text-yellow
        border-solid border-2 border-yellow hover:border-yellow
        ">
            {buttonContent()}
        </label>
    } 
    
    // else if(props.style=="undefined"){
    //     balise = <button className={"btn btn-secondary text-neutral-600 font-os text-paragraph"} >
    //         {buttonContent()}
    //     </button>
    // }
    return (
        <>
            {balise}      
        </>
    );
}