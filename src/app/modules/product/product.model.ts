import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';


const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'please provide flower name'],
    },
    price: {
      type: Number,
      required: [true, 'please provide flower price!'],
    },
    quantity: {
      type: Number,
      required: [true, 'please provide flower quantity!'],
    },
    bloomDate: {
      type: Date,
      required: true,
    },
    color: {
      type: String,
      required: [true, 'please provide flower color name'],
    },
    category: {
      type: String,
      required: [true, 'please provide flower category'],
    },
    size: {
      type: String,
      required: [true, 'please provide flower size'],
    },
    fragrance: {
      type: String,
      required: [true, 'please provide flower fragrance'],
    },
    image: {
      type: String,
      required: [true, 'please provide flower image'],
    }, 
  },
  { timestamps: true },
);
export const Product = model<TProduct>('Product', productSchema);
