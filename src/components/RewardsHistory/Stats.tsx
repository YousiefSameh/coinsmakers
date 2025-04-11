import { motion } from "framer-motion";
import { FaCoins, FaClock } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

interface StatsProps {
  totalBalance: number;
  totalEarnings: number;
  onHolding: number;
}

const Stats = ({ totalBalance, totalEarnings, onHolding }: StatsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#272B3A] p-6 rounded-lg shadow-lg border border-white/5"
      >
        <div className="flex items-center gap-3 mb-2">
          <IoWallet className="text-2xl text-secondary-color" />
          <h3 className="text-lg font-medium text-white">Total Balance</h3>
        </div>
        <p className="text-3xl font-bold text-white">
          {totalBalance} coins
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#272B3A] p-6 rounded-lg shadow-lg border border-white/5"
      >
        <div className="flex items-center gap-3 mb-2">
          <FaCoins className="text-2xl text-yellow-400" />
          <h3 className="text-lg font-medium text-white">Total Earnings</h3>
        </div>
        <p className="text-3xl font-bold text-white">
          {totalEarnings} coins
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#272B3A] p-6 rounded-lg shadow-lg border border-white/5"
      >
        <div className="flex items-center gap-3 mb-2">
          <FaClock className="text-2xl text-secondary-color" />
          <h3 className="text-lg font-medium text-white">On Holding</h3>
        </div>
        <p className="text-3xl font-bold text-white">{onHolding} coins</p>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
