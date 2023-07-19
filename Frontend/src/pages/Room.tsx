import React, { Fragment } from "react";
import { SubHeaderInterface } from "interfaces";
import { SubHeader } from "components";
import { Link } from "react-router-dom";

export default function Room() {
  const subHeaderProps: SubHeaderInterface = {
    text_settings: "",
    text_add: "Ajouter capteur",
    title_1: "Nom du bâtiment",
    title_path_1: "/Building",
    title_2: "Nom de la pièce",
    title_path_2: "",
    title_3: "",
  };

  let balise;

  balise = (
    <section className="bg-background">
      <SubHeader props={subHeaderProps} />
      <nav>
        <ul>
          <li>
            <Link to="/Sensor" className="font-sans font-bold text-white">
              Test page Capteur
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );

  return <Fragment>{balise}</Fragment>;
}
