import React, { Fragment } from "react";
import { SideBarPopup, SubHeader, HomeBody, NotificationsPopup } from "components";
import {SubHeaderInterface,} from "interfaces";

export default function Home() {
  const subHeaderProps: SubHeaderInterface = {
    text_settings: "Paramètres généraux",
    text_add: "Ajouter bâtiment",
    title_1: "",
    title_path_1: "",
    title_2: "",
  };

  return (
    <Fragment>
      <SubHeader props={subHeaderProps} />
      <SideBarPopup />
	  <NotificationsPopup />
      <HomeBody />
    </Fragment>
  );
}
