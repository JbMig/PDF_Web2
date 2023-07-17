import React from "react";
import { Button } from "components";
import { ButtonInterface } from "interfaces";

export default function Home() {
  const bellButton: ButtonInterface = {
    text: "Notifs",
    style: "outline",
    icon: undefined,
  };
  const profileButton: ButtonInterface = {
    text: "Profil",
    style: "fill",
    icon: undefined,
  };

  let balise;
  balise = (
    <body className="bg-background_grey px-xxxl">
      <h1 className="font-sans text-white text-big font-bold">Mes bâtiments</h1>
    </body>
  );
  return <>{balise}</>;
}
