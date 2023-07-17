interface State {
  isTrue: boolean;
  toggle: () => void;
}

interface ButtonInterface {
  text: string;
  style: string;
  icon: string | undefined;
}

export type { State, ButtonInterface };
