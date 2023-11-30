export enum NightMode {
  ON = "ON",
  OFF = "OFF",
}

export enum PictureBackground {
  ON = "ON",
  OFF = "OFF",
}


export enum Theme {
  THEME1 = "theme-1",
  THEME2 = "theme-2",
  THEME3 = "theme-3",
  THEME4 = "theme-4",
  THEME5 = "theme-5",
}

export interface ThemeObj {
  name: string;
  id: Theme;
  color1: string;
  color2: string;
  color3: string;
}

export const availableThemes: ThemeObj[] = [
  {
    id: Theme.THEME1,
    name: "blue",
    color1: "var(--theme-1-color-14)",
    color2: "var(--theme-1-color-2)",
    color3: "var(--theme-1-color-22)",
  },
  {
    id: Theme.THEME2,
    name: "red",
    color1: "var(--theme-2-color-14)",
    color2: "var(--theme-2-color-2)",
    color3: "var(--theme-2-color-22)",
  },
  {
    id: Theme.THEME3,
    name: "green",
    color1: "var(--theme-3-color-14)",
    color2: "var(--theme-3-color-2)",
    color3: "var(--theme-3-color-22)",
  },
  {
    id: Theme.THEME4,
    name: "pink",
    color1: "var(--theme-4-color-14)",
    color2: "var(--theme-4-color-2)",
    color3: "var(--theme-4-color-22)",
  },
  {
    id: Theme.THEME5,
    name: "ginger",
    color1: "var(--theme-5-color-14)",
    color2: "var(--theme-5-color-2)",
    color3: "var(--theme-5-color-22)",
  },
];
