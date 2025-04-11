import { useState, useMemo } from "react";
import type { RewardHistoryItem, TableState } from "@customTypes/RewardsTypes";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
const mockData: RewardHistoryItem[] = [
  {
    id: "1",
    offerName: "Survey King",
    provider: "PayPal",
    reward: 50,
    date: "2025-04-11",
    status: "completed",
    type: "offers",
  },
  {
    id: "2",
    offerName: "Survey King",
    provider: "AdMob",
    reward: 70,
    date: "2025-05-11",
    status: "pending",
    type: "offers",
  },
  {
    id: "3",
    offerName: "Survey King",
    provider: "PayPal",
    reward: 120,
    date: "2026-04-11",
    status: "rejected",
    type: "offers",
  },
  {
    id: "4",
    offerName: "Daily Login",
    provider: "System",
    reward: 10,
    date: "2025-04-11",
    status: "completed",
    type: "daily",
  },
  {
    id: "5",
    offerName: "Top 10 Weekly",
    provider: "System",
    reward: 100,
    date: "2025-04-10",
    status: "pending",
    type: "leaderboard",
  },
  {
    id: "6",
    offerName: "Video Watch",
    provider: "AdMob",
    reward: 25,
    date: "2025-04-11",
    status: "completed",
    type: "offers",
  },
  {
    id: "7",
    offerName: "App Install - Candy Crush",
    provider: "PayPal",
    reward: 200,
    date: "2025-04-09",
    status: "pending",
    type: "offers",
  },
  {
    id: "8",
    offerName: "Daily Streak Bonus",
    provider: "System",
    reward: 15,
    date: "2025-04-10",
    status: "completed",
    type: "daily",
  },
  {
    id: "9",
    offerName: "Monthly Tournament",
    provider: "System",
    reward: 500,
    date: "2025-04-08",
    status: "pending",
    type: "leaderboard",
  },
  {
    id: "10",
    offerName: "Sign Up Bonus",
    provider: "PayPal",
    reward: 30,
    date: "2025-04-07",
    status: "completed",
    type: "offers",
  },
  {
    id: "11",
    offerName: "Daily Challenge",
    provider: "System",
    reward: 20,
    date: "2025-04-09",
    status: "rejected",
    type: "daily",
  },
  {
    id: "12",
    offerName: "Weekly Competition",
    provider: "System",
    reward: 250,
    date: "2025-04-06",
    status: "completed",
    type: "leaderboard",
  },
  {
    id: "13",
    offerName: "Survey - Gaming Habits",
    provider: "AdMob",
    reward: 85,
    date: "2025-04-08",
    status: "rejected",
    type: "offers",
  },
  {
    id: "14",
    offerName: "Daily Quiz",
    provider: "System",
    reward: 12,
    date: "2025-04-07",
    status: "completed",
    type: "daily",
  },
  {
    id: "15",
    offerName: "Top Player Bonus",
    provider: "System",
    reward: 300,
    date: "2025-04-05",
    status: "completed",
    type: "leaderboard",
  },
];

const useRewardsHistory = () => {
  const [tableState, setTableState] = useState<TableState>({
    page: 1,
    pageSize: 10,
    sortField: "date",
    sortDirection: "desc",
    filter: "",
    activeTab: "offers",
  });

  const stats = {
    totalBalance: 850,
    totalEarnings: 1250,
    onHolding: 400,
  };

  const filteredData = useMemo(() => {
    return mockData
      .filter((item) => {
        if (
          tableState.activeTab !== "all" &&
          item.type !== tableState.activeTab
        )
          return false;
        if (!tableState.filter) return true;
        return (
          item.offerName
            .toLowerCase()
            .includes(tableState.filter.toLowerCase()) ||
          item.provider.toLowerCase().includes(tableState.filter.toLowerCase())
        );
      })
      .sort((a, b) => {
        const field = tableState.sortField;
        const direction = tableState.sortDirection === "asc" ? 1 : -1;
        return a[field] > b[field] ? direction : -direction;
      });
  }, [tableState]);

  const paginatedData = useMemo(() => {
    const start = (tableState.page - 1) * tableState.pageSize;
    return filteredData.slice(start, start + tableState.pageSize);
  }, [filteredData, tableState.page, tableState.pageSize]);

  const totalPages = Math.ceil(filteredData.length / tableState.pageSize);

  const handleSort = (field: keyof RewardHistoryItem) => {
    setTableState((prev) => ({
      ...prev,
      sortField: field,
      sortDirection:
        prev.sortField === field && prev.sortDirection === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const getSortIcon = (field: keyof RewardHistoryItem) => {
    if (tableState.sortField !== field)
      return <FaSort className="text-base-content/40" />;
    return tableState.sortDirection === "asc" ? (
      <FaSortUp className="text-secondary-color" />
    ) : (
      <FaSortDown className="text-secondary-color" />
    );
  };
  return { filteredData, tableState, setTableState, stats, paginatedData, totalPages, handleSort, getSortIcon };
};

export default useRewardsHistory;
