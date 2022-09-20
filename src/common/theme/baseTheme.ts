// #region Global Imports
import { DefaultTheme } from 'styled-components';
type TColors = {
  dark0: string;
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
  dark5: string;
  dark6: string;
  dark7: string;
  dark8: string;
  dark9: string;
  gray0: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;

  red0: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;

  pink0: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;

  grape0: string;
  grape1: string;
  grape2: string;
  grape3: string;
  grape4: string;
  grape5: string;
  grape6: string;
  grape7: string;
  grape8: string;
  grape9: string;

  violet0: string;
  violet1: string;
  violet2: string;
  violet3: string;
  violet4: string;
  violet5: string;
  violet6: string;
  violet7: string;
  violet8: string;
  violet9: string;

  indigo0: string;
  indigo1: string;
  indigo2: string;
  indigo3: string;
  indigo4: string;
  indigo5: string;
  indigo6: string;
  indigo7: string;
  indigo8: string;
  indigo9: string;

  blue0: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;

  cyan0: string;
  cyan1: string;
  cyan2: string;
  cyan3: string;
  cyan4: string;
  cyan5: string;
  cyan6: string;
  cyan7: string;
  cyan8: string;
  cyan9: string;

  teal0: string;
  teal1: string;
  teal2: string;
  teal3: string;
  teal4: string;
  teal5: string;
  teal6: string;
  teal7: string;
  teal8: string;
  teal9: string;

  green0: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;

  lime0: string;
  lime1: string;
  lime2: string;
  lime3: string;
  lime4: string;
  lime5: string;
  lime6: string;
  lime7: string;
  lime8: string;
  lime9: string;

  yellow0: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;

  orange0: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;

  black: string;
  white: string;
  themeRed: string;
  royalGold: string;
  blue: string;
  goldenBrown: string;
  niceBlue: string;

  transparent_black1: string;
  transparent_black2: string;
  transparent_black3: string;
  transparent_black4: string;
  transparent_black5: string;
  transparent_black6: string;
  transparent_black7: string;
  transparent_black8: string;
  transparent_black9: string;

  transparent_white1: string;
  transparent_white2: string;
  transparent_white3: string;
  transparent_white4: string;
  transparent_white5: string;
  transparent_white6: string;
  transparent_white7: string;
  transparent_white8: string;
  transparent_white9: string;
};

