interface Coupon {
  code: string;
  date: string;
  reward: string;
  status: 'active' | 'used' | 'expired';
}

interface CouponState {
  coupons: Coupon[];
  loading: boolean;
  error: string | null;
}

interface ValidateCouponResponse {
  success: boolean;
  reward?: string;
  error?: string;
}

export { type Coupon, type CouponState, type ValidateCouponResponse };