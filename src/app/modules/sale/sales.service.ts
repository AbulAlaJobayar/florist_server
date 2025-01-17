import { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Product } from '../product/product.model';
import AppError from '../../utils/AppError';
import httpStatus from 'http-status';
import { TSales } from './sales.interface';
import { Sales } from './sales.model';
import { Coupon } from '../coupon/coupon.model';
import { Customer } from '../customer/customer.model';
import { TCustomer } from '../customer/customer.interface';

const createSaleIntoDB = async (userData: JwtPayload, payload: TSales&TCustomer) => {
  const { id: tokenId } = userData;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const { productId, sell } = payload;

    // Find the product
    const product = await Product.findById(productId).session(session);
    if (!product) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Product not found');
    }
    const productQuantity = product.quantity;

    // Check if there is enough quantity
    if (productQuantity < sell) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Insufficient Product Quantity',
      );
    }

    // Update product quantity
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: product._id },
      { quantity: Number(productQuantity) - Number(sell) },
      { new: true, runValidators: true },
    ).session(session);

    if (!updatedProduct) {
      throw new AppError(
        httpStatus.NOT_MODIFIED,
        'Failed to update product quantity',
      );
    }
    // check couponCode
    const isValidCoupon = await Coupon.findOne({
      code: payload.coupon,
    }).session(session);
    const totalPrice = product.price * sell;

    let discountPrice;
    if (isValidCoupon) {
      const discountPercentage = isValidCoupon.discountPercentage;
      discountPrice = totalPrice - totalPrice * (discountPercentage / 100);
    }
    // payload.userId = tokenId;
    // payload.totalPrice = totalPrice;
    // payload.discountPrice = discountPrice || totalPrice;
    // Create a new sale
    const saleData = {
      productId: payload.productId,
      sell: payload.sell,
      buyerName: payload.buyerName,
      saleDate: payload.saleDate,
      sellerName:payload.sellerName,
      coupon: payload.coupon,
      userId: tokenId,
      totalPrice: totalPrice,
      discountPrice: discountPrice || totalPrice,
    };
    const sale = await Sales.create([saleData], { session });
// customer Data
const customerData={
  name:payload.buyerName,
  phoneNumber:payload.phoneNumber,
  paymentStatus:payload.paymentStatus,
  productId: payload.productId,
  quantity: payload.sell,
  sellerName:payload.sellerName
}
await Customer.create([customerData],{session})
    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return sale;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Rollback the transaction
    await session.abortTransaction();
    session.endSession();
    throw new Error(error);
  }
};
const getAllSalesIntoDB = async () => {
  const result = await Sales.find().sort({createdAt:-1})
    .populate({ path: 'productId' })
    .populate({ path: 'userId' })
    .exec();
  return result;
};
const getSalesBySellerIntoDB = async (payload: string) => {
  const result = await Sales.find({ userId: payload })
    .populate({ path: 'productId' })
    .populate({ path: 'userId' })
    .exec();
  return result;
};
export const salesService = {
  createSaleIntoDB,
  getAllSalesIntoDB,
  getSalesBySellerIntoDB,
};
