import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { IoCashOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiRanking } from "react-icons/pi";
import { TbCoins } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			<aside
				className={`${
					showSidebar ? "block" : "hidden"
				} md:block w-[210px] md:w-[240px] bg-[#272B3A] max-h-screen h-full fixed top-0 left-0 overflow-y-auto py-4`}
			>
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
								<MdArrowRight className="ml-8 md:ml-10 text-2xl" />
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
				<button onClick={() => setShowSidebar(!showSidebar)}>
					<FaBars className={showSidebar ? "hidden" : "block size-[1.6rem]"} />
					<ImCancelCircle className={showSidebar ? "block size-[1.6rem]" : "hidden"} />
				</button>

				<button>
					<PiRanking className="size-[1.2rem]" />
					<span className="dock-label">Ranking</span>
				</button>

				<button>
					<RiMedalLine className="size-[1.2rem]" />
					<span className="dock-label">Rewards</span>
				</button>

				<button>
					<IoChatboxEllipsesOutline className="size-[1.2rem]" />
					<span className="dock-label">Chat</span>
				</button>
			</div>
		</>
	);
};

export default Sidebar;
