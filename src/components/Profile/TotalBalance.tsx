import { FaChartPie, FaCheck, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import SpecialHeading from "@components/shared/SpecialHeading";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiCoinVerticalFill } from "react-icons/pi";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const TotalBalance = () => {
  const { cashouts } = useAppSelector((state) => state.cashout);
  const [cashoutTotal, setCashoutTotal] = useState<number>(0);
  const [DateString, setDateString] = useState("");

  const cardsData = [
    {
      bg: "bg-secondary-color",
      icon: <FaChartPie />,
      title: "Total Balance",
      value: "0.00",
    },
    {
      bg: "bg-secondary-color",
      icon: <FaChartPie />,
      title: "Total Withdrawals",
      value: "200.00",
    },
    {
      bg: "bg-secondary-color",
      icon: <FaCheck />,
      title: "Completed Offers",
      value: `${cashoutTotal}.00`,
    },
    {
      bg: "bg-secondary-color",
      icon: <FaClock />,
      title: "Pending Offers",
      value: "0.00",
    },
  ];

  useEffect(() => {
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setDateString(
      `${date.getFullYear()}-${days[date.getDay()]}-${date.getMonth()}`
    );
    const handleCalculateAmountOfCashouts = () => {
      if (!cashouts || cashouts.length === 0) {
        setCashoutTotal(0);
        return;
      }
      setCashoutTotal(
        cashouts.reduce((total, cashout) => total + Number(cashout.amount), 0)
      );
    };
    handleCalculateAmountOfCashouts();
  }, [cashouts]);
  return (
    <motion.section
      className="p-6 md:p-0 my-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SpecialHeading title="Balance Now" icon={<MdAccountBalanceWallet />} />

      <motion.div
        className="content mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className={`my-card ${card.bg} rounded-lg shadow-md flex flex-col gap-5 py-1`}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="my-card-body bg-blue-dark h-full py-4 flex items-center justify-evenly">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                className="text-4xl text-white"
              >
                {card.icon}
              </motion.div>

              <div className="card-footer flex flex-col gap-1">
                <motion.h3
                  className="text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="font-bold flex items-center gap-1 text-sm"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  {card.value}
                  <PiCoinVerticalFill className="text-yellow-400" />
                </motion.p>

                <motion.p
                  className="text-[10px] text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Last updated: {DateString}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TotalBalance;
