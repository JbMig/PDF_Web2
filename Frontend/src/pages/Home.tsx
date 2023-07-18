import React, { Fragment } from "react";
import {
  Button,
  Label,
  Profile,
  SideBarPopup,
  Header,
  SubHeader,
} from "components";
import {
  ButtonInterface,
  LabelInterface,
  ProfileInterface,
  SubHeaderInterface,
} from "interfaces";
// import "../components/Nav/Nav.tsx";
import { Link, Outlet } from "react-router-dom";

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
      <nav>
        <ul>
          <li>
            <Link to="/Building" className="font-sans font-bold text-white">
              Test page Bâtiment
            </Link>
          </li>
        </ul>
      </nav>
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
    <Fragment>
      {balise}
      {/* tests Sandie */}
      {/* <SideBarPopup />
			<Button props={buttonPlein}/>
			<Button props={buttonVide}/>
			<Label props={test}/>
			<Profile props={test2}/> */}
    </Fragment>
  );
}
