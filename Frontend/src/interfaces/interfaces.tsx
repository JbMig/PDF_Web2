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

interface ProfileInterface {
    size: string;
    picture_link: string | undefined
}


export type {
    State,
    ButtonInterface,
    LabelInterface,
    ProfileInterface
}