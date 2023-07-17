import React from 'react';
import { ButtonInterface } from '../../interfaces/interfaces'

export default function Button({props} : {props : ButtonInterface}) {
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
        balise = <button className="
        btn rounded-xl py-sm px-lg 
        bg-text_yellow hover:bg-text_yellow
        text-moyen font-bold uppercase 
        border-solid border-2 border-border_yellow ">
            {buttonContent()}
        </button>
    } 

    else if(props.style=="outline"){
        balise = <button className="
        btn rounded-xl py-sm px-lg
        bg-transparent hover:bg-transparent 
        text-moyen font-bold uppercase text-yellow
        border-solid border-2 border-yellow
        ">
            {buttonContent()}
        </button>
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