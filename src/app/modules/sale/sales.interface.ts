import { Types } from 'mongoose';

export type TSales = {
  productId: Types.ObjectId;
  sell: number;
  buyerName:string
  saleDate:Date,
  sellerName:string
  userId?: Types.ObjectId;
};
