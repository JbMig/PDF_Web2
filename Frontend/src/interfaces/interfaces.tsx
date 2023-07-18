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
	text_settings : string,
	text_add : string,
	title_1 : string,
	title_path_1 : string,
	title_2 : string,
	title_path_2 : string,
	title_3 : string,
}

interface ProfileInterface {
    size: string;
    picture_link: string | undefined
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
	NotificationsInterface
}