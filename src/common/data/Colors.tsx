/* eslint-disable sort-keys-fix/sort-keys-fix */

export type TColorCategories = { dark: { color: string; font: string }; light: { color: string; font: string } };
export type TColorItem = {
  [value: number]: TColorCategories;
};
export type TColor = {
  [color: string]: TColorItem;
};

export const ColorCodes = {
  yellow: {
    50: { dark: { color: '#3A2503', font: '#FEF7EC' }, light: { color: '#FEF9F0', font: '#4E3104' } },
    100: { dark: { color: '#442B03', font: '#FEF7EC' }, light: { color: '#FEF5E7', font: '#4E3104' } },
    200: { dark: { color: '#583804', font: '#FEF7EC' }, light: { color: '#FDEFD8', font: '#4E3104' } },
    300: { dark: { color: '#704705', font: '#FEF7EC' }, light: { color: '#FCE7C5', font: '#4E3104' } },
    400: { dark: { color: '#845306', font: '#FEF7EC' }, light: { color: '#FBDBA7', font: '#4E3104' } },
    500: { dark: { color: '#A66908', font: '#FEF7EC' }, light: { color: '#F9CB80', font: '#4E3104' } },
    600: { dark: { color: '#F5A524', font: '#3A2503' }, light: { color: '#F5A524', font: '#FEF9F0' } },
    700: { dark: { color: '#F6AD37', font: '#3A2503' }, light: { color: '#B97509', font: '#FEF9F0' } },
    800: { dark: { color: '#F8C572', font: '#3A2503' }, light: { color: '#925D07', font: '#FEF9F0' } },
    900: { dark: { color: '#FEF7EC', font: '#3A2503' }, light: { color: '#4E3104', font: '#FEF9F0' } },
  },
  red: {
    50: { dark: { color: '#260000', font: '#FDD8E5' }, light: { color: '#FEF0F5', font: '#4E041E' } }, //
    100: { dark: { color: '#300313', font: '#FDD8E5' }, light: { color: '#FEE7EF', font: '#4E041E' } },
    200: { dark: { color: '#44041A', font: '#FDD8E5' }, light: { color: '#FDD8E5', font: '#4E041E' } },
    300: { dark: { color: '#5C0523', font: '#FDD8E5' }, light: { color: '#FCC5D8', font: '#4E041E' } },
    400: { dark: { color: '#6F062B', font: '#FDD8E5' }, light: { color: '#FAA8C5', font: '#4E041E' } },
    500: { dark: { color: '#910838', font: '#FDD8E5' }, light: { color: '#F881AB', font: '#4E041E' } },
    600: { dark: { color: '#F31260', font: '#300313' }, light: { color: '#F31260', font: '#FEF0F5' } },
    700: { dark: { color: '#F4256D', font: '#300313' }, light: { color: '#B80A47', font: '#FEF0F5' } },
    800: { dark: { color: '#F75F94', font: '#300313' }, light: { color: '#910838', font: '#FEF0F5' } },
    900: { dark: { color: '#FDD8E5', font: '#300313' }, light: { color: '#4E041E', font: '#FEF0F5' } },
  },
  pink: {
    50: { dark: { color: '#330025', font: '#FFEBF9' }, light: { color: '#FFF0FB', font: '#4D0037' } },
    100: { dark: { color: '#470033', font: '#FFEBF9' }, light: { color: '#FFE5F8', font: '#4D0037' } },
    200: { dark: { color: '#5C0042', font: '#FFEBF9' }, light: { color: '#FFD6F3', font: '#4D0037' } },
    300: { dark: { color: '#750054', font: '#FFEBF9' }, light: { color: '#FFC2EE', font: '#4D0037' } },
    400: { dark: { color: '#8A0063', font: '#FFEBF9' }, light: { color: '#FFA3E5', font: '#4D0037' } },
    500: { dark: { color: '#AD007C', font: '#FFEBF9' }, light: { color: '#FF7AD9', font: '#4D0037' } },
    600: { dark: { color: '#FF4ECD', font: '#330025' }, light: { color: '#FF4ECD', font: '#FFF0FB' } },
    700: { dark: { color: '#FF2EC4', font: '#330025' }, light: { color: '#D6009A', font: '#FFF0FB' } },
    800: { dark: { color: '#FF6BD5', font: '#330025' }, light: { color: '#B80084', font: '#FFF0FB' } },
    900: { dark: { color: '#FFEBF9', font: '#330025' }, light: { color: '#4D0037', font: '#FFF0FB' } },
  },
  purple: {
    50: { dark: { color: '#1F0A33', font: '#F7ECFC' }, light: { color: '#F7F2FD', font: '#290E44' } },
    100: { dark: { color: '#240C3C', font: '#F7ECFC' }, light: { color: '#F1E8FB', font: '#290E44' } },
    200: { dark: { color: '#2E0F4D', font: '#F7ECFC' }, light: { color: '#EADCF8', font: '#290E44' } },
    300: { dark: { color: '#3B1362', font: '#F7ECFC' }, light: { color: '#E0CBF5', font: '#290E44' } },
    400: { dark: { color: '#451773', font: '#F7ECFC' }, light: { color: '#D1B1F0', font: '#290E44' } },
    500: { dark: { color: '#571D91', font: '#F7ECFC' }, light: { color: '#BC8EE9', font: '#290E44' } },
    600: { dark: { color: '#7828C8', font: '#1F0A33' }, light: { color: '#7828C8', font: '#F7F2FD' } },
    700: { dark: { color: '#9750DD', font: '#1F0A33' }, light: { color: '#6622AA', font: '#F7F2FD' } },
    800: { dark: { color: '#B583E7', font: '#1F0A33' }, light: { color: '#4D1980', font: '#F7F2FD' } },
    900: { dark: { color: '#F7ECFC', font: '#1F0A33' }, light: { color: '#290E44', font: '#F7F2FD' } },
  },
  blue: {
    50: { dark: { color: '#10253E', font: '#EAF4FF' }, light: { color: '#EDF5FF', font: '#00254D' } },
    100: { dark: { color: '#102C4C', font: '#EAF4FF' }, light: { color: '#E1EFFF', font: '#00254D' } },
    200: { dark: { color: '#0F3158', font: '#EAF4FF' }, light: { color: '#CEE4FE', font: '#00254D' } },
    300: { dark: { color: '#0D3868', font: '#EAF4FF' }, light: { color: '#B7D5F8', font: '#00254D' } },
    400: { dark: { color: '#0A4281', font: '#EAF4FF' }, light: { color: '#96C1F2', font: '#00254D' } },
    500: { dark: { color: '#0952A5', font: '#EAF4FF' }, light: { color: '#5EA2EF', font: '#00254D' } },
    600: { dark: { color: '#0072F5', font: '#102C4C' }, light: { color: '#0072F5', font: '#EDF5FF' } },
    700: { dark: { color: '#3694FF', font: '#102C4C' }, light: { color: '#005FCC', font: '#EDF5FF' } }, //
    800: { dark: { color: '#5cb0ff', font: '#102C4C' }, light: { color: '#004799', font: '#EDF5FF' } },
    900: { dark: { color: '#EAF4FF', font: '#102C4C' }, light: { color: '#00254D', font: '#EDF5FF' } },
  },
  cyan: {
    50: { dark: { color: '#012A32', font: '#EBFBFE' }, light: { color: '#F0FCFF', font: '#053B48' } },
    100: { dark: { color: '#023A46', font: '#EBFBFE' }, light: { color: '#E6FAFE', font: '#053B48' } },
    200: { dark: { color: '#024B5A', font: '#EBFBFE' }, light: { color: '#D7F8FE', font: '#053B48' } },
    300: { dark: { color: '#036072', font: '#EBFBFE' }, light: { color: '#C3F4FD', font: '#053B48' } },
    400: { dark: { color: '#037086', font: '#EBFBFE' }, light: { color: '#A5EEFD', font: '#053B48' } },
    500: { dark: { color: '#048EA9', font: '#EBFBFE' }, light: { color: '#7EE7FC', font: '#053B48' } },
    600: { dark: { color: '#06B7DB', font: '#012A32' }, light: { color: '#06B7DB', font: '#F0FCFF' } },
    700: { dark: { color: '#33D9FA', font: '#012A32' }, light: { color: '#09AACD', font: '#F0FCFF' } },
    800: { dark: { color: '#6FE4FB', font: '#012A32' }, light: { color: '#0E8AAA', font: '#F0FCFF' } },
    900: { dark: { color: '#EBFBFE', font: '#012A32' }, light: { color: '#053B48', font: '#F0FCFF' } },
  },
  green: {
    50: { dark: { color: '#042F14', font: '#ECFDF4' }, light: { color: '#F1FDF7', font: '#06371B' } },
    100: { dark: { color: '#06381B', font: '#ECFDF4' }, light: { color: '#E8FCF1', font: '#06371B' } },
    200: { dark: { color: '#074A24', font: '#ECFDF4' }, light: { color: '#DAFBE8', font: '#06371B' } },
    300: { dark: { color: '#0A6130', font: '#ECFDF4' }, light: { color: '#C8F9DD', font: '#06371B' } },
    400: { dark: { color: '#0B7439', font: '#ECFDF4' }, light: { color: '#ADF5CC', font: '#06371B' } },
    500: { dark: { color: '#0F9549', font: '#ECFDF4' }, light: { color: '#88F1B6', font: '#06371B' } },
    600: { dark: { color: '#17C964', font: '#042F14' }, light: { color: '#17C964', font: '#F1FDF7' } },
    700: { dark: { color: '#41EC8B', font: '#042F14' }, light: { color: '#13A452', font: '#F1FDF7' } },
    800: { dark: { color: '#78F2AD', font: '#042F14' }, light: { color: '#108944', font: '#F1FDF7' } },
    900: { dark: { color: '#ECFDF4', font: '#042F14' }, light: { color: '#06371B', font: '#F1FDF7' } },
  },
  gray: {
    50: { dark: { color: '#16181A', font: '#ECEDEE' }, light: { color: '#F1F3F5', font: '#11181C' } },
    100: { dark: { color: '#26292B', font: '#ECEDEE' }, light: { color: '#ECEEF0', font: '#11181C' } },
    200: { dark: { color: '#2B2F31', font: '#ECEDEE' }, light: { color: '#E6E8EB', font: '#11181C' } },
    300: { dark: { color: '#313538', font: '#ECEDEE' }, light: { color: '#DFE3E6', font: '#11181C' } },
    400: { dark: { color: '#3A3F42', font: '#ECEDEE' }, light: { color: '#D7DBDF', font: '#11181C' } },
    500: { dark: { color: '#4C5155', font: '#ECEDEE' }, light: { color: '#C1C8CD', font: '#11181C' } },
    600: { dark: { color: '#697177', font: '#16181A' }, light: { color: '#889096', font: '#F1F3F5' } },
    700: { dark: { color: '#787F85', font: '#16181A' }, light: { color: '#7E868C', font: '#F1F3F5' } },
    800: { dark: { color: '#9BA1A6', font: '#16181A' }, light: { color: '#687076', font: '#F1F3F5' } },
    900: { dark: { color: '#ECEDEE', font: '#16181A' }, light: { color: '#11181C', font: '#F1F3F5' } },
  },
};

