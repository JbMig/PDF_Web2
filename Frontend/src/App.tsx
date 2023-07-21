import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  NoMatch,
  Building,
  Login,
  Register,
  Room,
  Profile,
} from 'pages';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'*'} element={<NoMatch />} />
        <Route path={'/Building/:id'} element={<Building />} />
        <Route path={'/Room/:id'} element={<Room />} />
      </Route>
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Routes>
  );
}
