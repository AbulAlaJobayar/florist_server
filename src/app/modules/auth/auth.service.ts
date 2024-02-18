import { TLoginUser } from './auth.interface';

const loginUser = (payload: TLoginUser) => {
  return payload;
};
export const auth = {
  loginUser,
};
