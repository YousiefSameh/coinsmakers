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

	// Sample data for demonstration
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

		// Set initial data based on active tab
		setLeaderboardData(active === "month" ? monthlyData : dailyData);

		return () => clearInterval(timer);
	}, [active]);

	useEffect(() => {
		// Update data when active tab changes
		setLeaderboardData(active === "month" ? monthlyData : dailyData);
	}, [active]);

	const handleActive = (value: "month" | "day") => {
		setActive(value);
	};
	return (
		<>
			<section className="mb-8">
				<SpecialHeading title="Your Score" icon={<FaMedal />} />
				<div className="content mt-6">
					<div className="your-stats bg-[#2A2E3F] p-6 rounded-lg flex items-center justify-between">
						<div className="flex items-center gap-6">
							<button
								className={`btn btn-lg ${
									active === "day" ? "text-secondary-color" : "text-white"
								} bg-gray-700 border-none flex items-center gap-3 text-xl overflow-visible`}
								onClick={() => handleActive("day")}
							>
								<span className="flex items-center gap-1">
									0 <PiCoinVerticalFill className="text-yellow-400" />
								</span>{" "}
								<span>Day</span>
							</button>
							<button
								className={`btn btn-lg ${
									active === "month" ? "text-secondary-color" : "text-white"
								} bg-gray-700 border-none flex items-center gap-3 text-xl overflow-visible`}
								onClick={() => handleActive("month")}
							>
								<span className="flex items-center gap-1">
									0 <PiCoinVerticalFill className="text-yellow-400" />
								</span>{" "}
								<span>Month</span>
							</button>
						</div>
						<div className="flex flex-col items-center gap-1">
							<p className="text-white">
								You Earned 0 this {active === "month" ? "month" : "day"}
							</p>
							<p className="text-gray-400 text-sm">
								Server time: {currentTime.toLocaleTimeString()}
							</p>
						</div>
						<div className="right">
							<Link
								// to="/ranking/history"
								to="/"
								className="btn btn-lg btn-outline btn-success border-secondary-color text-secondary-color hover:bg-secondary-color hover:text-white"
							>
								History
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-8">
				<SpecialHeading
					title={`Leaderboard - ${active === "month" ? "Monthly" : "Daily"}`}
					icon={<FaMedal />}
				/>
				<div className="content mt-6">
					<div className="leaderboard-table">
						<table className="table table-zebra">
							<thead className="bg-secondary-color text-white">
								<tr>
									<th>Rank</th>
									<th>Name</th>
									<th>Coins</th>
									<th>Rewards</th>
								</tr>
							</thead>
							<tbody className="bg-base-100">
								{leaderboardData.map((entry) => (
									<tr key={entry.rank} className="hover:bg-base-200">
										<td>#{entry.rank}</td>
										<td>{entry.name}</td>
										<td>
											<div className="flex items-center gap-2">
												<span>{entry.coins}</span>
												<PiCoinVerticalFill className="text-yellow-400" />
											</div>
										</td>
										<td>
											<div className="flex items-center gap-2">
												<span>{entry.rewards}</span>
												<PiCoinVerticalFill className="text-yellow-400" />
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
};

export default Ranking;
