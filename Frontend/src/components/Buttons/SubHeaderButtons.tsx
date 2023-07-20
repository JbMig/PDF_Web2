import React, { Fragment } from 'react';
import { Button } from 'components';
import { ButtonInterface, SubHeaderButtonsInterface } from 'interfaces';

export default function SubHeaderButtons({
  props,
}: {
  props: SubHeaderButtonsInterface;
}) {
  let balise;

  if (props.text_settings !== '' || props.text_add !== '') {
    let buttons;
    if (props.text_settings !== '') {
      const settingsButton: ButtonInterface = {
        text: props.text_settings,
        style: 'outline',
      };
      if (props.text_add !== '') {
        const addButton: ButtonInterface = {
          text: props.text_add,
          style: 'fill',
        };
        buttons = (
          <div className="flex flex-row space-x-xxl self-center">
            <Button props={settingsButton} />
            <Button props={addButton} />
          </div>
        );
      } else {
        buttons = (
          <div className="flex flex-row space-x-xxl self-center">
            <Button props={settingsButton} />
          </div>
        );
      }
    } else {
      if (props.text_add !== '') {
        const addButton: ButtonInterface = {
          text: props.text_add,
          style: 'fill',
        };
        buttons = (
          <div className="flex flex-row space-x-xxl self-center">
            <Button props={addButton} />
          </div>
        );
      } else {
        buttons = <></>;
      }
    }
    balise = <>{buttons}</>;
  } else {
    balise = <></>;
  }

  return <Fragment>{balise}</Fragment>;
}
