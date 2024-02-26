import { Types } from 'mongoose';

export type TSales = {
  productId: Types.ObjectId;
  sell: number;
  buyerName:string;
  saleDate:Date;
  sellerName:string;
  coupon?:string;
  userId?: Types.ObjectId;
  totalPrice:number,
  discountPrice:number,
};
