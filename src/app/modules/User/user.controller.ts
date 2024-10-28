import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.services';
import sendResponse from '../../utils/sendResponse';
import { Request, Response } from 'express';

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'registered successfully',
    data: result,
  });
});
const getUserById = catchAsync(async (req, res) => {
  const result = await UserService.getUserById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user retrieved successfully',
    data: result,
  });
});
const totalSeller = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.totalSeller();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'total seller retrieve successfully',
    data: result,
  });
});
const updateUserFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;
  const result = await UserService.updateUserFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Updated successfully',
    data: result,
  });
});
const getMe = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;

  const result = await UserService.getMe(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Profile Retrieved Successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  totalSeller,
  getUserById,
  updateUserFromDB,
  getMe
};
