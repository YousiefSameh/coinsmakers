import Logo from "@assets/Logo.png";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const Header = () => {
	return (
		<div className="navbar fixed z-50 top-0 left-0 w-full bg-[#272B3A] px-4 py-2">
			<div className="navbar-start">
        <img src={Logo} className="Logo w-[100px] md:w-[180px]" alt="Logo" />
      </div>
			<div className="navbar-center hidden lg:flex"></div>
			<div className="navbar-end flex items-center gap-4 md:gap-6">
        <button className="btn btn-accent text-white !px-2 hidden md:block"><IoChatboxEllipsesOutline className="text-[28px]" /></button>
				<a className="btn btn-success md:w-[100px] text-white">Register</a>
				<a className="btn btn-secondary md:w-[100px]">Login</a>
			</div>
		</div>
	);
};

export default Header;
