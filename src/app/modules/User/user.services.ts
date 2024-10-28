import { JwtPayload } from 'jsonwebtoken';
import { TUser } from './user.interface';
import { User } from './user.model';


const createUserIntoDB = async (payload: TUser) => {
  // set user role
  payload.role = 'seller';
  const result = await User.create(payload);
  // send response withOut password and role
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const { password, role, ...otherField } = result.toObject();
  return otherField;
};
const getUserById = async (id: string) => {
  const result = await User.findById({ _id: id });
  return result;
};

const totalSeller = async () => {
  const result = await User.find().countDocuments();
  return result;
};
const updateUserFromDB = async (id: JwtPayload, data: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const getMyProfileIntoDB = async (user: JwtPayload) => {
const result= await User.findById({_id:user.id})

return result
};

export const UserService = {
  createUserIntoDB,
  totalSeller,
  getUserById,
  updateUserFromDB,
  getMyProfileIntoDB
};
