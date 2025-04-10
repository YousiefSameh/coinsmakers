import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCog, FaTrash } from 'react-icons/fa';
import SpecialHeading from '@components/shared/SpecialHeading';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSettingsSchema, type AccountSettingsFormData } from '@validations/AccountSettingsSchema';
import { toast } from 'react-toastify';

const AccountSettings = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountSettingsFormData>({
    resolver: zodResolver(accountSettingsSchema),
    defaultValues: {
      id: 'coinsmakers_user11210', // This should come from your backend
      email: 'user@example.com', // This should come from your backend
      username: 'YousiefSameh20', // This should come from your backend
      isPublic: false,
    },
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const onSubmit = (data: AccountSettingsFormData) => {
    // When Backend Is Ready Make This =>
    // dispatch(actUpdateAccountSettings(data));
    console.log(data);
    toast.success('Settings updated successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleDeleteAccount = () => {
    // When Backend Is Ready Make This =>
    // dispatch(actDeleteAccount());
    console.log('Account deletion requested');
    toast.success('Account deletion requested', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <motion.div
      className="w-[95%] md:w-full mx-auto p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SpecialHeading title="Account Settings" icon={<FaCog />} />

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
        variants={containerVariants}
      >
        {/* Account ID */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Account ID</label>
          <input
            type="text"
            {...register("id")}
            readOnly
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-blue-middle focus:border-secondary-color focus:outline-none focus:ring-secondary-color cursor-not-allowed"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
          />
          {errors.email && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Username */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            {...register("username")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
          />
          {errors.username && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.username.message}
            </motion.p>
          )}
        </motion.div>

        {/* Public Profile Toggle */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between p-4 bg-[#2a2e3f] rounded-lg"
        >
          <div className="flex flex-col">
            <label className="text-base-content font-medium">Public Profile</label>
            <span className="text-sm text-base-content/60">Others can see your profile</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-base-content/60">ON</span>
            <input
              type="checkbox"
              {...register("isPublic")}
              className="toggle toggle-primary"
            />
            <span className="text-xs text-base-content/60">OFF</span>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            className="w-full bg-secondary-color text-white py-2 px-4 rounded-md hover:bg-secondary-color/90 cursor-pointer transition-colors duration-200"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Save Changes
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Delete Account Section */}
      <motion.div
        variants={itemVariants}
        className="mt-12 pt-6 border-t border-gray-600"
      >
        <h3 className="text-lg font-medium text-red-500">Danger Zone</h3>
        <p className="mt-2 text-base-content/70 text-sm">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>

        <div className="mt-4">
          {!showDeleteConfirm ? (
            <motion.button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaTrash />
              <span>Delete Account</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <p className="text-red-500 font-medium">
                Are you sure you want to delete your account?
              </p>
              <div className="flex space-x-4">
                <motion.button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Yes, Delete My Account
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccountSettings;
