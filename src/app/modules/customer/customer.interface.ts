import { Types } from "mongoose";

export type TCustomer={
name:string;
phoneNumber:string;
paymentStatus:string;
productId:Types.ObjectId;
quantity:number;
sellerName:string;
}