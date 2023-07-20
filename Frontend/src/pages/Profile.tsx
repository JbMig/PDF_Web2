import React, { useState } from 'react';
import { Button, Input, Profile } from 'components';
import { ProfileInterface, ButtonInterface } from 'interfaces';
// @ts-ignore
import img from 'images/avatar.jpg';

export default function ProfilePage() {
  const [avatar, setAvatar] = useState(img);

  const ProfileInterface: ProfileInterface = {
    size: 'profile_page',
    picture_link: avatar,
    name: 'John Doe',
    email: 'test@test.com',
  };
  const { name, email } = ProfileInterface;
  const imgFile: ProfileInterface = {
    size: 'small',
    picture_link: avatar,
  };

  const cancel: ButtonInterface = {
    text: 'Annuler',
    style: 'outline',
  };
  const save: ButtonInterface = {
    text: 'Sauvegarder',
    style: 'fill',
  };
  const disconnect: ButtonInterface = {
    text: 'Déconnexion',
    style: 'outline',
  };
  const delete_account: ButtonInterface = {
    text: 'Supprimer le compte',
    style: 'delete',
  };

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
    newPassword: '',
    newPasswordConfirm: '',
    img: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      setAvatar(URL.createObjectURL(files[0]));
      // TODO: add file to formData
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  // TODO: add autocomplete
  return (
    <main className={'bg-background px-base py-sm_profile'}>
      <div className={'flex justify-between max-lg:flex-col max-lg:space-y-lg'}>
        <div className={'flex items-center space-x-lg '}>
          <Profile props={ProfileInterface} />
          <div>
            <h1 className={'font-satoshi text-big font-medium text-white'}>
              {name}
            </h1>
            <p className={'font-satoshi text-base text-gray'}>{email}</p>
          </div>
        </div>
        <div className={'flex items-center space-x-md'}>
          <Button props={cancel} />
          <Button props={save} />
        </div>
      </div>
      <form
        className={'m-auto mt-xl flex w-1/2 flex-col space-y-md max-lg:w-full'}
      >
        <Input
          label={'Nom'}
          placeholder={'Entrez votre nom'}
          name={'name'}
          value={formData.name}
          type={'text'}
          onChange={handleChange}
          required
          autoComplete={'name'}
        />
        <span className={'h-[1px] bg-gray'}></span>
        <Input
          label={'Email'}
          placeholder={'Entrez votre email'}
          name={'mail'}
          value={formData.mail}
          type={'email'}
          onChange={handleChange}
          required
          autoComplete={'mail'}
        />
        <span className={'h-[1px] bg-gray'}></span>
        <span
          className={
            'space-lg flex flex-wrap justify-between space-y-md [&>*]:w-full [&>*]:max-w-[48%] max-md:[&>*]:max-w-[100%]'
          }
        >
          <Input
            label={'Mot de passe'}
            placeholder={'••••••••'}
            name={'password'}
            value={formData.password}
            type={'password'}
            onChange={handleChange}
            required
          />
          <span></span>
          <Input
            label={'Nouveau mot de passe'}
            placeholder={'••••••••'}
            name={'newPassword'}
            value={formData.newPassword}
            type={'password'}
            onChange={handleChange}
            required
          />
          <Input
            label={'Répéter le mot de passe'}
            placeholder={'••••••••'}
            name={'newPasswordConfirm'}
            value={formData.newPasswordConfirm}
            type={'password'}
            onChange={handleChange}
            required
          />
        </span>
        <span className={'h-[1px] bg-gray'}></span>
        <span className={'flex space-x-lg [&>*]:self-start'}>
          <Profile props={imgFile} />
          <label
            className={
              'relative rounded-md border-2 border-white px-xxl py-lg text-center font-satoshi text-base text-white'
            }
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <span className={'text-main_yellow'}>Cliquez pour télécharger</span>{' '}
            ou faites glisser et déposez. <br />
            SVG, PNG, JPG
            <input
              type="file"
              name="img"
              className={'hidden'}
              value={formData.img}
              accept={'image/*'}
              onChange={event => {
                const files = event.target.files;
                if (files) {
                  setAvatar(URL.createObjectURL(files[0]));
                }
                // TODO: add file to formData correctly
                handleChange(event);
              }}
            />
          </label>
        </span>
        <span className={'h-[1px] bg-gray'}></span>
        <div className={'flex items-center space-x-md self-end'}>
          <Button props={cancel} />
          <Button props={save} />
        </div>
      </form>
      <div
        className={
          'm-auto mt-xl w-1/2 flex-wrap space-y-md max-lg:w-full [&>*]:w-full'
        }
      >
        <Button props={disconnect} />
        <Button props={delete_account} />
      </div>
    </main>
  );
}
