import { motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import SpecialHeading from "@components/shared/SpecialHeading";
import { countries } from "@utils/countries";
import Avatar from "@assets/Avatar.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateSchema, type UpdateFormData } from "@validations/UpdateSchema";

const Update = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: UpdateFormData) => {
    console.log(data);
  };

  return (
    <motion.div
      className="w-[95%] md:w-full mx-auto p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpecialHeading title="Update Profile" icon={<FaUser />} />

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 mt-8"
        variants={containerVariants}
      >
        {/* Image Upload */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="block text-sm font-medium">Profile Image</label>
          <div className="flex items-center space-x-4">
            <motion.img
              src={imagePreview ? imagePreview : Avatar}
              alt="Preview"
              className="w-24 h-24 rounded-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary-color file:text-white hover:file:bg-secondary-color/90"
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>

        {/* Name Fields */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
            />
            {errors.firstName && (
              <motion.p
                className="mt-1 text-sm text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.firstName.message}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
            />
            {errors.lastName && (
              <motion.p
                className="mt-1 text-sm text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.lastName.message}
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            {...register("mobileNumber")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
          />
          {errors.mobileNumber && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.mobileNumber.message}
            </motion.p>
          )}
        </motion.div>

        {/* Address Fields */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              {...register("address")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
            />
            {errors.address && (
              <motion.p
                className="mt-1 text-sm text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.address.message}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Region/State</label>
              <input
                type="text"
                {...register("region")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
              />
              {errors.region && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.region.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                {...register("city")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
              />
              {errors.city && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.city.message}
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">
                Zip/Postal Code
              </label>
              <input
                type="text"
                {...register("postalCode")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
              />
              {errors.postalCode && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.postalCode.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Country</label>
              <select
                {...register("country")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-secondary-color focus:outline-none focus:ring-secondary-color"
              >
                <option value="" className="bg-blue-middle">
                  Select a country
                </option>
                {countries.map((country) => (
                  <option
                    key={country.code}
                    className="bg-blue-dark"
                    value={country.code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <motion.p
                  className="mt-1 text-sm text-red-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.country.message}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            className="w-full bg-secondary-color text-white py-2 px-4 rounded-md hover:bg-secondary-color/90 transition-colors duration-200"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
          >
            Update Profile
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Update;
