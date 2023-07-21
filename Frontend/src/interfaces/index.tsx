import React from 'react';

interface State {
  isTrue: boolean;
  toggle: () => void;
}

interface LabelInterface {
  text: string;
  style: string;
  label: string;
}

interface ButtonInterface {
  text: string;
  style: string;
}

interface ProfileInterface {
  size: string;
  picture_link: string | undefined;
  name?: string;
  email?: string;
  // isTrue: boolean;
  // toggle: () => void;
}

interface LabelInterface {
  text: string;
  style: string;
  label: string;
}

interface ButtonInterface {
  text: string;
  style: string;
}

interface SubHeaderInterface {
  text_settings: string;
  text_add: string;
  title_1: string;
  title_path_1: string;
  title_2: string;
}
interface SubHeaderTitleInterface {
  title_1: string;
  title_path_1: string;
  title_2: string;
}
interface SubHeaderButtonsInterface {
  text_settings: string;
  text_add: string;
}

interface InputInterface {
  type: string;
  label?: string;
  name: string;
  value: string | number;
  onChange?: (event: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

interface NotificationsInterface {
  open: boolean;
}

interface BuildingCardInterface {
  building_name: string;
  nb_rooms: number;
  rooms_list: Array<string>;
  number_bg: number;
  building_id:string | undefined;
}

interface RoomCardInterface {
  room_name: string;
  nb_sensor: number;
  sensor_list: Array<string>;
  number_bg: number;
  room_id:string | undefined;
}

interface SensorCardInterface {
  sensor_name: string;
  data: string;
  settings: string;
  number_bg: number;
  alert: boolean;
}

interface ChangeSettingsPopupInterface {
  // id : number;
  value: any;
}
interface BodyInterface {
  id : string | undefined;
}

export type {
  State,
  ButtonInterface,
  LabelInterface,
  ProfileInterface,
  SubHeaderInterface,
  SubHeaderTitleInterface,
  SubHeaderButtonsInterface,
  BuildingCardInterface,
  RoomCardInterface,
  SensorCardInterface,
  InputInterface,
  NotificationsInterface,
  ChangeSettingsPopupInterface,
  BodyInterface,
};
