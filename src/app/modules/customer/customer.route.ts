import { Router } from "express";
import { CustomerController } from "./customer.controller";

const router=Router()
router.get('/customers',CustomerController.getAllCustomerFromDB)
router.get('/total_customer',CustomerController.totalCustomerFromDB)
export const CustomerRouter=router