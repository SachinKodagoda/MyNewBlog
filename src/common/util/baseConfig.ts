import { TApp } from '@ts/config';

export const { ENV, DOCKER } = process.env;
export const IS_DOCKER = DOCKER;
export const IS_DEV = ENV === 'dev';
export const IS_PROD = ENV === 'prod';
export const APP = process.env._APP as TApp;
