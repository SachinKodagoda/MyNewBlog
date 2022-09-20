import { RoomType } from '@prisma/client';

export const typeOpt = [
  { label: 'New Year', value: 'NewYear' },
  { label: 'Summer', value: 'Summer' },
  { label: `Women's Day`, value: 'Women-s-Day' },
  { label: `Fathers's Day`, value: 'father-s-Day' },
];

export const searchOpt = [
  { label: 'ID', value: 'id' },
  { label: 'STATUS', value: 'status' },
  { label: 'TYPE', value: 'type' },
  { label: 'DESC', value: 'desc' },
  { label: 'OFFER CODE', value: 'offerCode' },
  // { label: 'START DATE', value: 'startDate' },
  // { label: 'END DATE', value: 'endDate' },
  // { label: 'CREATE DATE', value: 'createDate' },
  // { label: 'DISCOUNT', value: 'discount' },
];

export const limitOpt = [
  { label: '4', value: '4' },
  { label: '8', value: '8' },
  { label: '12', value: '12' },
  { label: 'All', value: '1000' },
];

export const statusOpt = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];

export const langOpt = [
  { label: 'EN', value: 'en' },
  { label: 'සිං', value: 'si' },
];

export const onlineStatusOpt = [
  { label: 'Available', value: 'available' },
  { label: 'Busy', value: 'busy' },
  { label: 'Away', value: 'away' },
  { label: 'Offline', value: 'offline' },
];

export const roomTypeOpt = [
  { label: 'Single (1 People)', value: RoomType.single },
  { label: 'Double (2 People)', value: RoomType.double },
  { label: 'Deluxe (2 People)', value: RoomType.deluxe },
];
