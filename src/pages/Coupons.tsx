import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocalOffer } from 'react-icons/md';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { validateCoupon } from '@store/coupon/act/actValidateCoupon';
import SpecialHeading from '@components/shared/SpecialHeading';

const Coupons = () => {
  const [couponCode, setCouponCode] = useState('');
  const dispatch = useAppDispatch();
  const { coupons, loading, error } = useAppSelector((state) => state.coupon);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCode = couponCode.trim();
    if (!trimmedCode) return;

    // Check if coupon has already been used
    const existingCoupon = coupons.find(
      (coupon) => coupon.code.toLowerCase() === trimmedCode.toLowerCase()
    );

    if (existingCoupon) {
      // Don't dispatch if coupon already used
      setCouponCode('');
      return;
    }

    dispatch(validateCoupon(trimmedCode));
    setCouponCode('');
  };

  const getStatusMessage = () => {
    const trimmedCode = couponCode.trim();
    
    // Check for already used coupon first
    const existingCoupon = coupons.find(
      (coupon) => coupon.code.toLowerCase() === trimmedCode.toLowerCase()
    );
    
    if (existingCoupon) {
      return { 
        message: 'This coupon has already been used', 
        icon: <FaTimes />, 
        color: 'text-error' 
      };
    }

    if (loading) {
      return { message: 'Validating...', icon: null, color: 'text-base-content/60' };
    }
    if (error) {
      return { message: error, icon: <FaTimes />, color: 'text-error' };
    }
    if (coupons.length > 0 && coupons[0].code.toLowerCase() === trimmedCode.toLowerCase()) {
      return { message: 'Coupon applied successfully!', icon: <FaCheck />, color: 'text-success' };
    }
    return { message: '', icon: null, color: '' };
  };

  const statusInfo = getStatusMessage();

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <SpecialHeading title="Coupon Code" icon={<MdLocalOffer />} />
          <p className="text-base-content/60">Enter your coupon code to receive special rewards</p>
        </motion.div>

        {/* Coupon Input */}
        <motion.div variants={itemVariants}>
          <div className="bg-[#272B3A] rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="coupon" className="block text-sm font-medium text-base-content mb-2">
                  Enter Code
                </label>
                <input
                  type="text"
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="EXAMPLE123"
                  className="w-full p-3 bg-[#1d1e30] border border-base-300 rounded-md text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-secondary-color uppercase"
                  maxLength={15}
                />
              </div>

              {(loading || error || statusInfo.message) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 ${statusInfo.color}`}
                >
                  {statusInfo.icon}
                  <span>{statusInfo.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={!couponCode.trim() || loading}
                className={`w-full btn bg-secondary-color ${loading ? 'loading' : ''}`}
              >
                {loading ? 'Validating...' : 'Apply Coupon'}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Recent Coupons */}
        <motion.div variants={itemVariants} className="mt-8">
          <div className="bg-[#272B3A] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-base-content mb-4">Recent Coupons</h2>
            <div className="space-y-4">
              {coupons.length > 0 ? (
                coupons.map((coupon) => (
                  <div
                    key={coupon.code}
                    className="flex items-center justify-between p-3 bg-[#1d1e30] rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-base-content">{coupon.code}</p>
                      <p className="text-sm text-base-content/60">{coupon.date}</p>
                    </div>
                    <div className="text-secondary-color font-medium">{coupon.reward}</div>
                  </div>
                ))
              ) : (
                <p className="text-base-content/60 text-center py-4">No coupons redeemed yet</p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Coupons;
