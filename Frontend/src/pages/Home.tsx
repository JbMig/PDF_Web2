import React from "react";
import { Button, Label, Profile, SideBarPopup } from "components";
import { ButtonInterface } from "interfaces";

export default function Home() {
  let balise;

  balise = (
    <section className="bg-background px-base">
      <h1 className="font-sans text-white text-big font-bold">Mes bâtiments</h1>
    </section>
  );

  // tests Sandie
  const buttonPlein: ButtonInterface = {
    text: "Satoshi",
    style: "fill",
  };
  const buttonVide: ButtonInterface = {
    text: "abcdef",
    style: "outline",
  };
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
      {/* <SideBarPopup />
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
			<Label props={test}/>
			<Profile props={test2}/> */}
    </>
  );
}
