import React from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SpecialHeading from '@components/shared/SpecialHeading';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema, type ChangePasswordFormData } from '@validations/ChangePasswordSchema';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordFormData) => {
    // When Backend Is Ready Make This =>
    // dispatch(actChangePassword(data));
    console.log(data);
    reset();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-[95%] md:w-full mx-auto p-4">
      <SpecialHeading title="Change Password" icon={<FaLock />} />
      
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto space-y-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Current Password */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Current Password</label>
          <div className="mt-1">
            <input
              type="password"
              {...register('currentPassword')}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color bg-transparent"
            />
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
        </motion.div>

        {/* New Password */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">New Password</label>
          <div className="mt-1">
            <input
              type="password"
              {...register('newPassword')}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color bg-transparent"
            />
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>
        </motion.div>

        {/* Confirm New Password */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Confirm New Password</label>
          <div className="mt-1">
            <input
              type="password"
              {...register('confirmNewPassword')}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color bg-transparent"
            />
            {errors.confirmNewPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-secondary-color text-white py-2 px-4 rounded-md hover:bg-secondary-color/90 transition-colors duration-200"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Change Password
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ChangePassword;
