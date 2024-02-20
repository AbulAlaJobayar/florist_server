import { Router } from 'express';
import { salesController } from './sales.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
// import auth from "../../middleware/auth";

const router = Router();
router.post('/createSale', auth(USER_ROLE.manager,USER_ROLE.seller), salesController.createSalesIntoDB);
router.get('/allSales',auth(USER_ROLE.manager,USER_ROLE.seller), salesController.getAllSalesIntoDB);
export const salesRouter = router;
