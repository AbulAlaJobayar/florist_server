import { model, Schema } from 'mongoose';
import { TCustomer } from './customer.interface';

const customerSchema = new Schema<TCustomer>(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['card', 'cash', 'mobile_Banking'],
      default: 'cash',
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    sellerName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export const Customer = model<TCustomer>('Customer', customerSchema);
