import { Schema, model } from 'mongoose';

import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'please input your name'],
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'please input your valid Email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'please input strong password'],
      select: 0,
    },
    role: {
      type: String,
      enum: ['manager', 'seller'],
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_slat_round),
  );
  next();
});
export const User = model<TUser>('User', userSchema);
