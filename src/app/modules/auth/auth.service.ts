import httpStatus from 'http-status';
import comparePassword from '../../utils/comparePassword';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import AppError from '../../utils/AppError';
import { createToken, verifyToken } from '../../utils/tokenUtils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
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
    image: user.image,
    role: user.role,
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

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);
  console.log(decoded);
  const { id, name, email } = decoded;

  // checking if the user is exist
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not Found');
  }

  const userName = await User.findOne({ name: name });
  if (!userName) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not Found');
  }

  const userId = await User.findOne({ _id: id });
  if (!userId) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not Found');
  }
  const jwtPayload = {
    id: user._id,
    name: user.name,
    image: user.image,
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expire_in as string,
  );

  return {
    accessToken,
  };
};

export const authService = {
  loginUser,
  refreshToken,
};
