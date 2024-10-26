import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  // set user role
  payload.role = 'seller';
  const result = await User.create(payload);
  // send response withOut password and role
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const {password,role,...otherField}=result.toObject()
  return otherField;
};
const totalSeller=async()=>{
  const result= await User.find().countDocuments()
  return result
}

export const UserService = {
  createUserIntoDB,
  totalSeller
};
