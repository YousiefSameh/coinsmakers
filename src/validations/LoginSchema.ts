import { z } from "zod";

const loginSchema = z
  .object({
    identifier: z.string().min(1, { message: "Username or Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password must contain at least one special character",
      }),
  });

type LoginSchema = z.infer<typeof loginSchema>;

export { loginSchema, type LoginSchema };
