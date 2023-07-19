import React, { useState } from "react";
// @ts-ignore
import logo from "images/logo-test.svg";
import { Link } from "react-router-dom";
import { Input } from "components";

export default function Login() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
    remember: "false",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <main className={"grid min-h-screen place-content-center bg-background"}>
      <div
        className={
          "flex min-h-[550px] max-w-lg flex-col items-center px-md py-md"
        }
      >
        <img src={logo} alt="" className={"max-w-[48px] "} />
        <h1
          className={
            "max-w-sm text-center font-satoshi text-[30px] font-bold leading-tight text-white"
          }
        >
          Connectez-vous à votre compte
        </h1>
        <p
          className={
            "mt-sm text-center font-satoshi text-base font-normal leading-tight text-white"
          }
        >
          Bon retour ! Veuillez saisir vos coordonnées.
        </p>
        <form className={"mt-xl flex w-full flex-col space-y-md"}>
          <Input
            label={"Email"}
            placeholder={"Entrez votre email"}
            name={"mail"}
            value={formData.mail}
            type={"email"}
            onChange={handleChange}
            required
          />
          <Input
            label={"Mot de passe"}
            placeholder={"••••••••"}
            name={"password"}
            value={formData.password}
            type={"password"}
            onChange={handleChange}
            required
          />
          <span className={"flex justify-between max-sm:flex-col"}>
            <Input
              label={"Se souvenir de moi"}
              name={"remember"}
              value={formData.remember}
              type={"checkbox"}
              onChange={handleChange}
            />
            <a
              href="javascript:void(0)"
              className={
                "font-satoshi text-base font-bold text-main_yellow max-sm:mt-[5px]"
              }
            >
              Mot de passe oublié
            </a>
          </span>
          <input
            className={
              "w-full rounded-md bg-main_yellow p-sm font-satoshi text-base font-bold text-black"
            }
            type="submit"
            value={"Se connecter"}
          />
        </form>
        <p className={"mt-xl font-satoshi text-base font-normal text-white"}>
          Vous n'avez pas de compte ?{" "}
          <Link to="/register" className={"font-bold text-main_yellow"}>
            S'inscrire
          </Link>
        </p>
      </div>
    </main>
  );
}
