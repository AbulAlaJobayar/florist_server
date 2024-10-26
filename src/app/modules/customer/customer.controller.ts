import { Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { CustomerService } from './customer.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllCustomerFromDB = catchAsync(async (_req, res: Response) => {
  const result = await CustomerService.getAllCustomerFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'customer Data Retrieve successfully',
    data: result,
  });
});
export const CustomerController = {
  getAllCustomerFromDB,
};
