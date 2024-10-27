import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productService } from './product.service';
import { Request, Response } from 'express';

const createProductIntoDB = catchAsync(async (req:Request, res:Response) => {
  const result = await productService.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Flower created successfully!',
    data: result,
  });
});

const getAllProductIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.getAllProductIntoDB(req.query);
  const { meta,filteredData:data } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flower retrieved successfully!',
    meta,
    data,
  });
});

const getSingleProductFromDB = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flower retrieved successfully!',
    data: result,
  });
});
const updateProductFromDB = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.updateProductFromDB(
    req.user,
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flower Update successfully!',
    data: result,
  });
});

const delateProductFromDB = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productService.delateProductFromDB(req.user, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flower delate successfully!',
    data: result,
  });
});
const bulkDelateFromDB = catchAsync(async (req, res) => {
  const result = await productService.bulkDeleteFromDB(req.user,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flowers delate successfully!',
    data: result,
  });
});
const totalProductFromDB = catchAsync(async (req, res) => {
  const result = await productService.totalProductFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flowers Count successfully!',
    data: result,
  });
});
export const productController = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductFromDB,
  updateProductFromDB,
  delateProductFromDB,
  bulkDelateFromDB,
  totalProductFromDB
};
