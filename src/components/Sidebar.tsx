import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi";
import { TbCoins } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<aside className="hidden md:block w-[240px] bg-[#272B3A] max-h-screen h-full fixed top-0 left-0 overflow-y-auto py-4">
				<nav className="p-2 mt-[70px]">
					<p className="uppercase text-neutral-400 text-sm mb-3 p-2 pb-0">
						Main
					</p>
					<ul className="space-y-4">
						<li className="flex items-center gap-5 transition-colors hover:bg-[#1D202C] p-2 rounded-md cursor-pointer">
							<div className="icon bg-[#1D202C] p-2 rounded-md">
								<FaHome className="text-2xl" />
							</div>
							<p className="text-lg">Home</p>
						</li>
						<li onClick={() => setShowMenu(!showMenu)}>
							<div className="flex items-center gap-5 transition-colors hover:bg-[#1D202C] p-2 rounded-md cursor-pointer">
								<div className="icon bg-[#1D202C] p-2 rounded-md">
									<TbCoins className="text-2xl" />
								</div>
								<p>Offers</p>
								<MdArrowRight className="ml-10 text-2xl" />
							</div>

							<ul
								className={`${
									showMenu ? "flex" : "hidden"
								} flex-col py-2 px-6 gap-5`}
							>
								<li>All Offers</li>
								<li>(Games 11)</li>
								<li>(Install 0)</li>
								<li>(Sweepstake 0)</li>
								<li>(Free 97)</li>
							</ul>
						</li>
						<li className="flex items-center gap-5 transition-colors hover:bg-[#1D202C] p-2 rounded-md cursor-pointer">
							<div className="icon bg-[#1D202C] p-2 rounded-md">
								<IoCashOutline className="text-2xl" />
							</div>
							<p className="text-lg">Cashout</p>
						</li>
						<li className="flex items-center gap-5 transition-colors hover:bg-[#1D202C] p-2 rounded-md cursor-pointer">
							<div className="icon bg-[#1D202C] p-2 rounded-md">
								<PiRanking className="text-2xl" />
							</div>
							<p className="text-lg">Ranking</p>
						</li>
						<li className="flex items-center gap-5 transition-colors hover:bg-[#1D202C] p-2 rounded-md cursor-pointer">
							<div className="icon bg-[#1D202C] p-2 rounded-md">
								<RiMedalLine className="text-2xl" />
							</div>
							<p className="text-lg">Rewards</p>
						</li>
					</ul>
				</nav>
			</aside>
			<div className="dock dock-lg flex md:hidden">
				<button>
					<FaHome className="size-[1.2rem]" />
					<span className="dock-label">Home</span>
				</button>

				<button onClick={() => setShowMenu(!showMenu)}>
					<TbCoins className="size-[1.2rem]" />
					<span className="dock-label">Offers</span>

					<ul
						className={`${
							showMenu ? "flex" : "hidden"
						} justify-center items-center py-6 px-2 gap-4 fixed bottom-[70px] left-1/2 -translate-x-1/2 w-screen bg-[#373d50]`}
					>
						<li className="text-sm">All Offers</li>
						<li className="text-sm">(Games 11)</li>
						<li className="text-sm">(Install 0)</li>
						<li className="text-sm">(Sweepstake 0)</li>
						<li className="text-sm">(Free 97)</li>
					</ul>
				</button>

				<button>
					<IoCashOutline className="size-[1.2rem]" />
					<span className="dock-label">Cashout</span>
				</button>

				<button>
					<PiRanking className="size-[1.2rem]" />
					<span className="dock-label">Ranking</span>
				</button>

				<button>
					<RiMedalLine className="size-[1.2rem]" />
					<span className="dock-label">Rewards</span>
				</button>
			</div>
		</>
	);
};

export default Sidebar;
