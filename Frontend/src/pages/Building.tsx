import React from "react";
import { SubHeaderInterface } from "interfaces";
import { SubHeader } from "components";

export default function Building() {
  const subHeaderProps: SubHeaderInterface = {
    doWeShowSettingsButton: false,
    text_settings: "",
    text_add: "Ajouter pièce",
    text_title: "Nom du bâtiment",
  };

  return (
    <section className="bg-background">
      <SubHeader props={subHeaderProps} />
    </section>
  );
}
