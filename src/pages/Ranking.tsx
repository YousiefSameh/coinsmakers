import { motion, AnimatePresence } from "framer-motion";
import SpecialHeading from "@components/shared/SpecialHeading";
import { useEffect, useState } from "react";
import { FaCrown, FaMedal } from "react-icons/fa";
import { PiCoinVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Ranking = () => {
  const [active, setActive] = useState<"month" | "day">("day");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [leaderboardData, setLeaderboardData] = useState<
    { rank: number; name: string; coins: number; rewards: number }[]
  >([]);

  // Sample data
  const monthlyData = [
    { rank: 1, name: "Alice Smith", coins: 1500, rewards: 500 },
    { rank: 2, name: "Bob Johnson", coins: 1200, rewards: 400 },
    { rank: 3, name: "Charlie Brown", coins: 900, rewards: 300 },
    { rank: 4, name: "David Wilson", coins: 800, rewards: 200 },
    { rank: 5, name: "Eva Davis", coins: 700, rewards: 100 },
  ];

  const dailyData = [
    { rank: 1, name: "Frank Miller", coins: 300, rewards: 150 },
    { rank: 2, name: "Grace Wilson", coins: 250, rewards: 120 },
    { rank: 3, name: "Henry Davis", coins: 200, rewards: 100 },
    { rank: 4, name: "Ivy Johnson", coins: 180, rewards: 90 },
    { rank: 5, name: "Jack Brown", coins: 150, rewards: 75 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    setLeaderboardData(active === "month" ? monthlyData : dailyData);
    return () => clearInterval(timer);
  }, [active]);

  const handleActive = (value: "month" | "day") => {
    setActive(value);
  };

  const topThree = leaderboardData.filter(item => item.rank <= 3);
  const remaining = leaderboardData.filter(item => item.rank > 3);

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    active: { scale: 1.05, backgroundColor: "#3A3F52" }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const podiumVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-6 sm:p-6 lg:px-6 lg:py-0">
      {/* Stats Section */}
      <section className="mb-8">
        <SpecialHeading title="Your Score" icon={<FaMedal />} />
        <motion.div
          className="bg-[#2A2E3F] mt-6 p-4 sm:p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={statsVariants}
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <motion.button
              className={`btn text-sm sm:text-base ${
                active === "day" ? "text-secondary-color" : "text-gray-300"
              } bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 w-full sm:w-auto`}
              onClick={() => handleActive("day")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={active === "day" ? "active" : ""}
            >
              <div className="flex items-center gap-2">
                <span>0</span>
                <PiCoinVerticalFill className="text-yellow-400 text-lg" />
                <span>Daily</span>
              </div>
            </motion.button>

            <motion.button
              className={`btn text-sm sm:text-base ${
                active === "month" ? "text-secondary-color" : "text-gray-300"
              } bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 w-full sm:w-auto`}
              onClick={() => handleActive("month")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={active === "month" ? "active" : ""}
            >
              <div className="flex items-center gap-2">
                <span>0</span>
                <PiCoinVerticalFill className="text-yellow-400 text-lg" />
                <span>Monthly</span>
              </div>
            </motion.button>
          </div>

          <div className="text-center md:text-left">
            <p className="text-white text-sm sm:text-base mb-1">
              Earned 0 {active === "month" ? "this month" : "today"}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              {currentTime.toLocaleTimeString()}
            </p>
          </div>

          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/history"
              className="btn btn-outline text-secondary-color border-secondary-color hover:bg-secondary-color hover:text-white w-full sm:w-auto text-sm sm:text-base"
            >
              View History
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Leaderboard Section */}
      <section className="mb-8">
        <SpecialHeading
          title={`${active === "month" ? "Monthly" : "Daily"} Leaderboard`}
          icon={<FaMedal />}
        />

        {/* Podium Stages - Mobile First */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-8 items-end"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          {/* 2nd Place - Shows first on mobile */}
          <motion.div
            className="bg-panel-bg border-t-8 border-gray-300 h-48 md:h-60 rounded-t-xl p-4 md:p-6 flex flex-col items-center justify-center w-full order-1"
            variants={podiumVariants}
          >
            <FaMedal className="text-4xl md:text-5xl text-gray-300 mb-2 md:mb-4" />
            <h3 className="text-white text-[10px] md:text-xl font-bold text-center">
              {topThree[1]?.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-base md:text-2xl text-gray-300">
                {topThree[1]?.rewards}
              </span>
              <PiCoinVerticalFill className="text-gray-300 text-base md:text-xl" />
            </div>
            <div className="badge badge-silver mt-2 border border-gray-300 text-gray-300 text-xs md:text-sm">
              2nd
            </div>
          </motion.div>

          {/* 1st Place - Center on mobile */}
          <motion.div
            className="bg-panel-bg border-t-8 border-yellow-400 h-56 md:h-80 rounded-t-xl p-4 md:p-6 flex flex-col items-center justify-center w-full order-2"
            variants={podiumVariants}
          >
            <FaCrown className="text-5xl md:text-6xl text-yellow-400 mb-2 md:mb-4" />
            <h3 className="text-white text-sm md:text-2xl font-bold text-center">
              {topThree[0]?.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg md:text-3xl text-yellow-400">
                {topThree[0]?.rewards}
              </span>
              <PiCoinVerticalFill className="text-yellow-400 text-lg md:text-2xl" />
            </div>
            <div className="badge badge-gold mt-2 border border-yellow-400 text-yellow-400 text-xs md:text-sm">
              1st
            </div>
          </motion.div>

          {/* 3rd Place - Shows last on mobile */}
          <motion.div
            className="bg-panel-bg border-t-8 border-amber-600 h-40 md:h-48 rounded-t-xl p-4 md:p-6 flex flex-col items-center justify-center w-full order-3"
            variants={podiumVariants}
          >
            <FaMedal className="text-3xl md:text-4xl text-amber-600 mb-2 md:mb-4" />
            <h3 className="text-white text-[8px] md:text-lg font-bold text-center">
              {topThree[2]?.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm md:text-xl text-amber-600">
                {topThree[2]?.rewards}
              </span>
              <PiCoinVerticalFill className="text-amber-600 text-sm md:text-lg" />
            </div>
            <div className="badge badge-bronze mt-2 border border-amber-600 text-amber-600 text-xs md:text-sm">
              3rd
            </div>
          </motion.div>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          className="mt-8 bg-gray-800 rounded-lg overflow-x-auto"
          variants={tableVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="w-full min-w-[600px] md:min-w-full">
            <thead className="bg-secondary-color">
              <tr>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left text-gray-300 text-sm md:text-base">
                  Rank
                </th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left text-gray-300 text-sm md:text-base">
                  Name
                </th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left text-gray-300 text-sm md:text-base">
                  Coins
                </th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left text-gray-300 text-sm md:text-base">
                  Rewards
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <AnimatePresence>
                {remaining.map((entry) => (
                  <motion.tr
                    key={entry.rank}
                    variants={rowVariants}
                    className="hover:bg-gray-700/30"
                  >
                    <td className="px-4 py-3 md:px-6 md:py-4 text-gray-300 text-sm md:text-base">
                      #{entry.rank}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-white text-sm md:text-base">
                      {entry.name}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center gap-2 text-sm md:text-base">
                        <span className="text-gray-300">{entry.coins}</span>
                        <PiCoinVerticalFill className="text-yellow-400" />
                      </div>
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4">
                      <div className="flex items-center gap-2 text-sm md:text-base">
                        <span className="text-gray-300">{entry.rewards}</span>
                        <PiCoinVerticalFill className="text-yellow-400" />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>
      </section>
    </div>
  );
};

export default Ranking;