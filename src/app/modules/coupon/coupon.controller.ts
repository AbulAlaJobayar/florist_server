import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { couponService } from "./coupon.service";
import sendResponse from "../../utils/sendResponse";

const createCouponIntoDB = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await couponService.createCoupon(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Coupon successfully created',
    data: result,
  });
});
const verifyCoupon = catchAsync(async (req, res) => {
  const {coupon}=req.body
        const result = await couponService.verifyCoupon(coupon);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Coupon retrieved successfully!',
    data: result,
  });
});
export const couponController = {
        createCouponIntoDB,
        verifyCoupon     
};
