import { Router } from 'express';
import { userRouter } from '../modules/User/user.route';
import { authRouter } from '../modules/auth/auth.route';
import { productRouter } from '../modules/product/product.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/product',
    route: productRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router
