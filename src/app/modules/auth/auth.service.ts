import httpStatus from 'http-status';
import comparePassword from '../../utils/comparePassword';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import AppError from '../../utils/AppError';
import { createToken } from '../../utils/tokenUtils';
import config from '../../config';

const loginUser = async(payload: TLoginUser) => {

 const user = await User.findOne({ email: payload.email }).select('+password');
 if (!user) {
   throw new AppError(httpStatus.NOT_FOUND, 'User is not Found');
 }
 // check password
 const password = comparePassword(payload.password, user.password);
 if (!password) {
   throw new AppError(httpStatus.FORBIDDEN, 'Your password is incorrect');
 }
 const jwtPayload = {
   id: user._id,
   name: user.name,
   image:user.image,
   role:user.role,
   email: user.email,
 };
 // create access Token
 const accessToken = createToken(
   jwtPayload,
   config.jwt_access_secret,
   config.jwt_access_expire_in,
 );
 const refreshToken = createToken(
   jwtPayload,
   config.jwt_refresh_secret,
   config.jwt_refresh_expire_in,
 );
 return {
   accessToken,
   refreshToken,
 };
};
export const authService = {
  loginUser,
};
