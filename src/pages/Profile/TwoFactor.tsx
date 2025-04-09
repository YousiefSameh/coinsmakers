import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaKey, FaCopy, FaQrcode } from 'react-icons/fa';
import { QRCodeSVG } from "qrcode.react";
import SpecialHeading from '@components/shared/SpecialHeading';
import { toast } from 'react-toastify';

const TwoFactor = () => {
  const [showQR, setShowQR] = useState(false);
  const secretKey = 'ABCD EFGH IJKL MNOP'; // This should come from your backend

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(secretKey.replace(/\s/g, ''));
    toast.success('Secret key copied to clipboard!', {
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
      <SpecialHeading title="Two-Factor Authentication" icon={<FaKey />} />
      <motion.div variants={itemVariants} className="text-base-content/60 flex flex-col gap-0.5 mt-4">
        <p>
          <strong>Two factor authentication (2FA)</strong> strengthens access
          security by requiring two methods (also referred to as factors) to
          verify your identity.
        </p>
        <p>
          <strong>Two factor authentication</strong> protects against phishing,
          social engineering and password brute force attacks and secures your
          logins from attackers exploiting weak or stolen credentials.
        </p>
      </motion.div>

      <motion.div className="mt-4 space-y-6" variants={containerVariants}>
        <motion.div variants={itemVariants} className="rounded-lg">
          <h3 className="text-lg font-medium mb-4">Your Secret Key</h3>
          <div className="flex items-center space-x-4">
            <code className="bg-gray-800 px-4 py-2 rounded font-mono text-lg">
              {secretKey}
            </code>
            <motion.button
              onClick={copyToClipboard}
              className="p-2 bg-secondary-color text-white rounded-full hover:bg-secondary-color/90 cursor-pointer transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              title="Copy to clipboard"
            >
              <FaCopy />
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center space-x-2 px-4 py-2 bg-secondary-color text-white rounded-md hover:bg-secondary-color/90 cursor-pointer transition-colors duration-200"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaQrcode />
            <span>{showQR ? "Hide" : "Show"} QR Code</span>
          </motion.button>

          {showQR && (
            <motion.div
              className="mt-4 bg-white p-4 inline-block rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <QRCodeSVG
                value={`otpauth://totp/CoinsMarket:user@example.com?secret=${secretKey.replace(
                  /\s/g,
                  ""
                )}&issuer=CoinsMarket`}
                size={200}
                level="H"
              />
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="prose prose-invert max-w-none"
        >
          <h3>Setup Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Install Google Authenticator or any other TOTP app on your mobile
              device
            </li>
            <li>
              Copy the secret key or scan the QR code using your authenticator
              app
            </li>
            <li>
              Enter the 6-digit code from your authenticator app when signing in
            </li>
          </ol>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TwoFactor;
