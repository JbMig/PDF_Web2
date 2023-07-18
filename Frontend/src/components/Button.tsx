import React, { Fragment } from 'react';
import { ButtonInterface } from '../interfaces/interfaces'

export default function Button({props} : {props : ButtonInterface}) {

    function buttonContent(){
            return props.text
    }

    let balise;

    if(props.style=="fill"){
        balise = <button className="
        rounded-xl py-sm px-lg 
        bg-text_yellow hover:bg-text_yellow
        text-md font-bold
        border-solid border-2 border-border_yellow hover:border-border_yellow">
            {buttonContent()}
        </button>
    } 

    else if(props.style=="outline"){
        balise = <button className="
        rounded-xl py-sm px-lg
        bg-transparent hover:bg-transparent 
        text-md font-bold uppercase text-yellow
        border-solid border-2 border-yellow hover:border-yellow
        ">
            {buttonContent()}
        </button>
    } 
    
    return (
        <Fragment>
            {balise}      
        </Fragment>
    );
}