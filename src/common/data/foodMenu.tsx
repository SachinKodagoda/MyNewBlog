import foodMenu from './foodMenu.json';

export interface IFoodMenu {
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

export const foodMenuData: IFoodMenu[] = foodMenu.data;
