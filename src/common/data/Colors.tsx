/* eslint-disable sort-keys-fix/sort-keys-fix */
export type TColorNames = {
  [key: string]: {
    name: string;
    value: string;
    colorCode: string;
    fontColor: string;
  }[];
};

const darkColorCodes = {
  yellow: {
    50: { dark: { color: '#3A2503', font: '#fff' }, light: { color: '#FEF9F0', font: '#fff' } },
    100: { dark: { color: '#442B03', font: '#fff' }, light: { color: '#FEF5E7', font: '#fff' } },
    200: { dark: { color: '#583804', font: '#fff' }, light: { color: '#FDEFD8', font: '#fff' } },
    300: { dark: { color: '#704705', font: '#fff' }, light: { color: '#FCE7C5', font: '#fff' } },
    400: { dark: { color: '#845306', font: '#fff' }, light: { color: '#FBDBA7', font: '#fff' } },
    500: { dark: { color: '#A66908', font: '#fff' }, light: { color: '#F9CB80', font: '#fff' } },
    600: { dark: { color: '#F5A524', font: '#fff' }, light: { color: '#F5A524', font: '#fff' } },
    700: { dark: { color: '#F6AD37', font: '#fff' }, light: { color: '#B97509', font: '#fff' } },
    800: { dark: { color: '#F8C572', font: '#fff' }, light: { color: '#925D07', font: '#fff' } },
    900: { dark: { color: '#FEF7EC', font: '#fff' }, light: { color: '#4E3104', font: '#fff' } },
  },
  red: {
    50: { dark: { color: '#300313', font: '#fff' }, light: { color: '#FEF0F5', font: '#fff' } },
    100: { dark: { color: '#300313', font: '#fff' }, light: { color: '#FEE7EF', font: '#fff' } },
    200: { dark: { color: '#44041A', font: '#fff' }, light: { color: '#FDD8E5', font: '#fff' } },
    300: { dark: { color: '#5C0523', font: '#fff' }, light: { color: '#FCC5D8', font: '#fff' } },
    400: { dark: { color: '#6F062B', font: '#fff' }, light: { color: '#FAA8C5', font: '#fff' } },
    500: { dark: { color: '#910838', font: '#fff' }, light: { color: '#F881AB', font: '#fff' } },
    600: { dark: { color: '#F31260', font: '#fff' }, light: { color: '#F31260', font: '#fff' } },
    700: { dark: { color: '#F4256D', font: '#fff' }, light: { color: '#B80A47', font: '#fff' } },
    800: { dark: { color: '#F75F94', font: '#fff' }, light: { color: '#910838', font: '#fff' } },
    900: { dark: { color: '#FDD8E5', font: '#fff' }, light: { color: '#4E041E', font: '#fff' } },
  },
  pink: {
    50: { dark: { color: '#330025', font: '#fff' }, light: { color: '#FFF0FB', font: '#fff' } },
    100: { dark: { color: '#470033', font: '#fff' }, light: { color: '#FFE5F8', font: '#fff' } },
    200: { dark: { color: '#5C0042', font: '#fff' }, light: { color: '#FFD6F3', font: '#fff' } },
    300: { dark: { color: '#750054', font: '#fff' }, light: { color: '#FFC2EE', font: '#fff' } },
    400: { dark: { color: '#8A0063', font: '#fff' }, light: { color: '#FFA3E5', font: '#fff' } },
    500: { dark: { color: '#AD007C', font: '#fff' }, light: { color: '#FF7AD9', font: '#fff' } },
    600: { dark: { color: '#FF4ECD', font: '#fff' }, light: { color: '#FF4ECD', font: '#fff' } },
    700: { dark: { color: '#FF2EC4', font: '#fff' }, light: { color: '#D6009A', font: '#fff' } },
    800: { dark: { color: '#FF6BD5', font: '#fff' }, light: { color: '#B80084', font: '#fff' } },
    900: { dark: { color: '#FFEBF9', font: '#fff' }, light: { color: '#4D0037', font: '#fff' } },
  },
  purple: {
    50: { dark: { color: '#1F0A33', font: '#fff' }, light: { color: '#F7F2FD', font: '#fff' } },
    100: { dark: { color: '#240C3C', font: '#fff' }, light: { color: '#F1E8FB', font: '#fff' } },
    200: { dark: { color: '#2E0F4D', font: '#fff' }, light: { color: '#EADCF8', font: '#fff' } },
    300: { dark: { color: '#3B1362', font: '#fff' }, light: { color: '#E0CBF5', font: '#fff' } },
    400: { dark: { color: '#451773', font: '#fff' }, light: { color: '#D1B1F0', font: '#fff' } },
    500: { dark: { color: '#571D91', font: '#fff' }, light: { color: '#BC8EE9', font: '#fff' } },
    600: { dark: { color: '#7828C8', font: '#fff' }, light: { color: '#7828C8', font: '#fff' } },
    700: { dark: { color: '#9750DD', font: '#fff' }, light: { color: '#6622AA', font: '#fff' } },
    800: { dark: { color: '#B583E7', font: '#fff' }, light: { color: '#4D1980', font: '#fff' } },
    900: { dark: { color: '#F7ECFC', font: '#fff' }, light: { color: '#290E44', font: '#fff' } },
  },
  blue: {
    50: { dark: { color: '#10253E', font: '#fff' }, light: { color: '#EDF5FF', font: '#fff' } },
    100: { dark: { color: '#102C4C', font: '#fff' }, light: { color: '#E1EFFF', font: '#fff' } },
    200: { dark: { color: '#0F3158', font: '#fff' }, light: { color: '#CEE4FE', font: '#fff' } },
    300: { dark: { color: '#0D3868', font: '#fff' }, light: { color: '#B7D5F8', font: '#fff' } },
    400: { dark: { color: '#0A4281', font: '#fff' }, light: { color: '#96C1F2', font: '#fff' } },
    500: { dark: { color: '#0952A5', font: '#fff' }, light: { color: '#5EA2EF', font: '#fff' } },
    600: { dark: { color: '#0072F5', font: '#fff' }, light: { color: '#0072F5', font: '#fff' } },
    700: { dark: { color: '#3694FF', font: '#fff' }, light: { color: '#005FCC', font: '#fff' } },
    800: { dark: { color: '#3694FF', font: '#fff' }, light: { color: '#004799', font: '#fff' } },
    900: { dark: { color: '#EAF4FF', font: '#fff' }, light: { color: '#00254D', font: '#fff' } },
  },
  cyan: {
    50: { dark: { color: '#012A32', font: '#fff' }, light: { color: '#F0FCFF', font: '#fff' } },
    100: { dark: { color: '#023A46', font: '#fff' }, light: { color: '#E6FAFE', font: '#fff' } },
    200: { dark: { color: '#024B5A', font: '#fff' }, light: { color: '#D7F8FE', font: '#fff' } },
    300: { dark: { color: '#036072', font: '#fff' }, light: { color: '#C3F4FD', font: '#fff' } },
    400: { dark: { color: '#037086', font: '#fff' }, light: { color: '#A5EEFD', font: '#fff' } },
    500: { dark: { color: '#048EA9', font: '#fff' }, light: { color: '#7EE7FC', font: '#fff' } },
    600: { dark: { color: '#06B7DB', font: '#fff' }, light: { color: '#06B7DB', font: '#fff' } },
    700: { dark: { color: '#33D9FA', font: '#fff' }, light: { color: '#09AACD', font: '#fff' } },
    800: { dark: { color: '#6FE4FB', font: '#fff' }, light: { color: '#0E8AAA', font: '#fff' } },
    900: { dark: { color: '#EBFBFE', font: '#fff' }, light: { color: '#053B48', font: '#fff' } },
  },
  green: {
    50: { dark: { color: '#042F14', font: '#fff' }, light: { color: '#F1FDF7', font: '#fff' } },
    100: { dark: { color: '#06381B', font: '#fff' }, light: { color: '#E8FCF1', font: '#fff' } },
    200: { dark: { color: '#074A24', font: '#fff' }, light: { color: '#DAFBE8', font: '#fff' } },
    300: { dark: { color: '#0A6130', font: '#fff' }, light: { color: '#C8F9DD', font: '#fff' } },
    400: { dark: { color: '#0B7439', font: '#fff' }, light: { color: '#ADF5CC', font: '#fff' } },
    500: { dark: { color: '#0F9549', font: '#fff' }, light: { color: '#88F1B6', font: '#fff' } },
    600: { dark: { color: '#17C964', font: '#fff' }, light: { color: '#17C964', font: '#fff' } },
    700: { dark: { color: '#41EC8B', font: '#fff' }, light: { color: '#13A452', font: '#fff' } },
    800: { dark: { color: '#78F2AD', font: '#fff' }, light: { color: '#108944', font: '#fff' } },
    900: { dark: { color: '#ECFDF4', font: '#fff' }, light: { color: '#06371B', font: '#fff' } },
  },
  gray: {
    50: { dark: { color: '#16181A', font: '#fff' }, light: { color: '#F1F3F5', font: '#fff' } },
    100: { dark: { color: '#26292B', font: '#fff' }, light: { color: '#ECEEF0', font: '#fff' } },
    200: { dark: { color: '#2B2F31', font: '#fff' }, light: { color: '#E6E8EB', font: '#fff' } },
    300: { dark: { color: '#313538', font: '#fff' }, light: { color: '#DFE3E6', font: '#fff' } },
    400: { dark: { color: '#3A3F42', font: '#fff' }, light: { color: '#D7DBDF', font: '#fff' } },
    500: { dark: { color: '#4C5155', font: '#fff' }, light: { color: '#C1C8CD', font: '#fff' } },
    600: { dark: { color: '#697177', font: '#fff' }, light: { color: '#889096', font: '#fff' } },
    700: { dark: { color: '#787F85', font: '#fff' }, light: { color: '#7E868C', font: '#fff' } },
    800: { dark: { color: '#9BA1A6', font: '#fff' }, light: { color: '#687076', font: '#fff' } },
    900: { dark: { color: '#ECEDEE', font: '#fff' }, light: { color: '#11181C', font: '#fff' } },
  },
};
const lightColorCodes = [''];
const colorCategories = ['yellow', 'red', 'pink', 'purple', 'blue', 'cyan', 'green', 'gray'];
const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const prefix = '--xui-colors';
const getNameArr = (colorCategory: string) => {
  return weights.map((weight, i) => ({
    colorCode: '',
    fontColor: '',
    name: `${prefix}-${colorCategory}${weight}`,
    value: `${weight}`,
  }));
};
const tempArr = {};
export const colorsArr = colorCategories.forEach(ele => {
  tempArr[ele] = getNameArr(ele);
});

