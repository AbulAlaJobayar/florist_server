import { Router } from "express";
import { CustomerController } from "./customer.controller";

const router=Router()
router.get('/customers',CustomerController.getAllCustomerFromDB)
export const CustomerRouter=router