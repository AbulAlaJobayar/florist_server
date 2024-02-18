import { Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userSchemaValidation } from "./user.validation";

const router=Router()
router.post("/register" ,validateRequest(userSchemaValidation.userValidation) ,userController.createUser)

export const userRouter = router;