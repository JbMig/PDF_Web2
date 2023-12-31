import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={'bg-background'}>
        <Outlet />
      </main>
    </>
  );
}
