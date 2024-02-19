import { z } from 'zod';

const loginValidation = z.object({
  email: z.string().email(),
  // eslint-disable-next-line no-useless-escape
  password: z.string(),
});
export const authValidation = {
  loginValidation,
};
