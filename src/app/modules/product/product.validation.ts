import { z } from 'zod';

const productValidation = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
    required_error: 'name must be required',
  }),
  price: z.number({
    invalid_type_error: 'price must be number',
    required_error: 'price must be required',
  }),
  quantity: z.number({
    invalid_type_error: 'quantity must be number',
    required_error: 'quantity must be required',
  }),

  bloomDate: z.string(),

  color: z.string({
    invalid_type_error: 'color must be string',
    required_error: 'color must be required',
  }),
  category: z.string({
    invalid_type_error: 'category must be string',
    required_error: 'category must be required',
  }),
  size: z.string({
    invalid_type_error: 'size must be string',
    required_error: 'size must be required',
  }),
  fragrance: z.string({
    invalid_type_error: 'fragrance must be string',
    required_error: 'fragrance must be required',
  }),
  image: z.string({
    invalid_type_error: 'fragrance must be string',
    required_error: 'fragrance must be required',
  }),
});
const updateProductValidation = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be string',
      required_error: 'name must be required',
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: 'price must be number',
      required_error: 'price must be required',
    })
    .optional(),
  quantity: z
    .number({
      invalid_type_error: 'quantity must be number',
      required_error: 'quantity must be required',
    })
    .optional(),
  bloomDate: z.string().optional(),
  color: z
    .string({
      invalid_type_error: 'color must be string',
      required_error: 'color must be required',
    })
    .optional(),
  category: z
    .string({
      invalid_type_error: 'category must be string',
      required_error: 'category must be required',
    })
    .optional(),
  size: z
    .string({
      invalid_type_error: 'size must be string',
      required_error: 'size must be required',
    })
    .optional(),
  fragrance: z
    .string({
      invalid_type_error: 'fragrance must be string',
      required_error: 'fragrance must be required',
    })
    .optional(),
  image: z
    .string({
      invalid_type_error: 'fragrance must be string',
      required_error: 'fragrance must be required',
    })
    .optional(),
  type: z
    .string({
      invalid_type_error: 'type must be string',
      required_error: 'type must be required',
    })
    .optional(),
});

export const productSchemaValidation = {
  productValidation,
  updateProductValidation,
};
