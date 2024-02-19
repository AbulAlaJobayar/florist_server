import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { authService } from './auth.service';
import config from '../../config';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: accessToken,
  });
});
export const authController = {
  loginUser,
};
