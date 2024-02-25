import { Router } from "express";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../User/user.constant";
import { validateRequest } from "../../middleware/validateRequest";
import { couponValidation } from "./coupon.validation";
import { couponController } from "./coupon.controller";

const router= Router()
router.post('/createCoupon', auth(USER_ROLE.manager),validateRequest(couponValidation.couponSchemaValidation), couponController.createCouponIntoDB);
router.get('/verify', auth(USER_ROLE.manager,USER_ROLE.seller), couponController.verifyCoupon);

export const couponRouter=router