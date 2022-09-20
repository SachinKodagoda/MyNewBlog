import weatherAPI from '@util/APIs/weatherAPI';
import { IS_DEV } from '@util/baseConfig';
import Axios, { AxiosInstance } from 'axios';

export const commonHeaders = {
  'content-type': 'application/json',
  'x-platform': 'web',
  'x-cms': 'v1',
  'x-mp': 'test',
  'Cache-Control': 'no-cache, max-age=0, must-revalidate, no-store',
};

let api: AxiosInstance = Axios.create({
  baseURL: '/',
  headers: {
    ...commonHeaders,
    'x-content': 'web',
    'x-locale': 'en',
  },
});

api.interceptors.request.use(
  async requestConfig => {
    return requestConfig;
  },
  error => {
    // eslint-disable-next-line no-console
    console.error('✉️ ', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async responseConfig => {
    return responseConfig;
  },
  error => {
    if (IS_DEV) {
      // eslint-disable-next-line no-console
      console.error('📩 ', error);
    }
  }
);

// --- --- --- --- --- --- SERVICES --- --- --- --- --- ---
export const weatherSVC = (): ReturnType<typeof weatherAPI> => weatherAPI(api);
