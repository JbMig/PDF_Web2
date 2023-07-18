import React, { Fragment } from 'react';
import { ProfileInterface } from '../interfaces/interfaces'

export default function Profile({props} : {props : ProfileInterface}) {
    let balise;

    if(props.size=="small" && props.picture_link==undefined){
        balise = 
        <Fragment>  
            <label htmlFor="test" className="hover:cursor-pointer">
                <div className="avatar w-sm_profile h-sm_profile">
                    <div className="rounded-full bg-background border-solid border-2 border-white hover:border-white"> 
                        {/* <img src="../components/images/example.png" alt="profile_picture" /> */}
                    </div>
                </div>
            </label>
        </Fragment>
    }
    
    else if(props.size=="big"){
        balise = 
        <Fragment>
            <div className="avatar w-lg_profile h-lg_profile">
                <div className="rounded-full bg-background border-solid border-2 border-white hover:border-white"> 
                    {/* <img src="../assets/images/example.png" alt="profile_picture" /> */}
                </div>
            </div>
        </Fragment>
    }
    return (
        <Fragment>
            {balise}      
        </Fragment>
    );
}