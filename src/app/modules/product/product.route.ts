import { Router } from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { productSchemaValidation } from './product.validation';
import { productController } from './product.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();
router.post(
  '/create-flower',
  auth(USER_ROLE.manager),
  validateRequest(productSchemaValidation.productValidation),
  productController.createProductIntoDB,
);
router.get('/flowers', productController.getAllProductIntoDB);
router.get(
  '/:id',
  auth(USER_ROLE.seller, USER_ROLE.manager),
  productController.getSingleProductFromDB,
);
router.patch(
  '/:id',
  auth(USER_ROLE.manager),
  validateRequest(productSchemaValidation.updateProductValidation),
  productController.updateProductFromDB,
);
router.delete('/:id',auth(USER_ROLE.manager), productController.delateProductFromDB);
router.post('/delateMany', auth(USER_ROLE.manager), productController.bulkDelateFromDB);

export const productRouter = router;
