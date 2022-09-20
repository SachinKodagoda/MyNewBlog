import { Role } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
// 🧨🧨🧨 Common Data -->
export type TInputValue = string | number | null;

export type TOrderVal = 'asc' | 'desc';
export type TOrderBy = {
  key: string;
  value: TOrderVal;
};

export interface IOptions {
  readonly label?: string;
  readonly value?: string | null;
}

export type TWeather = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

export type TMenuItem =
  | 'arts'
  | 'rooms'
  | 'analytics'
  | 'support'
  | 'settings'
  | 'offers'
  | 'users'
  | 'bookings'
  | 'profile'
  | 'supplier'
  | 'stock'
  | 'reports';
export type TRoute = 'login' | 'info' | 'register' | 'home' | 'admin' | 'user' | 'marketing' | 'supplier';
export type TUData = {
  id: number;
  role: Role;
  email: string;
};
export interface INextApiRequestExtended extends NextApiRequest {
  user?: {
    userId: number | null;
    userName: string | null;
  };
}

export type TFormState = 'edit' | 'insert';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TExtendedNextApiHandler<T = any> = (
  req: INextApiRequestExtended,
  res: NextApiResponse<T>
) => void | Promise<void>;
