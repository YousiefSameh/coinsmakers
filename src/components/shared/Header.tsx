import Logo from "@assets/Logo.png";
import LogoSM from "@assets/LogoSM.png";
import Avatar from "@assets/Avatar.png";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logout } from "@store/auth/AuthSlice";
import { FaBell } from "react-icons/fa";

const Header = () => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);
	return (
		<>
			<header className="navbar fixed z-50 top-0 left-0 w-full bg-[#272B3A] px-4 py-2">
				<div className="navbar-start">
					<img
						src={Logo}
						className="Logo w-[100px] md:w-[180px]"
						alt="Coins Market Logo"
					/>
				</div>
				<nav
					className="navbar-center hidden lg:flex"
					aria-label="Main Navigation"
				></nav>
				<div className="navbar-end flex items-center gap-4 md:gap-6">
					{user ? (
						<>
							<button
								className="btn btn-accent text-white !px-2 hidden md:block"
								aria-label="Open Chat"
							>
								<IoChatboxEllipsesOutline className="text-[28px]" />
							</button>
							<div className="dropdown dropdown-end">
								<label tabIndex={0} className="cursor-pointer">
									<div className="avatar">
										<div className="ring-secondary-color ring-offset-base-100 w-[40px] rounded-full ring ring-offset-2">
											<img src={Avatar} alt="User Avatar" />
										</div>
									</div>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<Link to="/profile" aria-label="Profile">
											Profile
										</Link>
									</li>
									<li>
										<button
											onClick={() => dispatch(logout())}
											aria-label="Logout"
										>
											Logout
										</button>
									</li>
								</ul>
							</div>
							<button
								className="btn btn-secondary text-white !px-2 hidden md:block"
								aria-label="Notifications"
							>
								<span className="text-[28px]"><FaBell /></span>
							</button>
						</>
					) : (
						<>
							<Link
								to="/register"
								className="btn btn-success md:w-[100px] text-white"
								aria-label="Register"
							>
								Register
							</Link>
							<Link
								to="/login"
								className="btn btn-secondary md:w-[100px]"
								aria-label="Login"
							>
								Login
							</Link>
						</>
					)}
				</div>
			</header>
			<section
				className="titles mt-[100px] z-10 flex items-center gap-4 px-4 pb-3 relative overflow-auto w-full"
				aria-label="User Titles"
			>
				{Array.from({ length: 9 }, (_, index) => index).map((index) => {
					return (
						<article
							key={index}
							className="min-w-[160px] bg-[#2a2e3f] border-2 border-blue-light p-[5px] rounded-lg flex items-center justify-between cursor-pointer"
							aria-label={`User ${index + 1}`}
						>
							<img
								src={LogoSM}
								className="w-7.5"
								alt={`User ${index + 1} Avatar`}
							/>
							<p className="text-[10px] text-base-content/60">
								Robsn.
								<br />
								Admin. Gift.
							</p>
							<span
								className="badge badge-success text-white text-[10px] py-[3px] px-[7px]"
								aria-label="Balance"
							>
								$200.00
							</span>
						</article>
					);
				})}
			</section>
		</>
	);
};

export default Header;
