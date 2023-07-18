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

interface SubHeaderInterface {
  doWeShowSettingsButton: boolean;
  text_settings: string;
  text_add: string;
  text_title: string;
}

interface ProfileInterface {
  size: string;
  picture_link: string | undefined;
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


export type {
  State,
  ButtonInterface,
  LabelInterface,
  ProfileInterface,
  SubHeaderInterface,
  InputInterface,
	NotificationsInterface
};