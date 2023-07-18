import React from "react";
import { SubHeader } from "components";
import { SubHeaderInterface } from "interfaces";
import { Link } from "react-router-dom";

export default function Home() {
  const subHeaderProps: SubHeaderInterface = {
    doWeShowSettingsButton: true,
    text_settings: "Paramètres généraux",
    text_add: "Ajouter bâtiment",
    text_title: "Mes bâtiments",
  };

  return (
    <section className="bg-background">
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
}
