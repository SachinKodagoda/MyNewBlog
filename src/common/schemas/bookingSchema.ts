import { MealType, RoomType } from '@prisma/client';
import { date, number, object, string, TypeOf } from 'yup';

const bookingObj = {
  checkIn: date().nullable(),
  checkOut: date().nullable(),
  roomType: string(),
  offerId: number().nullable(),
  numberOfRooms: number()
    .required('Number of rooms required')
    .min(1, 'Minimum number of room is 1')
    .max(10, 'Minimum number of room is 10'),
  note: string(),
  offerCode: string(),
  meal: string().required().oneOf([MealType.full_board, MealType.half_board]),
};

export const bookingSchema = object(bookingObj);

export type TBookingSchema = TypeOf<typeof bookingSchema>;

// const date = new Date();
// date.setDate(date.getDate() + 1);

export const initBookingSchema: TBookingSchema = {
  checkIn: new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`),
  checkOut: new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`),
  roomType: RoomType.single,
  offerId: null,
  numberOfRooms: 1,
  note: '',
  offerCode: '',
  meal: MealType.full_board,
};