export const colors: TColors = {
  dark0: '#C1C2C5',
  dark1: '#A6A7AB',
  dark2: '#909296',
  dark3: '#5C5F66',
  dark4: '#373A40',
  dark5: '#2C2E33',
  dark6: '#25262B',
  dark7: '#1A1B1E',
  dark8: '#141517',
  dark9: '#101113',

  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529',

  red0: '#FFF5F5',
  red1: '#FFE3E3',
  red2: '#FFC9C9',
  red3: '#FFA8A8',
  red4: '#FF8787',
  red5: '#FF6B6B',
  red6: '#FA5252',
  red7: '#F03E3E',
  red8: '#E03131',
  red9: '#C92A2A',

  pink0: '#FFF0F6',
  pink1: '#FFDEEB',
  pink2: '#FCC2D7',
  pink3: '#FAA2C1',
  pink4: '#F783AC',
  pink5: '#F06595',
  pink6: '#E64980',
  pink7: '#D6336C',
  pink8: '#C2255C',
  pink9: '#A61E4D',

  grape0: '#F8F0FC',
  grape1: '#F3D9FA',
  grape2: '#EEBEFA',
  grape3: '#E599F7',
  grape4: '#DA77F2',
  grape5: '#CC5DE8',
  grape6: '#BE4BDB',
  grape7: '#AE3EC9',
  grape8: '#9C36B5',
  grape9: '#862E9C',

  violet0: '#F3F0FF',
  violet1: '#E5DBFF',
  violet2: '#D0BFFF',
  violet3: '#B197FC',
  violet4: '#9775FA',
  violet5: '#845EF7',
  violet6: '#7950F2',
  violet7: '#7048E8',
  violet8: '#6741D9',
  violet9: '#5F3DC4',

  indigo0: '#EDF2FF',
  indigo1: '#DBE4FF',
  indigo2: '#BAC8FF',
  indigo3: '#91A7FF',
  indigo4: '#748FFC',
  indigo5: '#5C7CFA',
  indigo6: '#4C6EF5',
  indigo7: '#4263EB',
  indigo8: '#3B5BDB',
  indigo9: '#364FC7',

  blue0: '#E7F5FF',
  blue1: '#D0EBFF',
  blue2: '#A5D8FF',
  blue3: '#74C0FC',
  blue4: '#4DABF7',
  blue5: '#339AF0',
  blue6: '#228BE6',
  blue7: '#1C7ED6',
  blue8: '#1971C2',
  blue9: '#1864AB',

  cyan0: '#E3FAFC',
  cyan1: '#C5F6FA',
  cyan2: '#99E9F2',
  cyan3: '#66D9E8',
  cyan4: '#3BC9DB',
  cyan5: '#22B8CF',
  cyan6: '#15AABF',
  cyan7: '#1098AD',
  cyan8: '#0C8599',
  cyan9: '#0B7285',

  teal0: '#E6FCF5',
  teal1: '#C3FAE8',
  teal2: '#96F2D7',
  teal3: '#63E6BE',
  teal4: '#38D9A9',
  teal5: '#20C997',
  teal6: '#12B886',
  teal7: '#0CA678',
  teal8: '#099268',
  teal9: '#087F5B',

  green0: '#EBFBEE',
  green1: '#D3F9D8',
  green2: '#B2F2BB',
  green3: '#8CE99A',
  green4: '#69DB7C',
  green5: '#51CF66',
  green6: '#40C057',
  green7: '#37B24D',
  green8: '#2F9E44',
  green9: '#2B8A3E',

  lime0: '#F4FCE3',
  lime1: '#E9FAC8',
  lime2: '#D8F5A2',
  lime3: '#C0EB75',
  lime4: '#A9E34B',
  lime5: '#94D82D',
  lime6: '#82C91E',
  lime7: '#74B816',
  lime8: '#66A80F',
  lime9: '#5C940D',

  yellow0: '#FFF9DB',
  yellow1: '#FFF3BF',
  yellow2: '#FFEC99',
  yellow3: '#FFE066',
  yellow4: '#FFD43B',
  yellow5: '#FCC419',
  yellow6: '#FAB005',
  yellow7: '#F59F00',
  yellow8: '#F08C00',
  yellow9: '#E67700',

  orange0: '#FFF4E6',
  orange1: '#FFE8CC',
  orange2: '#FFD8A8',
  orange3: '#FFC078',
  orange4: '#FFA94D',
  orange5: '#FF922B',
  orange6: '#FD7E14',
  orange7: '#F76707',
  orange8: '#E8590C',
  orange9: '#D9480F',

  themeRed: '#ff6239',
  black: '#000',
  white: '#fff',
  royalGold: '#f5bd02',
  blue: '#20639b',
  goldenBrown: '#996515',
  niceBlue: 'rgb(43, 88, 118)',

  transparent_black1: 'rgba(0,0,0,0.1)',
  transparent_black2: 'rgba(0,0,0,0.2)',
  transparent_black3: 'rgba(0,0,0,0.3)',
  transparent_black4: 'rgba(0,0,0,0.4)',
  transparent_black5: 'rgba(0,0,0,0.5)',
  transparent_black6: 'rgba(0,0,0,0.6)',
  transparent_black7: 'rgba(0,0,0,0.7)',
  transparent_black8: 'rgba(0,0,0,0.8)',
  transparent_black9: 'rgba(0,0,0,0.9)',

  transparent_white1: 'rgba(255,255,255,0.1)',
  transparent_white2: 'rgba(255,255,255,0.2)',
  transparent_white3: 'rgba(255,255,255,0.3)',
  transparent_white4: 'rgba(255,255,255,0.4)',
  transparent_white5: 'rgba(255,255,255,0.5)',
  transparent_white6: 'rgba(255,255,255,0.6)',
  transparent_white7: 'rgba(255,255,255,0.7)',
  transparent_white8: 'rgba(255,255,255,0.8)',
  transparent_white9: 'rgba(255,255,255,0.9)',
};

export const themeDark: DefaultTheme = {
  meta: {
    name: 'dark',
  },
  colors: {},
};

export const themeLight: DefaultTheme = {
  meta: {
    name: 'light',
  },
  colors: {},
};

export const themeNight: DefaultTheme = {
  meta: {
    name: 'night',
  },
  colors: {},
};

export const widths = {
  maxMobile: 576, // (for phones)
  minTablet: 576, // (for tablet)
  minTabletLC: 769, // (landscape of tablet)
  minDesktopSM: 992, // (for small Laptop)
  minDesktopLG: 1201, // (for large laptop)
  min4K: 1441, // (for 4k)
};

export const devices = {
  maxMobile: `only screen and (max-width: ${widths.maxMobile}px)`, // (for phones)
  minTablet: `only screen and (min-width: ${widths.minTablet}px)`, // (for tablet)
  minTabletLC: `only screen and (min-width: ${widths.minTabletLC}px)`, // (landscape of tablet)
  minDesktopSM: `only screen and (min-width: ${widths.minDesktopSM}px)`, // (for small Laptop)
  minDesktopLG: `only screen and (min-width: ${widths.minDesktopLG}px)`, // (for large laptop)
  min4K: `only screen and (min-width: ${widths.min4K}px)`, // (for 4k)
};

export const misc = {
  menuHeight: 60,
  fullWidth: widths.minDesktopLG - 1,
};

const theme = {
  colors,
  devices,
  widths,
  misc,
};

export type TNoonTheme = typeof theme;

export default theme;
