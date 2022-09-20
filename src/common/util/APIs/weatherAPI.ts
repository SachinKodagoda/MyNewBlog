import { TWeather } from '@ts/common';
import { AxiosInstance, AxiosResponse } from 'axios';

export type TCurrentWeatherResponse = {
  current: TWeather;
};

export type TCityEndpoints = {
  getCurrentWeather: () => Promise<AxiosResponse<TCurrentWeatherResponse>>;
};

const weatherAPI = (api: AxiosInstance): TCityEndpoints => {
  const getCurrentWeather = async (): Promise<AxiosResponse<TCurrentWeatherResponse>> =>
    api.get(
      `https://api.weatherapi.com/v1/current.json?key=501d6af1401148df90d63901222003&q=6.9807057046338885,79.89027837639746&aqi=no`
    );
  return { getCurrentWeather };
};

export default weatherAPI;
