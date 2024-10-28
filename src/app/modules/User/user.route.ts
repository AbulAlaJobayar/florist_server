import { Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { userSchemaValidation } from "./user.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";

const router=Router()
router.post("/register" ,validateRequest(userSchemaValidation.userValidation) ,userController.createUser)
router.get("/total_seller",userController.totalSeller)
router.get("/:id",userController.getUserById)
router.post("/update",auth(USER_ROLE.seller, USER_ROLE.manager) ,userController.updateUserFromDB)

export const userRouter = router;