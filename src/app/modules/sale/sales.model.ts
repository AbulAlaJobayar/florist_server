import { Schema, model } from 'mongoose';
import { TSales } from './sales.interface';


const salesSchema = new Schema<TSales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    sell: {
      type: Number,
      required: true,
    },
    buyerName:{
      type: String,
      required: true,
    },
    
    saleDate: {
      type: Date,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);
export const Sales = model<TSales>('Sales', salesSchema);
