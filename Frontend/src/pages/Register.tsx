import React, { useState } from 'react';
// @ts-ignore
import logo from 'images/logo-test.svg';
import { Link } from 'react-router-dom';
import { Input } from 'components';

export default function Register() {
  const [formData, setFormData] = useState({
    mail: '',
    password: '',
    remember: 'false',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <main className={'grid min-h-screen place-content-center bg-background'}>
      <div
        className={
          'flex min-h-[550px] max-w-lg flex-col items-center px-md py-md'
        }
      >
        <img src={logo} alt="" className={'max-w-[48px] '} />
        <h1
          className={
            'max-w-sm text-center font-satoshi text-[30px] font-bold leading-tight text-white'
          }
        >
          Créer un compte
        </h1>
        <p
          className={
            'font-normal mt-sm text-center font-satoshi text-base leading-tight text-white'
          }
        >
          Inscrivez-vous dès maintenant !
        </p>
        <form className={'mt-xl flex w-full flex-col space-y-md'}>
          <Input
            label={'Email'}
            placeholder={'Entrez votre email'}
            name={'mail'}
            value={formData.mail}
            type={'email'}
            onChange={handleChange}
            required
          />
          <Input
            label={'Mot de passe'}
            placeholder={'••••••••'}
            name={'password'}
            value={formData.password}
            type={'password'}
            onChange={handleChange}
            required
          />
          <input
            className={
              'w-full rounded-md bg-main_yellow p-sm font-satoshi text-base font-bold text-black'
            }
            type="submit"
            value={"S'inscrire"}
          />
        </form>
        <p className={'font-normal mt-xl font-satoshi text-base text-white'}>
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className={'font-bold text-main_yellow'}>
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  );
}
