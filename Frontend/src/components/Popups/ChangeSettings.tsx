import { ChangeSettingsPopupInterface, InputInterface } from 'interfaces/index';
import React, { Fragment } from 'react';
// import Input from "components/Input";

export default function ChangeSettings({
  props,
}: {
  props: ChangeSettingsPopupInterface;
}) {
  // const { register, handleSubmit } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = data => {

  //   fetch('http://localhost:5432/#create_refund', {
  //     method: 'POST',
  //     mode: 'cors',
  //   })
  //     .then(data => data.text())
  //     .then(json => console.log(json))
  // }

  // const InputSettings : InputInterface =
  // {
  //     type: "number",
  //     name: "changeSettings",
  //     placeholder: "Enter new value",
  //     value: "",
  //     onChange:
  // };

  let balise;

  balise = (
    <>
      <a href="#change_settings">{props.value}</a>
      <div className="modal" id="change_settings">
        <div className="modal-box bg-gray_border">
          <div className="flex">
            <p className="text-xl mb-md flex-1 font-bold text-white">
              Change settings
            </p>
            <a href="" className="font-bold text-white">
              ✕
            </a>
          </div>
          <form
            className="my-5 form-control"
            // onSubmit={handleSubmit(onSubmit)}
          >
            {/* <label className="label label-text font-normal text-white">New value</label> */}
            {/* <Input props={InputSettings} />  */}
            <input
              type="number"
              min="0"
              max="30"
              placeholder="Enter new value"
              className="input"
            />
          </form>
        </div>
      </div>
    </>
  );

  return <Fragment>{balise}</Fragment>;
}
