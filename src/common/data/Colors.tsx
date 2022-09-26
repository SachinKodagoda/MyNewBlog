export type TColorNames = {
  [key: string]: {
    name: string;
    value: string;
  }[];
};

const colors = ['yellow', 'red', 'pink', 'purple', 'blue', 'cyan', 'green', 'gray'];
const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const pre = '--xui-colors';
const getNameArr = (name: string) => {
  return weights.map(a => ({
    name: `${pre}-${name}${a}`,
    value: `${a}`,
  }));
};
const tempArr = {};
export const colorsArr = colors.forEach(ele => {
  tempArr[ele] = getNameArr(ele);
});

const getOtherArr = (arr: string[], sub: string) => {
  return arr.map(a => ({
    name: `${pre}-${sub}${a}`,
    value: `${a}`,
  }));
};

export const colorData: TColorNames = {
  ...tempArr,
  ...{
    accents: getOtherArr(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'accents'),
  },
  ...{
    background: getOtherArr(['background', 'backgroundAlpha', 'foreground', 'backgroundContrast'], ''),
  },
  ...{
    primary: getOtherArr(
      [
        'primary',
        'primaryBorder',
        'primaryBorderHover',
        'primarySolidHover',
        'primarySolidContrast',
        'primaryShadow',
        'primaryLight',
        'primaryLight',
        'primaryLightHover',
        'primaryLightActive',
        'primaryLightContrast',
      ],
      ''
    ),
  },
  ...{
    background: getOtherArr(['background', 'backgroundAlpha', 'foreground', 'backgroundContrast'], ''),
  },
  ...{
    secondary: getOtherArr(
      [
        'secondary',
        'secondaryBorder',
        'secondaryBorderHover',
        'secondarySolidHover',
        'secondarySolidContrast',
        'secondaryShadow',
        'secondaryLight',
        'secondaryLight',
        'secondaryLightHover',
        'secondaryLightActive',
        'secondaryLightContrast',
      ],
      ''
    ),
  },
};

// { name: `${pre}-` },
