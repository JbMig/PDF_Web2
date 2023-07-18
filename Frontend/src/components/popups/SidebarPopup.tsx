import React, { Fragment } from "react";
import { ButtonInterface, LabelInterface, ProfileInterface } from '../../interfaces/interfaces'
import Profile from "../../components/Profile";

export default function SideBarPopup() {
    const Pdp : ProfileInterface = {
        size: 'big',
        picture_link: undefined
    }
    return(
        <Fragment>
            <div className="drawer drawer-end">
                <input id="test" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-side">
                    <label htmlFor="test" className="drawer-overlay"></label>
                    <div className="menu h-full bg-background text-white px-xxl py-none w-sidebar text-md">
                        <div className="py-xxl flex-wrap space-y-lg border-b-2 border-gray_border">
                            <div className="flex justify-between">
                                <Profile props={Pdp}/>
                                <label htmlFor="test" className="font-bold text-md">✕</label>
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

