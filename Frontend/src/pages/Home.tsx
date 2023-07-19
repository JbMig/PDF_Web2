import React, { Fragment } from "react";
import { SideBarPopup, Header, SubHeader } from "components";
import { SubHeaderInterface } from "interfaces";
import Body from "components/Body";

export default function Home() {
  const subHeaderProps: SubHeaderInterface = {
    text_settings: "Paramètres généraux",
    text_add: "Ajouter bâtiment",
    title_1: "Mes bâtiments",
    title_path_1: "",
    title_2: "",
    title_path_2: "",
    title_3: "",
  };

  return (
    <Fragment>
      <SubHeader props={subHeaderProps} />
      <SideBarPopup />
      <Body />
    </Fragment>
  );
}
