import Logo from "@assets/Logo.png";
import LogoSM from "@assets/LogoSM.png";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Header = () => {
	return (
		<>
			<div className="navbar fixed z-50 top-0 left-0 w-full bg-[#272B3A] px-4 py-2">
				<div className="navbar-start">
					<img src={Logo} className="Logo w-[100px] md:w-[180px]" alt="Logo" />
				</div>
				<div className="navbar-center hidden lg:flex"></div>
				<div className="navbar-end flex items-center gap-4 md:gap-6">
					<button className="btn btn-accent text-white !px-2 hidden md:block">
						<IoChatboxEllipsesOutline className="text-[28px]" />
					</button>
					<a className="btn btn-success md:w-[100px] text-white">Register</a>
					<a className="btn btn-secondary md:w-[100px]">Login</a>
				</div>
			</div>
			<div className="titles mt-[100px] z-10 flex items-center gap-4 px-4 pb-3 relative overflow-auto w-full">
				{Array.from({ length: 9 }, (_, index) => index).map((index) => {
					return (
						<div
							key={index}
							className="min-w-[160px] bg-[#2a2e3f] border-2 border-blue-light p-[5px] rounded-lg flex items-center justify-between cursor-pointer"
						>
							<img src={LogoSM} className="w-7.5" alt="Avatar" />
							<p className="text-[10px] text-base-content/60">
								Robsn.
								<br />
								Admin. Gift.
							</p>
							<span className="badge badge-success text-white text-[10px] py-[3px] px-[7px]">
								$200.00
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Header;
