import { Figure1, Figure2, Figure3, Figure4, Figure5, Figure6 } from '@svg/common';
import {
  ICommonPackageObj,
  TCurrency,
  TLessFeatures,
  TMscObj,
  TOrientation,
  TPackageObj,
  TPaperSize,
  TTab,
  TType,
} from '@ts/common';
import { Translations } from '@util/localize';
import React, { useMemo, useState } from 'react';

type TProps = {
  children: JSX.Element;
};

interface IContext {
  type: TType;
  totalPreviousPrice: number;
  totalPrice: number;
  figureCount: string;
  currency: TCurrency;
  paperSize: TPaperSize;
  selectedTab: TTab;
  orientation: TOrientation;
  selectedFigureObj: TPackageObj | null;
  selectedPaperObj: TPackageObj | null;
  selectedTypeObj: TPackageObj | null;
  figurePackageObj: ICommonPackageObj | null;
  paperPackageObj: ICommonPackageObj | null;
  typePackageObj: ICommonPackageObj | null;
  mscObj: TMscObj;
  features: TLessFeatures;
  setType: React.Dispatch<React.SetStateAction<TType>>;
  setFigureCount: React.Dispatch<React.SetStateAction<string>>;
  setCurrency: React.Dispatch<React.SetStateAction<TCurrency>>;
  setPaperSize: React.Dispatch<React.SetStateAction<TPaperSize>>;
  setSelectedTab: React.Dispatch<React.SetStateAction<TTab>>;
  setOrientation: React.Dispatch<React.SetStateAction<TOrientation>>;
  setFeatures: React.Dispatch<React.SetStateAction<TLessFeatures>>;
}

const initContext: IContext = {
  type: 'hi_featured',
  figureCount: 'figure1',
  paperSize: 'paperA4',
  totalPreviousPrice: 0,
  totalPrice: 0,
  currency: 'euro',
  selectedTab: 'type',
  orientation: 'portrait',
  features: 'no_features',
  mscObj: {
    orientation: null,
    features: null,
  },
  setType: () => null,
  setFigureCount: () => null,
  setCurrency: () => null,
  setPaperSize: () => null,
  setSelectedTab: () => null,
  setOrientation: () => null,
  setFeatures: () => null,
  selectedFigureObj: null,
  selectedPaperObj: null,
  selectedTypeObj: null,
  figurePackageObj: {},
  paperPackageObj: {},
  typePackageObj: {},
};

export const CartContext = React.createContext<IContext>(initContext);

