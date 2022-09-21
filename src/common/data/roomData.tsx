export interface IRoom {
  type: string;
  description: string[];
  rating: number;
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
}
export const roomData: IRoom[] = [
  {
    description: ['Perfect for traveling couples', 'Breakfast included', 'Two double beds', 'Baby sitting facilities'],
    price: {
      en: {
        currency: '$',
        value: 29,
        valueWithCurrency: '$29',
      },
      sl: {
        currency: 'LKR',
        value: 29,
        valueWithCurrency: '29LKR',
      },
    },
    rating: 0.4,
    type: 'Single Room',
  },
  {
    description: ['Perfect for traveling couples', 'Breakfast included', 'Two double beds', 'Baby sitting facilities'],
    price: {
      en: {
        currency: '$',
        value: 29,
        valueWithCurrency: '$29',
      },
      sl: {
        currency: 'LKR',
        value: 29,
        valueWithCurrency: '29LKR',
      },
    },
    rating: 4.7,
    type: 'Single Room',
  },
  {
    description: ['Perfect for traveling couples', 'Breakfast included', 'Two double beds', 'Baby sitting facilities'],
    price: {
      en: {
        currency: '$',
        value: 29,
        valueWithCurrency: '$29',
      },
      sl: {
        currency: 'LKR',
        value: 29,
        valueWithCurrency: '29LKR',
      },
    },
    rating: 2.5,
    type: 'Single Room',
  },
];
