import React from "react";
import { Button, Label, Profile, SideBarPopup, SubHeader } from "components";
import {
  ButtonInterface,
  LabelInterface,
  ProfileInterface,
  SubHeaderInterface,
} from "interfaces";

export default function Home() {
  const subHeaderProps: SubHeaderInterface = {
    doWeShowSettingsButton: true,
    text_settings: "Paramètres généraux",
    text_add: "Ajouter bâtiment",
    text_title: "Mes bâtiments",
  };

  let balise;

  balise = (
    <section className="bg-background px-base">
      <SubHeader props={subHeaderProps} />
    </section>
  );

  // tests Sandie
  // const buttonPlein : ButtonInterface = {
  // 	text: 'Satoshi',
  // 	style: 'fill',
  // }
  // const buttonVide : ButtonInterface = {
  // 	text: 'abcdef',
  // 	style: 'outline',
  // }
  //   const test : LabelInterface = {
  //     	text: 'label',
  //     	style: 'outline',
  //     	label: 'test',
  //   }

  //   const test2 : ProfileInterface = {
  //     	size: 'small',
  //     	picture_link: undefined
  //   }

  return (
    <>
      {balise}
      {/* tests Sandie */}
      {/* <Header />
			<SideBarPopup />
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
			<Label props={test}/>
			<Profile props={test2}/> */}
    </>
  );
}
