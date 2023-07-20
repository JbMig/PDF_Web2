import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import img404 from "images/404.svg";

export default function NoMatch() {
  return (
    <div
      className={
        "mx-auto flex h-full max-w-[1440px] items-center justify-between px-base max-xl:flex-col-reverse max-xl:justify-center max-xl:pt-[50px] max-sm:justify-end max-sm:pt-[300px]"
      }
    >
      <div>
        <h2
          className={
            "mb-md font-satoshi text-base font-bold leading-tight text-main_yellow"
          }
        >
          erreur 404
        </h2>
        <h1
          className={
            "font-satoshi text-[60px] font-bold leading-tight text-white"
          }
        >
          Page introuvable. Oups !
        </h1>
        <div
          className={
            "mt-btn flex space-x-md max-sm:mt-xl max-sm:flex-col max-sm:space-x-none max-sm:space-y-md"
          }
        >
          <Link
            to="/"
            className={
              "text-md h-btn w-fit rounded-xl border-2 border-solid border-main_yellow bg-transparent px-lg py-sm font-bold uppercase uppercase text-main_yellow hover:border-main_yellow hover:bg-transparent"
            }
          >
            Retourner en arrière
          </Link>
          <Link
            to="/"
            className={
              "text-md h-btn w-fit rounded-xl border-2 border-solid border-border_yellow bg-main_yellow px-lg py-sm font-bold uppercase hover:border-border_yellow hover:bg-main_yellow"
            }
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
      <img src={img404} alt="" className={"max-xl:mb-btn max-sm:hidden"} />
    </div>
  );
}
