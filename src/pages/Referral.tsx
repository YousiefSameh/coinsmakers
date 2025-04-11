import React, { useState } from 'react';
import { QRCodeSVG } from "qrcode.react";
import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaPinterest,
  FaShare,
  FaCoins
} from 'react-icons/fa';
import SpecialHeading from '@components/shared/SpecialHeading';

interface CommissionHistory {
  id: number;
  date: string;
  user: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

const ReferralPage: React.FC = () => {
  const [referralStats] = useState({
    totalReferrals: 25,
    totalCommission: 1250.50
  });

  const [commissionHistory] = useState<CommissionHistory[]>([
    { id: 1, date: '2025-04-10', user: 'user123', amount: 50, status: 'Completed' },
    { id: 2, date: '2025-04-09', user: 'user456', amount: 75, status: 'Completed' },
    { id: 3, date: '2025-04-08', user: 'user789', amount: 100, status: 'Pending' },
  ]);

  const referralLink = 'https://coinsmarket.com/ref/yourusername';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied!');
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=Join%20me%20on%20CoinsMarket!&url=${encodeURIComponent(referralLink)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Join%20me%20on%20CoinsMarket!`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`Join me on CoinsMarket! ${referralLink}`)}`,
    email: `mailto:?subject=Join%20me%20on%20CoinsMarket&body=${encodeURIComponent(`Check out CoinsMarket: ${referralLink}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(referralLink)}&description=Join%20me%20on%20CoinsMarket!`
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="p-6 md:p-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SpecialHeading title="Referral Program" icon={<FaShare />} />

      {/* Statistics Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8"
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#272B3A] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-semibold mb-2">Total Referrals</h3>
          <p className="text-3xl font-bold text-secondary-color">
            {referralStats.totalReferrals}
          </p>
        </motion.div>
        <motion.div
          className="bg-[#272B3A] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-semibold mb-2">Total Commission</h3>
          <p className="text-3xl font-bold text-secondary-color flex items-center gap-2">
            {referralStats.totalCommission.toFixed(2)}
            <FaCoins className="text-yellow-500" />
          </p>
        </motion.div>
      </motion.div>

      {/* Referral Link Section */}
      <motion.div
        className="bg-[#272B3A] rounded-lg p-6 shadow-md mb-8"
        variants={containerVariants}
      >
        <h2 className="text-xl font-semibold mb-4">Your Referral Link</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-grow">
            <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-grow bg-transparent outline-none"
              />
              <motion.button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiCopy className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          <motion.div
            className="bg-white p-3 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <QRCodeSVG value={referralLink} size={128} />
          </motion.div>
        </div>

        {/* Social Sharing */}
        <motion.div
          className="mt-6"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-lg font-semibold mb-3">
            Share Your Referral Link
          </h3>
          <motion.div className="flex flex-wrap gap-4" variants={listVariants}>
            <motion.a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1DA1F2] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#4267B2] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0088cc] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#25D366] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-600 text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0077b5] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={shareLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#E60023] text-white rounded-full hover:opacity-90"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPinterest className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Commission History Table */}
      <motion.div
        className="bg-[#272B3A] rounded-lg p-6 shadow-md"
        variants={containerVariants}
      >
        <h2 className="text-xl font-semibold mb-4">Commission History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">User</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {commissionHistory.map((item) => (
                <motion.tr
                  key={item.id}
                  className="border-b dark:border-gray-700"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <td className="p-3 whitespace-nowrap">{item.date}</td>
                  <td className="p-3 whitespace-nowrap">{item.user}</td>
                  <td className="p-3 whitespace-nowrap">{item.amount} coins</td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReferralPage;
