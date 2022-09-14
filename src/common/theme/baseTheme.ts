// #region Global Imports
import { DefaultTheme } from 'styled-components';

export const themeDark: DefaultTheme = {
  colors: {},
  meta: {
    name: 'dark',
  },
};

export const themeLight: DefaultTheme = {
  colors: {},
  meta: {
    name: 'light',
  },
};

export const themeNight: DefaultTheme = {
  colors: {},
  meta: {
    name: 'night',
  },
};

export const widths = {
  maxMobile: 576,

  // (for large laptop)
  min4K: 1441,

  // (for small Laptop)
  minDesktopLG: 1201,

  // (landscape of tablet)
  minDesktopSM: 992,

  // (for phones)
  minTablet: 576,

  // (for tablet)
  minTabletLC: 769, // (for 4k)
};

export const devices = {
  maxMobile: `only screen and (max-width: ${widths.maxMobile}px)`,

  // (for large laptop)
  min4K: `only screen and (min-width: ${widths.min4K}px)`,

  // (for small Laptop)
  minDesktopLG: `only screen and (min-width: ${widths.minDesktopLG}px)`,

  // (landscape of tablet)
  minDesktopSM: `only screen and (min-width: ${widths.minDesktopSM}px)`,

  // (for phones)
  minTablet: `only screen and (min-width: ${widths.minTablet}px)`,

  // (for tablet)
  minTabletLC: `only screen and (min-width: ${widths.minTabletLC}px)`, // (for 4k)
};

type TColors = {
  accent: string;
  light_accent1: string;
  light_accent2: string;
  activeText: string;
  lightBackground: string;
  backgroundColor: string;
  bg: string;
  black: string;
  blue: string;
  blue_dark: string;
  dark_blue: string;
  dark_gray: string;
  dark_green: string;
  dark_red: string;
  disabledText: string;
  goldenBrown: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  green1: string;
  green2: string;
  light_gray: string;
  light_gray2: string;
  light_green: string;
  navbarBackground: string;
  orange: string;
  red1: string;
  red2: string;
  red3: string;
  royalGold: string;
  text: string;
  white: string;
  yellow: string;
  davinci_light_yellow: string;
  davinci_dark_yellow: string;
  whiteSmoke1: string;
  whiteSmoke2: string;
  whiteSmoke3: string;
  burlyWood: string;
};

export const colors: TColors = {
  accent: 'rgba(28, 79, 141, 1)',
  activeText: '#08090a',
  backgroundColor: '#eef0f1',
  bg: '#eef0f1',
  black: '#08090a',
  blue: '#20639b',
  blue_dark: '#3b49df',
  burlyWood: '#d5bf84',
  dark_blue: '#173f5f',
  dark_gray: '#b5bdc4',
  dark_green: '#247209',
  dark_red: '#800500',
  davinci_dark_yellow: '#d9d3ca',
  davinci_light_yellow: '#f3f2ef',
  disabledText: '#d3d3d3',

  goldenBrown: '#996515',

  gray1: '#f3f3f3',

  gray2: '#dad8db',
  //
  gray3: '#b5bdc4',
  gray4: '#555555',
  green1: '#88d840',
  green2: '#3bdf72',
  lightBackground: '#f1f1f1',
  light_accent1: 'rgba(28, 79, 141, 0.05)',
  light_accent2: 'rgba(28, 79, 141, 0.5)',
  light_gray: '#f7f7f7',
  light_gray2: '#fafafa',
  light_green: '#67b826',
  navbarBackground: '#fff',

  orange: '#f77f00',

  red1: '#e10600',
  //
  red2: '#df3b3b',
  red3: '#d00',
  royalGold: '#f5bd02',
  text: '#08090a',
  white: '#fff',
  whiteSmoke1: '#f6f6f6',
  whiteSmoke2: '#f2f2f2',
  whiteSmoke3: '#f7f7f7',
  yellow: '#fcbf49',
};

export const misc = {
  fullWidth: widths.minDesktopLG - 1,
  menuHeight: 60,
};

const theme = {
  colors,
  devices,
  misc,
  widths,
};

export type TNoonTheme = typeof theme;

export default theme;
