import { JwtPayload } from 'jsonwebtoken';
import { TCoupon } from './coupon.interface';
import { User } from '../User/user.model';
import AppError from '../../utils/AppError';
import httpStatus from 'http-status';
import { Coupon } from './coupon.model';

const createCoupon = async (userData: JwtPayload, payload: TCoupon) => {
  const { email } = userData;
  // find user
  const user = await User.findOne({ email: email });
  if (!(user?.role === 'manager')) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Manager can do it');
  }
  //   create coupon
  const result = await Coupon.create(payload);
  return result;
};

const verifyCoupon = async (payload: string) => {
  const result = await Coupon.findOne({ code: payload });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'this coupon is not valid');
  }
  return result;
};

export const couponService = {
  createCoupon,
  verifyCoupon
};