export const Prefix = '--xui-colors';

export const noChangeData = [
  {
    name: 'accents0',
    color: 'var(--xui-colors-gray50)',
  },
  {
    name: 'accents1',
    color: 'var(--xui-colors-gray100)',
  },
  {
    name: 'accents2',
    color: 'var(--xui-colors-gray200)',
  },
  {
    name: 'accents3',
    color: 'var(--xui-colors-gray300)',
  },
  {
    name: 'accents4',
    color: 'var(--xui-colors-gray400)',
  },
  {
    name: 'accents5',
    color: 'var(--xui-colors-gray500)',
  },
  {
    name: 'accents6',
    color: 'var(--xui-colors-gray600)',
  },
  {
    name: 'accents7',
    color: 'var(--xui-colors-gray700)',
  },
  {
    name: 'accents8',
    color: 'var(--xui-colors-gray800)',
  },
  {
    name: 'accents9',
    color: 'var(--xui-colors-gray900)',
  },
  {
    name: 'white',
    color: '#fff',
  },
  {
    name: 'black',
    color: '#000',
  },
  { name: 'primary', color: 'var(--xui-colors-blue600)' },
  { name: 'primaryBorder', color: 'var(--xui-colors-blue500)' },
  { name: 'primaryBorderHover', color: 'var(--xui-colors-blue600)' },
  { name: 'primarySolidHover', color: 'var(--xui-colors-blue700)' },
  { name: 'primarySolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'primaryShadow', color: 'var(--xui-colors-blue500)' },

  { name: 'primaryLightContrast', color: 'var(--xui-colors-blue600)' },

  { name: 'secondary', color: 'var(--xui-colors-purple600)' }, // dark => 700
  { name: 'secondaryBorder', color: 'var(--xui-colors-purple500)' },
  { name: 'secondaryBorderHover', color: 'var(--xui-colors-purple600)' },
  { name: 'secondarySolidHover', color: 'var(--xui-colors-purple700)' },
  { name: 'secondarySolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'secondaryShadow', color: 'var(--xui-colors-purple500)' },

  { name: 'secondaryLightContrast', color: 'var(--xui-colors-purple600)' }, // dark => 800

  { name: 'success', color: 'var(--xui-colors-green600)' },
  { name: 'successBorder', color: 'var(--xui-colors-green500)' },
  { name: 'successBorderHover', color: 'var(--xui-colors-green600)' },
  { name: 'successSolidHover', color: 'var(--xui-colors-green700)' },
  { name: 'successSolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'successShadow', color: 'var(--xui-colors-green500)' },

  { name: 'successLightContrast', color: 'var(--xui-colors-green700)' },

  { name: 'warning', color: 'var(--xui-colors-yellow600)' },
  { name: 'warningBorder', color: 'var(--xui-colors-yellow500)' },
  { name: 'warningBorderHover', color: 'var(--xui-colors-yellow600)' },
  { name: 'warningSolidHover', color: 'var(--xui-colors-yellow700)' },
  { name: 'warningSolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'warningShadow', color: 'var(--xui-colors-yellow500)' },

  { name: 'warningLightContrast', color: 'var(--xui-colors-yellow700)' },

  { name: 'error', color: 'var(--xui-colors-red600)' },
  { name: 'errorBorder', color: 'var(--xui-colors-red500)' },
  { name: 'errorBorderHover', color: 'var(--xui-colors-red600)' },
  { name: 'errorSolidHover', color: 'var(--xui-colors-red700)' },
  { name: 'errorSolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'errorShadow', color: 'var(--xui-colors-red500)' },

  { name: 'errorLightContrast', color: 'var(--xui-colors-red600)' }, // dark 700

  { name: 'neutral', color: 'var(--xui-colors-gray600)' },
  { name: 'neutralBorder', color: 'var(--xui-colors-gray400)' },
  { name: 'neutralBorderHover', color: 'var(--xui-colors-gray500)' },
  { name: 'neutralSolidHover', color: 'var(--xui-colors-gray600)' },
  { name: 'neutralSolidContrast', color: 'var(--xui-colors-white)' },
  { name: 'neutralShadow', color: 'var(--xui-colors-gray400)' },

  { name: 'neutralLightContrast', color: 'var(--xui-colors-gray800)' },

  {
    name: 'gradient',
    color:
      'linear-gradient(112deg, var(--xui-colors-cyan600) -63.59%, var(--xui-colors-pink600) -20.3%, var(--xui-colors-blue600) 70.46%)',
  },
  { name: 'text', color: 'var(--xui-colors-gray900)' },
];

type TGet = {
  [key: string]: { name: string; color: string }[];
};

export const getOtherData: TGet = {
  light: [
    ...noChangeData,
    { name: 'background', color: 'var(--xui-colors-white)' },
    { name: 'backgroundAlpha', color: 'rgba(255, 255, 255, 0.8)' },
    { name: 'foreground', color: 'var(--xui-colors-black)' },
    { name: 'backgroundContrast', color: 'var(--xui-colors-white)' },

    { name: 'primaryLight', color: 'var(--xui-colors-blue200)' },
    { name: 'primaryLightHover', color: 'var(--xui-colors-blue300)' },
    { name: 'primaryLightActive', color: 'var(--xui-colors-blue400)' },

    { name: 'secondaryLight', color: 'var(--xui-colors-purple200)' },
    { name: 'secondaryLightHover', color: 'var(--xui-colors-purple300)' },
    { name: 'secondaryLightActive', color: 'var(--xui-colors-purple400)' },

    { name: 'successLight', color: 'var(--xui-colors-green200)' },
    { name: 'successLightHover', color: 'var(--xui-colors-green300)' },
    { name: 'successLightActive', color: 'var(--xui-colors-green400)' },

    { name: 'warningLight', color: 'var(--xui-colors-yellow200)' },
    { name: 'warningLightHover', color: 'var(--xui-colors-yellow300)' },
    { name: 'warningLightActive', color: 'var(--xui-colors-yellow400)' },

    { name: 'errorLight', color: 'var(--xui-colors-red200)' },
    { name: 'errorLightHover', color: 'var(--xui-colors-red300)' },
    { name: 'errorLightActive', color: 'var(--xui-colors-red400)' },

    { name: 'neutralLight', color: 'var(--xui-colors-gray100)' },
    { name: 'neutralLightHover', color: 'var(--xui-colors-gray200)' },
    { name: 'neutralLightActive', color: 'var(--xui-colors-gray300)' },

    { name: 'link', color: 'var(--xui-colors-blue600)' },
    { name: 'codeLight', color: 'var(--xui-colors-pink100)' },
    { name: 'code', color: 'var(--xui-colors-pink600)' },
    { name: 'selection', color: 'var(--xui-colors-blue200)' },
    { name: 'border', color: 'rgba(0, 0, 0, 0.15)' },

    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
  ],
  dark: [
    ...noChangeData,
    { name: 'background', color: 'var(--xui-colors-black)' },
    { name: 'backgroundAlpha', color: 'rgba(0, 0, 0, 0.6)' },
    { name: 'foreground', color: 'var(--xui-colors-white)' },
    { name: 'backgroundContrast', color: 'var(--xui-colors-accents0)' },

    { name: 'primaryLight', color: 'var(--xui-colors-blue50)' },
    { name: 'primaryLightHover', color: 'var(--xui-colors-blue100)' },
    { name: 'primaryLightActive', color: 'var(--xui-colors-blue200)' },

    { name: 'secondaryLight', color: 'var(--xui-colors-purple50)' },
    { name: 'secondaryLightHover', color: 'var(--xui-colors-purple100)' },
    { name: 'secondaryLightActive', color: 'var(--xui-colors-purple200)' },

    { name: 'successLight', color: 'var(--xui-colors-green50)' },
    { name: 'successLightHover', color: 'var(--xui-colors-green100)' },
    { name: 'successLightActive', color: 'var(--xui-colors-green200)' },

    { name: 'warningLight', color: 'var(--xui-colors-yellow50)' },
    { name: 'warningLightHover', color: 'var(--xui-colors-yellow100)' },
    { name: 'warningLightActive', color: 'var(--xui-colors-yellow200)' },

    { name: 'errorLight', color: 'var(--xui-colors-red50)' },
    { name: 'errorLightHover', color: 'var(--xui-colors-red100)' },
    { name: 'errorLightActive', color: 'var(--xui-colors-red200)' },

    { name: 'neutralLight', color: 'var(--xui-colors-gray200)' },
    { name: 'neutralLightHover', color: 'var(--xui-colors-gray300)' },
    { name: 'neutralLightActive', color: 'var(--xui-colors-gray400)' },

    { name: 'link', color: 'var(--xui-colors-blue700)' },
    { name: 'codeLight', color: 'var(--xui-colors-cyan50)' },
    { name: 'code', color: 'var(--xui-colors-cyan600)' },
    { name: 'selection', color: 'var(--xui-colors-pink800)' },
    { name: 'border', color: 'rgba(255, 255, 255, 0.15)' },

    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
  ],
};
