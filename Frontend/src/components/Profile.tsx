import React from "react";
import { ProfileInterface } from "interfaces";

export default function Profile({ props }: { props: ProfileInterface }) {
  let balise;

  if (props.size == "small" && props.picture_link == undefined) {
    balise = (
      <>
        <label htmlFor="test" className="hover:cursor-pointer">
          <div className="avatar h-sm_profile w-sm_profile">
            <div className="border-white hover:border-white rounded-full border-2 border-solid bg-background">
              {/* <img src="../components/images/example.png" alt="profile_picture" /> */}
            </div>
          </div>
        </label>
      </>
    );
  } else if (props.size == "big") {
    balise = (
      <>
        <div className="avatar h-lg_profile w-lg_profile">
          <div className="border-white hover:border-white rounded-full border-2 border-solid bg-background">
            {/* <img src="../assets/images/example.png" alt="profile_picture" /> */}
          </div>
        </div>
      </>
    );
  }
  return <>{balise}</>;
}
