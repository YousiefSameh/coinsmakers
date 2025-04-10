import { z } from "zod";

const registerSchema = z
.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password must contain at least one special character",
    }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
})
.refine((input) => input.password === input.confirmPassword, {
  message: "Password and Confirm Password does not match",
  path: ["confirmPassword"],
});

type RegisterSchema = z.infer<typeof registerSchema>;

export { registerSchema, type RegisterSchema };