const getOtherArr = (arr: string[], sub: string) => {
  return arr.map(a => ({
    colorCode: '',
    fontColor: '',
    name: `${prefix}-${sub}${a}`,
    value: `${a}`,
  }));
};

export const colorData: TColorNames = {
  ...tempArr,
  // ...{
  //   accents: getOtherArr(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'accents'),
  // },
  // ...{
  //   background: getOtherArr(['background', 'backgroundAlpha', 'foreground', 'backgroundContrast'], ''),
  // },
  // ...{
  //   primary: getOtherArr(
  //     [
  //       'primary',
  //       'primaryBorder',
  //       'primaryBorderHover',
  //       'primarySolidHover',
  //       'primarySolidContrast',
  //       'primaryShadow',
  //       'primaryLight',
  //       'primaryLight',
  //       'primaryLightHover',
  //       'primaryLightActive',
  //       'primaryLightContrast',
  //     ],
  //     ''
  //   ),
  // },
  // ...{
  //   background: getOtherArr(['background', 'backgroundAlpha', 'foreground', 'backgroundContrast'], ''),
  // },
  // ...{
  //   secondary: getOtherArr(
  //     [
  //       'secondary',
  //       'secondaryBorder',
  //       'secondaryBorderHover',
  //       'secondarySolidHover',
  //       'secondarySolidContrast',
  //       'secondaryShadow',
  //       'secondaryLight',
  //       'secondaryLight',
  //       'secondaryLightHover',
  //       'secondaryLightActive',
  //       'secondaryLightContrast',
  //     ],
  //     ''
  //   ),
  // },
};

// { name: `${pre}-` },
