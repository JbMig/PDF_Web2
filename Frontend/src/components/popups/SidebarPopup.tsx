import React, { Fragment } from "react";
import Profile from '../Labels/Profile';
import { ProfileInterface } from "interfaces";

export default function SideBarPopup() {
    const Pdp : ProfileInterface = {
        size: 'big',
        picture_link: undefined
    }
    return(
        <Fragment>
            <div className="drawer drawer-end">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <div className="menu h-full bg-background text-white px-xxl py-none w-sidebar text-md z-5">
                        <div className="py-xxl flex-wrap space-y-lg border-b-2 border-gray_border">
                            <div className="flex justify-between">
                                <Profile props={Pdp}/>
                                <label htmlFor="sidebar" className="font-bold text-md">✕</label>
                            </div>
                            <div className="flex-wrap space-y-sm">
                                <p className="text-md">Nom Prénom</p>
                                <p className="text-base text-gray font-bold">mail</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

