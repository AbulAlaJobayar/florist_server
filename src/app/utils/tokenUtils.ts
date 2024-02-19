/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Types } from 'mongoose';
type TJwtPayload = {
  id: Types.ObjectId;
  name: string;
  image:string;
  email: string;
  role:'manager'|'seller'
};
export const createToken = (
  jwtPayload: TJwtPayload,
  secret: string,
  expireIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn: expireIn });
};
export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
