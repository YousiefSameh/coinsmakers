import { z } from 'zod';

export const updateSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  mobileNumber: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must be less than 15 digits')
    .regex(/^[+]?[\d\s-]+$/, 'Invalid phone number format'),
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must be less than 100 characters'),
  region: z
    .string()
    .min(2, 'Region must be at least 2 characters')
    .max(50, 'Region must be less than 50 characters'),
  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),
  postalCode: z
    .string()
    .min(4, 'Postal code must be at least 4 characters')
    .max(10, 'Postal code must be less than 10 characters')
    .regex(/^[A-Za-z\d\s-]+$/, 'Invalid postal code format'),
  country: z.string().min(2, 'Please select a country'),
  image: z
    .instanceof(FileList)
    .optional()
    .refine((files) => {
      if (files && files.length > 0) {
        const file = files[0];
        // Check file type
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!validTypes.includes(file.type)) {
          return false;
        }
        // Check file size (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
          return false;
        }
        return true;
      }
      return true;
    }, 'Image must be jpg, png, gif, or webp and less than 5MB'),
});

export type UpdateFormData = z.infer<typeof updateSchema>;
