import React from "react";
import { ButtonInterface, LabelInterface, ProfileInterface } from "interfaces";
import { Profile } from "components";

export default function SideBarPopup() {
  const Pdp: ProfileInterface = {
    size: "big",
    picture_link: undefined,
  };
  return (
    <div className="drawer drawer-end">
      <input id="test" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="test" className="drawer-overlay"></label>
        <div className="text-md menu h-full w-sidebar bg-background px-xxl py-none text-white">
          <div className="flex-wrap space-y-lg border-b-2 border-gray_border py-xxl">
            <div className="flex justify-between">
              <Profile props={Pdp} />
              <label htmlFor="test" className="text-md font-bold">
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

// truc intéressant que je met de côté :

{
  /* <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
        <a className="justify-between">
            Profile
            <span className="badge">New</span>
        </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
    </ul>
</div> */
}
