import { Types } from 'mongoose';

export type TSales = {
  productId: Types.ObjectId;
  sell: number;
  userId?: Types.ObjectId;
};
