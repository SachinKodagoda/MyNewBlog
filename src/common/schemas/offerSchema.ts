import { date, number, object, string, TypeOf } from 'yup';

export const offerSchema = object({
  id: number().nullable(),
  status: string().required().oneOf(['Active', 'Inactive']),
  type: string().nullable().required(),
  desc: string().required().max(100),
  startDate: date().required(),
  endDate: date().required(),
  offerCode: string().required().min(2).max(10),
  discount: number().max(100).required(),
});

export type TOfferSchema = TypeOf<typeof offerSchema>;
