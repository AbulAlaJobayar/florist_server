import { USER_ROLE } from "./user.constant";

export type TUser = {
  name: string;
  image: string;
  email: string;
  role: 'manager' | 'seller';
  password: string;
  address:string;
  phoneNumber:string
};
export type TUserRole = keyof typeof USER_ROLE;