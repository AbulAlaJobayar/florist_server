import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.services';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'registered successfully',
    data: result,
  });
});
export const userController = {
  createUser,
};
