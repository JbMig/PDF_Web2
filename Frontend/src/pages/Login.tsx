import React from "react";
// @ts-ignore
import logo from "images/logo-test.svg";

export default function Login() {
  return (
    <main>
      <div className={"flex h-screen flex-col items-center justify-center"}>
        <img src={logo} alt="" />
        <h1>Connectez-vous à votre compte</h1>
        <p>Bon retour ! Veuillez saisir vos coordonnées.</p>
      </div>
    </main>
  );
}
