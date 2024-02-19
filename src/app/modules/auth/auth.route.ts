import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";
import { authController } from "./auth.controller";

const router=Router()
router.post('/login',validateRequest(authValidation.loginValidation),authController.loginUser)
export const authRouter=router