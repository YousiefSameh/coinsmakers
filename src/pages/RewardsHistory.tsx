import SpecialHeading from "@components/shared/SpecialHeading";
import Stats from "@components/RewardsHistory/Stats";
import Table from "@components/RewardsHistory/Table";
import useRewardsHistory from "@hooks/useRewardsHistory";
import { LuMedal } from "react-icons/lu";

const RewardsHistory = () => {
  const { stats } = useRewardsHistory();

  return (
    <div className="p-6 md:p-0">
      <div className="space-y-8">
        <SpecialHeading title="Rewards History" icon={<LuMedal />} />
        {/* Stats Section */}
        <Stats { ...stats } />
        {/* Table Section */}
        <Table />
      </div>
    </div>
  );
};

export default RewardsHistory;
