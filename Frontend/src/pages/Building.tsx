import React, { Fragment } from 'react';
import { SubHeaderInterface } from 'interfaces';
import { BuildingBody, SideBarPopup, SubHeader } from 'components';
import { Link } from 'react-router-dom';

export default function Building() {
  const subHeaderProps: SubHeaderInterface = {
    text_settings: '',
    text_add: 'Ajouter pièce',
    title_1: 'Nom du bâtiment',
    title_path_1: '',
    title_2: '',
  };

  let balise;

  balise = (
    <section className="bg-background">
      <SubHeader props={subHeaderProps} />
      <SideBarPopup />
      <BuildingBody />
    </section>
  );

  return <Fragment>{balise}</Fragment>;
}
