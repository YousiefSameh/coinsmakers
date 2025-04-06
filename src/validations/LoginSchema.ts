import { z } from "zod";

const loginSchema = z
.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email Address is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password must contain at least one special character",
    }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export { loginSchema, type LoginSchema };
