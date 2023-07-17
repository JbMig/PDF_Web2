import React, { Fragment } from "react";
import Button from "../components/Button";
import { ButtonInterface, LabelInterface, ProfileInterface } from '../interfaces/interfaces'
import Label from "../components/Label";
import Profile from "../components/Profile";
import SideBarPopup from "../components/popups/SidebarPopup";

export default function Home() {

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
      <h1>Home</h1>
      <SideBarPopup />
      <Button props={buttonPlein}/>
      <Button props={buttonVide}/>
      <Label props={test}/>
      <Profile props={test2}/>
    </>  
  );

}
