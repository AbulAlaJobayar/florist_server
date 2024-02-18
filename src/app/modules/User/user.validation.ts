import { z } from 'zod';

const userValidation = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
    required_error: 'name must be required',
  }),
  image: z.string(),
  email: z.string().email(),
  // eslint-disable-next-line no-useless-escape
  password: z.string(),
});
export const userSchemaValidation = {
  userValidation,
};
