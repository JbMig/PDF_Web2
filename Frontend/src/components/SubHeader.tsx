import React, { Fragment } from "react";
import { Button } from "components";
import { ButtonInterface, SubHeaderInterface } from "interfaces";

export default function SubHeader({ props }: { props: SubHeaderInterface }) {
  const settingsButton: ButtonInterface = {
    text: props.text_settings,
    style: "outline",
  };

  const addButton: ButtonInterface = {
    text: props.text_add,
    style: "fill",
  };

  let balise;

  if (props.doWeShowSettingsButton) {
    balise = (
      <div className="flex bg-background px-base py-sm">
        <div className="flex-1">
          <span className="font-sans self-center text-big font-bold text-white hover:text-main_yellow">
            {props.text_title}
          </span>
        </div>
        <div className="flex flex-row space-x-xxl self-center">
          <Button props={settingsButton} />
          <Button props={addButton} />
        </div>
      </div>
    );
  } else {
    balise = (
      <div className="flex bg-background px-base py-sm">
        <div className="flex-1">
          <span className="font-sans self-center text-big font-bold text-white hover:text-main_yellow">
            {props.text_title}
          </span>
        </div>
        <div className="flex flex-row space-x-xxl self-center">
          <Button props={addButton} />
        </div>
      </div>
    );
  }

  return <Fragment>{balise}</Fragment>;
}
