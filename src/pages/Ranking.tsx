import { motion, AnimatePresence } from "framer-motion";
import SpecialHeading from "@components/shared/SpecialHeading";
import { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";
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
  ];

  const dailyData = [
    { rank: 1, name: "David Wilson", coins: 150, rewards: 50 },
    { rank: 2, name: "Eva Davis", coins: 120, rewards: 40 },
    { rank: 3, name: "Frank Miller", coins: 90, rewards: 30 },
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

  // Animations
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    active: { scale: 1.05, backgroundColor: "#3A3F52" }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
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
    <div className="px-4 sm:px-6 lg:px-8">
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
      <section>
        <SpecialHeading
          title={`${active === "month" ? "Monthly" : "Daily"} Leaderboard`}
          icon={<FaMedal />}
        />
        <motion.table
          className="table table-zebra mt-6 rounded-lg overflow-x-auto"
          variants={tableVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="w-full min-w-[600px]">
            <motion.thead
              className="bg-secondary-color text-white"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              <tr>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Rank</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Name</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Coins</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Rewards</th>
              </tr>
            </motion.thead>

            <tbody className="divide-y divide-gray-700">
              <AnimatePresence>
                {leaderboardData.map((entry) => (
                  <motion.tr
                    key={entry.rank}
                    variants={rowVariants}
                    className="hover:bg-gray-700/20"
                  >
                    <td className="px-4 py-3 text-sm sm:text-base">#{entry.rank}</td>
                    <td className="px-4 py-3 text-sm sm:text-base">{entry.name}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm sm:text-base">
                        <span>{entry.coins}</span>
                        <PiCoinVerticalFill className="text-yellow-400" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm sm:text-base">
                        <span>{entry.rewards}</span>
                        <PiCoinVerticalFill className="text-yellow-400" />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.table>
      </section>
    </div>
  );
};

export default Ranking;