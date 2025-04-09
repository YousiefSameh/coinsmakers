import { z } from 'zod';

export const accountSettingsSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  isPublic: z.boolean(),
});

export type AccountSettingsFormData = z.infer<typeof accountSettingsSchema>;
