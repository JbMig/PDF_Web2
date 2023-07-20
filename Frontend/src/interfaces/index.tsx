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
interface SubHeaderTitleInterface {
	title_1 : string,
	title_path_1 : string,
	title_2 : string,
	title_path_2 : string,
	title_3 : string,
}
interface SubHeaderButtonsInterface {
  	text_settings : string,
	text_add : string,
}


interface InputInterface {
  type: string;
  label?: string;
  name: string;
  value: string | number;
  onChange?: (event: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
}

interface NotificationsInterface {
  open: boolean;
}

interface BuildingCardInterface {
  building : string;
  nb_rooms : number;
  rooms_list: Array<string> ;
  number_bg : number;
}

interface RoomCardInterface {
  room : string;
  nb_sensor : number;
  sensor_list: Array<string> ;
  number_bg : number;
}

interface SensorCardInterface {
	sensor_name : string;
  	data: string ;
	settings: string;
  	number_bg : number;
	alert : boolean;
}

interface ChangeSettingsPopupInterface {
  // id : number;
  value : any;  
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
  ChangeSettingsPopupInterface
}
