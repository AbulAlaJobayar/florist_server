import { Router } from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';

const router = Router();
router.post(
  '/login',
  validateRequest(authValidation.loginValidation),
  authController.loginUser,
);
router.post('/refresh-token', authController.refreshToken);
export const authRouter = router;
