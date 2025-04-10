import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coupon, CouponState } from '@customTypes/CouponsTypes';
import { validateCoupon } from './act/actValidateCoupon';

const initialState: CouponState = {
  coupons: [],
  loading: false,
  error: null,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    addCoupon: (state, action: PayloadAction<Coupon>) => {
      state.coupons.unshift(action.payload);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(validateCoupon.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          const newCoupon: Coupon = {
            code: action.meta.arg,
            date: new Date().toISOString().split('T')[0],
            reward: action.payload.reward!,
            status: 'used',
          };
          state.coupons.unshift(newCoupon);
        } else {
          state.error = action.payload.error || 'Unknown error occurred';
        }
      })
      .addCase(validateCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to validate coupon';
      });
  },
});

export const { addCoupon, clearError } = couponSlice.actions;
export default couponSlice.reducer;
