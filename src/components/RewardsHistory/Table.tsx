import useRewardsHistory from "@hooks/useRewardsHistory";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Table = () => {
  const {
    filteredData,
    tableState,
    setTableState,
    paginatedData,
    totalPages,
    handleSort,
    getSortIcon,
  } = useRewardsHistory();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-[#272B3A] rounded-lg p-6 shadow-xl border border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Tab Navigation */}
        <div className="flex gap-4">
          {(["offers", "leaderboard", "daily"] as const).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setTableState((prev) => ({
                  ...prev,
                  activeTab: tab,
                  page: 1,
                }))
              }
              className={`px-4 py-2 rounded-md capitalize transition-colors cursor-pointer text-sm md:text-base ${
                tableState.activeTab === tab
                  ? "bg-secondary-color text-white shadow-lg"
                  : "bg-[#1d1e30] text-white/60 hover:text-white hover:bg-secondary-color/20"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Search and Page Size */}
        <div className="flex flex-wrap gap-4">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            className="relative"
          >
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search offers..."
              value={tableState.filter}
              onChange={(e) =>
                setTableState((prev) => ({
                  ...prev,
                  filter: e.target.value,
                  page: 1,
                }))
              }
              className="pl-10 pr-4 py-2 bg-[#1d1e30] rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary-color border border-white/5"
            />
          </motion.div>

          <motion.select
            whileHover={{ scale: 1.02 }}
            value={tableState.pageSize}
            onChange={(e) =>
              setTableState((prev) => ({
                ...prev,
                pageSize: Number(e.target.value),
                page: 1,
              }))
            }
            className="bg-[#1d1e30] text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-color border border-white/5"
          >
            {[10, 25, 50, 75, 100].map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </motion.select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-white/5 text-white"
                onClick={() => handleSort("offerName")}
              >
                <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Offer Name
                  {getSortIcon("offerName")}
                </div>
              </th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-white/5 text-white"
                onClick={() => handleSort("provider")}
              >
                <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Provider
                  {getSortIcon("provider")}
                </div>
              </th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-white/5 text-white"
                onClick={() => handleSort("reward")}
              >
                <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Reward
                  {getSortIcon("reward")}
                </div>
              </th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-white/5 text-white"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Date
                  {getSortIcon("date")}
                </div>
              </th>
              <th
                className="py-3 px-4 text-left cursor-pointer hover:bg-white/5 text-white"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
                  Status
                  {getSortIcon("status")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginatedData.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="py-3 px-4 text-white">{item.offerName}</td>
                  <td className="py-3 px-4 text-white">
                    <div className="flex items-center gap-2">
                      <span>{item.provider}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white">{item.reward} coins</td>
                  <td className="py-3 px-4 text-white">{item.date}</td>
                  <td className="py-3 px-4">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.status}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex items-center justify-between"
      >
        <p className="text-white/60 text-sm md:text-base">
          Showing {(tableState.page - 1) * tableState.pageSize + 1} to{" "}
          {Math.min(tableState.page * tableState.pageSize, filteredData.length)}{" "}
          of {filteredData.length} entries
        </p>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setTableState((prev) => ({ ...prev, page: prev.page - 1 }))
            }
            disabled={tableState.page === 1}
            className="px-4 py-2 rounded-md bg-[#1d1e30] text-white disabled:opacity-50 disabled:cursor-not-allowed border border-white/5 hover:bg-secondary-color/20 text-sm md:text-base"
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setTableState((prev) => ({ ...prev, page: prev.page + 1 }))
            }
            disabled={tableState.page === totalPages}
            className="px-4 py-2 rounded-md bg-[#1d1e30] text-white disabled:opacity-50 disabled:cursor-not-allowed border border-white/5 hover:bg-secondary-color/20 text-sm md:text-base"
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Table;
