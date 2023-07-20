import { InputInterface } from "interfaces";
import React, { useState } from "react";



export default function Input({type,label,placeholder,name,value,required,onChange}: InputInterface) {

  if (type === "password" || type === "text" || type === "email") {

    return (
      <label className={"font-satoshi text-base font-bold text-white"}>
        {label}
        <input className={"mt-[5px] w-full rounded-md border-2 border-gray bg-white p-sm font-normal text-black"}
        type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required={required}/>
      </label>
    );

  } else if (type === "checkbox") {

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!checked);
      // onChange({
      //   target: {
      //     name: name,
      //     value: (!checked).toString(),
      //   },
      // });
    };

    return (
      <label className="flex select-none items-center gap-[8px] font-satoshi text-base font-bold text-white">
        <input
          type={type}
          className="grid h-[16px] w-[16px] cursor-pointer select-none appearance-none 
          place-content-center rounded-[4px] border-[2px] border-gray bg-white checked:border-0 
          checked:before:h-[11px] checked:before:w-[11px] checked:before:rounded-[2px] checked:before:bg-black"
          
          name={name} checked={checked} value={value} onChange={handleCheckboxChange} required={required}
        />
        {label}
      </label>
    );

  }

}
