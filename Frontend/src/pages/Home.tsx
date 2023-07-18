import React from "react";
import { SubHeader } from "components";
import { SubHeaderInterface } from "interfaces";
import { Link } from "react-router-dom";



export default function Home() {
    const subHeaderProps : SubHeaderInterface = 
	{
		text_settings : "Paramètres généraux",
		text_add : "Ajouter bâtiment",
		title_1 : "Mes bâtiments",
		title_path_1 : "",
		title_2 : "",
		title_path_2 : "",
		title_3 : "",
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
