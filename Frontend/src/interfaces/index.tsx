import React from "react";

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
  title_path_2: string;
  title_3: string;
}

interface InputInterface {
  type: string;
  label: string;
  name: string;
  value: string | number;
  onChange: (event: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
}

interface NotificationsInterface {
  open: boolean;
}

interface RoomCardInterface {
  room: string;
  nb_sensor: number;
  sensor_list: any;
  number_bg: number;
}

export type {
  State,
  ButtonInterface,
  LabelInterface,
  ProfileInterface,
  SubHeaderInterface,
  RoomCardInterface,
  InputInterface,
  NotificationsInterface,
};
