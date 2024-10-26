import { Customer } from "./customer.model"

const getAllCustomerFromDB=async()=>{
const result=await Customer.find().populate({path:"productId"}).exec()
return result
}

export const CustomerService ={
getAllCustomerFromDB
}