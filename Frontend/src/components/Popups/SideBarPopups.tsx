import React from "react";
import { ProfileInterface } from "interfaces";
import { Profile } from "components";

export default function SideBarPopup() {
  const Pdp: ProfileInterface = {
    size: "big",
    picture_link: undefined,
    // isTrue: true,
    // toggle:(),
  };

  return (
    <div className="drawer drawer-end">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <div className="text-md menu h-full w-sidebar bg-background px-xxl py-none text-white">
          <div className="flex-wrap space-y-lg border-b-2 border-gray_border py-xxl">
            <div className="flex justify-between">
              <Profile props={Pdp} />

              <label htmlFor="sidebar" className="text-md font-bold">
                ✕
              </label>
            </div>

            <div className="flex-wrap space-y-sm">
              <p className="text-md">Nom Prénom</p>
              <p className="text-base font-bold text-gray">mail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
