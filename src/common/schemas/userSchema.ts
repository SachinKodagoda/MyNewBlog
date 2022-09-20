import { Gender, OnlineStatus, Role } from '@prisma/client';
import { date, number, object, ref, string, TypeOf } from 'yup';

const readObj = {
  id: number().required().nullable(),
};

const loginObj = {
  email: string().email('Must be a valid email').required('Email is required'),
  password: string().required('Password is required'),
};
const registerObj = {
  email: string().email('Must be a valid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Should be 8 chars minimum!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      'At Least One Uppercase,\nOne Lowercase,\nOne Number,\nOne Special Character Needed!'
    ),
  rePassword: string()
    .required('Repeated-Password is required')
    .oneOf([ref('password')], 'Passwords must match!'),
  fName: string().required('First Name is required!'),
  lName: string().required('Last Name is required!'),
};

const updateObj = {
  id: number().required().nullable(),
  email: string().email('Must be a valid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password should have at least 8 chars')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      'At Least One Uppercase,\nOne Lowercase,\nOne Number,\nOne Special Character Needed!'
    ),
  fName: string(),
  lName: string(),
  address: string(),
  mobileNo: string().max(9, 'Mobile Number Should have only 9 digits'),
  updatedAt: date().nullable(),
  createdAt: date().nullable(),
  role: string().oneOf[(Role.admin, Role.user)],
  website: string(),
  gitHub: string(),
  twitter: string(),
  instagram: string(),
  facebook: string(),
  gender: string().oneOf[(Gender.male, Gender.female, Gender.other)],
  onlineStatus: string().oneOf[(OnlineStatus.available, OnlineStatus.away, OnlineStatus.busy, OnlineStatus.offline)],
};

export const userReadSchema = object(readObj);
export const userLoginSchema = object(loginObj);
export const userRegisterSchema = object(registerObj);
export const userUpdateSchema = object(updateObj);
export type TReadSchema = TypeOf<typeof userReadSchema>;
export type TUserLoginSchema = TypeOf<typeof userLoginSchema>;
export type TUserRegisterSchema = TypeOf<typeof userRegisterSchema>;
export type TUserUpdateSchema = TypeOf<typeof userUpdateSchema>;

export const initUserLogin: TUserLoginSchema = {
  email: '',
  password: '',
};

export const initUserUpdate: TUserUpdateSchema = {
  id: null,
  address: '',
  createdAt: null,
  email: '',
  fName: '',
  lName: '',
  mobileNo: '',
  password: '',
  role: '',
  updatedAt: null,
  website: '',
  gitHub: '',
  twitter: '',
  instagram: '',
  facebook: '',
  gender: 'male',
  onlineStatus: 'offline',
};

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
