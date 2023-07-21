import React, { Fragment } from 'react';
import { ChangeSettingsPopupInterface, SensorCardInterface } from 'interfaces';
import ChangeSettings from '../Popups/ChangeSettings';

export default function SensorCard({ props }: { props: SensorCardInterface }) {
  function cardStyleClass() {
    let styleClass;
    if (props.number_bg === 1) {
      styleClass = 'rounded-xl bg-yellow_card text-black bg-150 bg-top p-lg';
    } else if (props.number_bg === 2) {
      styleClass = 'rounded-xl bg-galaxy_card text-white p-lg';
    } else {
      styleClass = 'rounded-xl bg-gray_card text-black bg-150 bg-top p-lg';
    }
    return styleClass;
  }

  function sensorAlert() {
    let alert_tag;
    if (props.alert) {
      alert_tag = (
        <p className="pt-lg text-base font-bold text-red">ALERTE DÉTECTÉE !</p>
      );
    } else {
      alert_tag = <></>;
    }
    return alert_tag;
  }

  let settings = props.settings;

  const ChangeSetting: ChangeSettingsPopupInterface = {
    value: settings,
  };

  function sensorData() {
    if (props.data != null) {
      if (props.settings !== '') {
        return (
          <div className="gap-sm border-t p-none">
            {sensorAlert()}
            <div className="grid grid-cols-2 gap-sm pt-lg">
              <p className="text-base font-medium">
                Valeur actuelle : {props.data}
              </p>
              <p className="text-base font-medium">
                Valeur cible :{' '}
                <span className="font-bold hover:underline">
                  <ChangeSettings props={ChangeSetting} />
                </span>{' '}
              </p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="grid grid-cols-2 gap-sm border-t p-none">
            {sensorAlert()}
            <div className="gap-sm pt-lg">
              <p className="text-base font-medium">{props.data}</p>
            </div>
          </div>
        );
      }
    }
  }

  let balise;

  balise = (
    <div className={cardStyleClass()}>
      <div className="text-xl mb-md font-medium">
        <p className="font-sans self-center text-medium font-bold">
          {props.sensor_name}
        </p>
      </div>
      {sensorData()}
    </div>
  );

  return <Fragment>{balise}</Fragment>;
}