import { createAsyncThunk } from "@reduxjs/toolkit";
import { ValidateCouponResponse } from "@customTypes/CouponsTypes";

// Async thunk for validating coupon
export const validateCoupon = createAsyncThunk<ValidateCouponResponse, string>(
  'coupon/validate',
  async (code: string) => {
    try {
      // Replace with your actual API call
      const response = await new Promise<ValidateCouponResponse>((resolve) => {
        setTimeout(() => {
          // Mock validation logic
          if (code === 'WELCOME50') {
            resolve({
              success: true,
              reward: '50 Coins',
            });
          } else {
            resolve({
              success: false,
              error: 'Invalid coupon code',
            });
          }
        }, 1000);
      });
      return response;
    } catch {
      throw new Error('Failed to validate coupon');
    }
  }
);