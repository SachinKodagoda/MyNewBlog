import foodMenu from './foodMenu.json';

export interface IFoodMenuItem {
  image: string;
  ingredients: string[];
  price: {
    en: {
      currency: string;
      value: number;
      valueWithCurrency: string;
    };
    sl: {
      currency: string;
      value: number;
      valueWithCurrency: string;
    };
  };
  title: string;
}

export interface IFoodMenus {
  [key: string]: IFoodMenuItem[];
}

export interface IFoodTitles {
  title: string;
  selected: boolean;
  image: string;
}

export const menuListData: IFoodMenus = foodMenu.menuList;
export const titleListData: IFoodTitles[] = foodMenu.titleList;
