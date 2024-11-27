import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
      invalid_type_error: "name must be string",
    }),
    email: z.string({
      required_error: "email is required",
      invalid_type_error: "email must be string",
    }),
    password: z
      .string({
        required_error: "password is required",
      })
      .max(20, { message: "Password can not be more than 20 characters" }),
    phone: z.string({
      required_error: "phone is required",
      invalid_type_error: "phone must be string",
    }),

    // role: z.enum(['admin', 'user'], {
    //   required_error: 'role is required',
    // }),
  }),
});

export const userValidation = {
  userValidationSchema,
};
