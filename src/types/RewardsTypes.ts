export interface RewardStats {
  totalEarnings: number;
  totalBalance: number;
  onHolding: number;
}

export interface RewardHistoryItem {
  id: string;
  offerName: string;
  provider: string;
  reward: number;
  date: string;
  status: 'completed' | 'pending' | 'rejected';
  type: 'offers' | 'leaderboard' | 'daily';
}

export interface RewardsHistoryState {
  stats: RewardStats;
  history: RewardHistoryItem[];
  loading: boolean;
  error: string | null;
}

export interface TableState {
  page: number;
  pageSize: number;
  sortField: keyof RewardHistoryItem;
  sortDirection: 'asc' | 'desc';
  filter: string;
  activeTab: 'all' | 'offers' | 'leaderboard' | 'daily';
}
