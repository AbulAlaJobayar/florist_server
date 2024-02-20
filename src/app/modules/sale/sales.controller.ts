import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { salesService } from "./sales.service";

const createSalesIntoDB = catchAsync(async (req, res) => {
  console.log(req.body)
  const result = await salesService.createSaleIntoDB(req.user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'sells successfully created',
    data: result,
  });
});

const getAllSalesIntoDB = catchAsync(async (req, res) => {
  const result = await salesService.getAllSalesIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sales Retrieved successfully',
    data: result,
  });
});
export const salesController = {
  createSalesIntoDB,
  getAllSalesIntoDB,
};
