import { Customer } from "./customer.model"

const getAllCustomerFromDB=async()=>{
const result=await Customer.find().populate({path:"productId"}).exec()
return result
}
const totalCustomerFromDB=async()=>{
    const result=await Customer.countDocuments()
    return result
}

export const CustomerService ={
getAllCustomerFromDB,
totalCustomerFromDB
}