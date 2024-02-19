import { JwtPayload } from 'jsonwebtoken';
import QueryBuilder from '../../builder/QueryBuilder';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { User } from '../User/user.model';
import AppError from '../../utils/AppError';
import httpStatus from 'http-status';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductIntoDB = async (query: any) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search([
      'name',
      'price',
      'bloomDate',
      'quantity',
      'color',
      'category',
      'size',
      'fragrance',
      'type',
    ])
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();
  return {
    result,
    meta,
  };
};
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductFromDB = async (
  userData: JwtPayload,
  id: string,
  payload: Partial<TProduct>,
) => {
  const { id: tokenId, name, email } = userData;
  const user = await User.findOne({ _id: tokenId });
  if (!user?.email === email) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!user?.name === name) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }
  if (!(user?.role === 'manager')) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Only manager is allowed');
  }
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const delateProductFromDB = async (userData: JwtPayload, id: string) => {
  const { id: tokenId, name, email } = userData;
  const user = await User.findOne({ _id: tokenId });
  if (!user?.email === email) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!user?.name === name) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }
  if (!(user?.role === 'manager')) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Only manager is allowed');
  }
  await Product.findByIdAndDelete(id);
  return null;
};
const bulkDeleteFromDB = async (userData: JwtPayload, itemIds: string[]) => {
  const { id: tokenId, name, email } = userData;
  const user = await User.findOne({ _id: tokenId });
  if (!user?.email === email) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (!user?.name === name) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }
  if (!(user?.role === 'manager')) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Only manager is allowed');
  }
  const result = await Product.deleteMany({ _id: { $in: itemIds } });
  return result.deletedCount;
};
export const productService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductFromDB,
  updateProductFromDB,
  delateProductFromDB,
  bulkDeleteFromDB
};
