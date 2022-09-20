import { loadStripe } from '@stripe/stripe-js';
import { TWeather } from '@ts/common';
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type TProps = {
  children: JSX.Element;
};

// 🔥🔥🔥 Init Functions 🔥🔥🔥
interface IContextFn {
  setWeather: Dispatch<SetStateAction<TWeather | null>>;
}

const initFn: IContextFn = {
  setWeather: () => null,
};

// 🔥🔥🔥 Init Values 🔥🔥🔥
interface IContextVal {
  weather: TWeather | null;
}

const initVal: IContextVal = {
  weather: null,
};

interface IContext extends IContextFn, IContextVal {}

export const WeatherCtx = React.createContext<IContext>({ ...initFn, ...initVal });

export function WeatherCtxProvider({ children }: TProps): React.ReactElement {
  const [weather, setWeather] = useState(initVal.weather);
  const [pk, setPk] = useState(null);
  useEffect(() => {
    async function getWeatherData() {
      try {
        // const response = await weatherSVC().getCurrentWeather();
        // setWeather(response.data.current);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error: =-->', error);
      }
    }

    getWeatherData();
  }, []);

  // 🔥🔥🔥 Ctx Functions 🔥🔥🔥
  const contextFns = {
    setWeather,
  };

  // 🔥🔥🔥 Ctx Values 🔥🔥🔥
  const ctxValues = useMemo(
    () => ({
      weather,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weather]
  );

  if (pk) {
    const stripe = loadStripe(pk);
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return (
    <WeatherCtx.Provider
      value={{
        ...ctxValues,
        ...contextFns,
      }}
    >
      {children}
    </WeatherCtx.Provider>
  );
}
