import React, { Fragment } from "react";
import { ChangeSettingsPopupInterface, SensorInterface } from "interfaces";
import ChangeSettings from "./Popups/ChangeSettings";



export default function Sensor({ props }: { props: SensorInterface }) {

    function sensorAlert() {
        if (props.alert == true) {
            let alertMessage = "Problème détecté"
            return alertMessage;
        }
    }

    let settings = props.settings;

    const ChangeSetting : ChangeSettingsPopupInterface = 
	{
        value : settings,
    };

    function sensorData() {
        if (props.data != null) {
            return (
                <div>
                    <p className="text-gray text-base font-bold">data : {props.data}</p>
                    {/* faire lien vers pop up pour modifier settings */}
                    <p className="text-gray text-base font-bold">settings : <span className="text-main_yellow hover:underline"><ChangeSettings props={ChangeSetting}/></span> </p>
                </div>
            ) ;
        }
    }

    let balise;

    balise = (
        <div className="bg-gray_border px-xl py-md rounded-xl mb-lg">
            <div className="flex ">

                <p className="text-medium text-white flex-1 font-bold">{props.sensor_name}</p>
                <p className="text-base text-red self-center font-bold">{sensorAlert()}</p>
                
            </div>
            {sensorData()}
        </div>
    );

    return (
        <Fragment>  
            {balise}
        </Fragment>
    );

}
