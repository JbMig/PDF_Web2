import React, { Fragment } from "react";
import Button from "../components/Button";
import { ButtonInterface, LabelInterface, ProfileInterface } from '../interfaces/interfaces'
import Label from "../components/Label";
import Profile from "../components/Profile";
import SideBarPopup from "../components/popups/SidebarPopup";
import { Header } from "../components";


export default function Home() {
    // const bellButton : ButtonInterface = {
    // 	text: 'Notifs',
    // 	style: 'outline',
    // }
    // const profileButton : ButtonInterface = {
    // 	text: 'Profil',
    // 	style: 'fill',
    // }
    //   let balise;
      
    // balise = <body className="bg-background_grey px-xxxl">
    // 			<Header></Header>
    // 			<h1 className="text-big font-sans font-bold text-white">Mes bâtiments</h1>
    // 		</body>;
	

  const buttonPlein : ButtonInterface = {
    text: 'Satoshi',
    style: 'fill',
  }
  const buttonVide : ButtonInterface = {
    text: 'abcdef',
    style: 'outline',
  }
  const test : LabelInterface = {
    text: 'label',
    style: 'outline',
    label: 'test',
  }

  const test2 : ProfileInterface = {
    size: 'small',
    picture_link: undefined
  }

  return (
    <>
      <Header></Header>
      <SideBarPopup />
      <Button props={buttonPlein}/>
      <Button props={buttonVide}/>
      <Label props={test}/>
      <Profile props={test2}/>
    </>  
  );

}
