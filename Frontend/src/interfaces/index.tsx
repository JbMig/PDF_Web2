interface State {
    isTrue: boolean;
    toggle: () => void
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
    doWeShowSettingsButton : boolean,
	text_settings : string,
	text_add : string,
	text_title : string
}

interface ProfileInterface {
    size: string;
    picture_link: string | undefined
}

interface RoomCardInterface {
    room : string;
    nb_sensor : number;
    sensor_list: any ;
    number_bg : number;
}


export type {
    State,
    ButtonInterface,
    LabelInterface,
    ProfileInterface,
	SubHeaderInterface,
    RoomCardInterface,
}