export function CartContextProvider({ children }: TProps): React.ReactElement {
  const t = Translations();
  const [currency, setCurrency] = useState(initContext.currency);
  const [figureCount, setFigureCount] = useState(initContext.figureCount);
  const [paperSize, setPaperSize] = useState(initContext.paperSize);
  const [type, setType] = useState(initContext.type);
  const [orientation, setOrientation] = useState(initContext.orientation);
  const [features, setFeatures] = useState(initContext.features);
  const [selectedTab, setSelectedTab] = useState<TTab>(initContext.selectedTab);

  const figurePackageObj = {
    figure1: {
      prev: 10,
      now: 1,
      imgUrl: ['/images/express/figure1.jpeg', '/images/express/faceless1.jpg'],
      desc: ['1', t.personsAnimals],
      iconUrl: <Figure1 />,
      key: 'figure1',
    },
    figure2: {
      prev: 20,
      now: 2,
      imgUrl: ['/images/express/figure2.jpeg', '/images/express/faceless2.jpg'],
      desc: ['2', t.personsAnimals],
      iconUrl: <Figure2 />,
      key: 'figure2',
    },
    figure3: {
      prev: 30,
      now: 3,
      imgUrl: ['/images/express/figure3.jpeg', '/images/express/faceless3.jpg'],
      desc: ['3', t.personsAnimals],
      iconUrl: <Figure3 />,
      key: 'figure3',
    },
    figure4: {
      prev: 40,
      now: 4,
      imgUrl: ['/images/express/figure4.jpeg', '/images/express/faceless4.jpg'],
      desc: ['4', t.personsAnimals],
      iconUrl: <Figure4 />,
      key: 'figure4',
    },
    figure5: {
      prev: 50,
      now: 5,
      imgUrl: ['/images/express/figure5.jpeg', '/images/express/faceless5.jpg'],
      desc: ['5', t.personsAnimals],
      iconUrl: <Figure5 />,
      key: 'figure5',
    },
    figure6: {
      prev: 60,
      now: 6,
      imgUrl: ['/images/express/figure6.jpeg', '/images/express/faceless6.jpg'],
      desc: ['6', t.personsAnimals],
      iconUrl: <Figure6 />,
      key: 'figure6',
    },
  };
  const paperPackageObj = {
    paperA4: {
      prev: 10,
      now: 1,
      imgUrl: ['/images/express/A4.jpeg', '/images/express/A4.jpeg'],
      desc: ['210 x 297 mm', 'A4'],
      iconUrl: null,
      key: 'paperA4',
    },
    paperA3: {
      prev: 10,
      now: 1,
      imgUrl: ['/images/express/A3.jpeg', '/images/express/A3.jpeg'],
      desc: ['297 x 420 mm', 'A3'],
      iconUrl: null,
      key: 'paperA3',
    },
    paperA2: {
      prev: 20,
      now: 2,
      imgUrl: ['/images/express/A2.jpeg', '/images/express/A2.jpeg'],
      desc: ['420 x 594 mm', 'A2'],
      iconUrl: null,
      key: 'paperA2',
    },
  };

  const typePackageObj = {
    hi_featured: {
      prev: 10,
      now: 1,
      imgUrl: ['/images/express/figure1.jpeg'],
      desc: [t.express_hi_featured],
      iconUrl: null,
      key: 'hi_featured',
    },
    low_featured: {
      prev: 20,
      now: 2,
      imgUrl: ['/images/express/original1.jpeg', '/images/express/painting1.jpeg'],
      desc: [t.express_low_featured],
      iconUrl: null,
      key: 'low_featured',
    },
  };

  let { totalPrice } = initContext;
  let { totalPreviousPrice } = initContext;
  let { selectedFigureObj } = initContext;
  let { selectedPaperObj } = initContext;
  let { selectedTypeObj } = initContext;
  let { mscObj } = initContext;
  mscObj = {
    orientation: [
      {
        key: 'portrait',
        value: t.express_portrait,
      },
      {
        key: 'landscape',
        value: t.express_landscape,
      },
    ],
    features: [
      {
        key: 'no_features',
        value: t.express_no_features,
      },
      {
        key: 'eyebrows',
        value: t.express_eyebrows,
      },
      {
        key: 'eyebrows_smile',
        value: t.express_eyebrows_smile,
      },
    ],
  };

  if (figurePackageObj && paperPackageObj && typePackageObj) {
    selectedFigureObj = figurePackageObj[figureCount];
    selectedPaperObj = paperPackageObj[paperSize];
    selectedTypeObj = typePackageObj[type];
    if (selectedFigureObj && selectedPaperObj && selectedTypeObj) {
      totalPrice = selectedFigureObj.now + selectedPaperObj.now + selectedTypeObj.now;
      totalPreviousPrice = selectedFigureObj.prev + selectedPaperObj.prev + selectedTypeObj.prev;
    }
  }

  const contextValue = useMemo(
    () => ({
      type,
      setType,
      figureCount,
      setFigureCount,
      currency,
      setCurrency,
      paperSize,
      setPaperSize,
      selectedTab,
      setSelectedTab,
      orientation,
      setOrientation,
      features,
      setFeatures,
      mscObj, // fix
      figurePackageObj, // fix
      paperPackageObj, // fix
      typePackageObj, // fix
      selectedFigureObj, // auto
      selectedPaperObj, // auto
      selectedTypeObj, // auto
      totalPreviousPrice, // auto
      totalPrice, // auto
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      type,
      figureCount,
      currency,
      paperSize,
      selectedTab,
      orientation,
      features,
      // figurePackageObj, // fix
      // paperPackageObj, // fix
      // typePackageObj, // fix
      // selectedFigureObj, // auto
      // selectedPaperObj, // auto
      // selectedTypeObj, // auto
      // totalPreviousPrice, // auto
      // totalPrice, // auto
    ] // if you don't put realtime updating values here then it is not updating
  );

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
