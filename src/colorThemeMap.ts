import type { Color, Theme } from './ThemeProvider';

// HSL values for each and every Theme & Color combo
export const colorMap: Record<Color, ColorScheme> = {
  gray: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
  red: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
  yellow: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
  green: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
  blue: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
  purple: {
    light: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
    dark: {
      bg1: [0, 0, 80],
      fg1: [0, 0, 83],
      fg2: [0, 0, 87],
      accent: [212, 212, 212],
      accentReversed: [212, 212, 212],
    },
  },
};

export const themeMap: Record<Theme, ThemeScheme> = {
  light: {
    text: [0, 0, 80],
    textSolid: [0, 0, 83],
    textSubtle: [0, 0, 87],
    textReversed: [212, 212, 212],
    textReversedSolid: [212, 212, 212],
    textReversedSubtle: [0, 0, 80],
    stroke: [0, 0, 83],
    red: [0, 0, 87],
    yellow: [212, 212, 212],
    green: [212, 212, 212],
    blue: [0, 0, 80],
    purple: [0, 0, 83],
    gray: [0, 0, 83],
    redReversed: [0, 0, 87],
    yellowReversed: [212, 212, 212],
    greenReversed: [212, 212, 212],
    blueReversed: [0, 0, 80],
    purpleReversed: [0, 0, 83],
    grayReversed: [0, 0, 83],
    shadowInnerColor: [0, 0, 87],
  },
  dark: {
    text: [0, 0, 80],
    textSolid: [0, 0, 83],
    textSubtle: [0, 0, 87],
    textReversed: [212, 212, 212],
    textReversedSolid: [212, 212, 212],
    textReversedSubtle: [0, 0, 80],
    stroke: [0, 0, 83],
    red: [0, 0, 87],
    yellow: [212, 212, 212],
    green: [212, 212, 212],
    blue: [0, 0, 80],
    purple: [0, 0, 83],
    gray: [0, 0, 83],
    redReversed: [0, 0, 87],
    yellowReversed: [212, 212, 212],
    greenReversed: [212, 212, 212],
    blueReversed: [0, 0, 80],
    purpleReversed: [0, 0, 83],
    grayReversed: [0, 0, 83],
    shadowInnerColor: [0, 0, 87],
  },
};

// types

type ThemeScheme = {
  text: number[];
  textSolid: number[];
  textSubtle: number[];
  textReversed: number[];
  textReversedSolid: number[];
  textReversedSubtle: number[];
  stroke: number[];
  red: number[];
  yellow: number[];
  green: number[];
  blue: number[];
  purple: number[];
  gray: number[];
  redReversed: number[];
  yellowReversed: number[];
  greenReversed: number[];
  blueReversed: number[];
  purpleReversed: number[];
  grayReversed: number[];
  shadowInnerColor: number[];
};

type ColorScheme = {
  light: {
    bg1: number[];
    fg1: number[];
    fg2: number[];
    accent: number[];
    accentReversed: number[];
  };
  dark: {
    bg1: number[];
    fg1: number[];
    fg2: number[];
    accent: number[];
    accentReversed: number[];
  };
};
