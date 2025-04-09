import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ active, setActive ] = useState("about");
  return (
    <nav className="flex items-center gap-2 border-b border-gray-500 w-full overflow-x-auto px-2 md:p-0">
      <Link to="/profile" onClick={() => setActive("about")} className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-4 py-2.5 ${active === "about" ? "bg-secondary-color" : "bg-blue-middle"} text-base md:text-lg hover:bg-secondary-color rounded-t-sm`}>Home</Link>
      <Link to="/profile/update" onClick={() => setActive("update")} className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-4 py-2.5 ${active === "update" ? "bg-secondary-color" : "bg-blue-middle"} text-base md:text-lg hover:bg-secondary-color rounded-t-sm`}>Edit Profile</Link>
      <Link to="/profile/password" onClick={() => setActive("password")} className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-4 py-2.5 ${active === "password" ? "bg-secondary-color" : "bg-blue-middle"} text-base md:text-lg hover:bg-secondary-color rounded-t-sm`}>Change Password</Link>
      <Link to="/profile/twofactor" onClick={() => setActive("twofactor")} className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-4 py-2.5 ${active === "twofactor" ? "bg-secondary-color" : "bg-blue-middle"} text-base md:text-lg hover:bg-secondary-color rounded-t-sm`}>2-FA Authentication</Link>
      <Link to="/profile/account" onClick={() => setActive("account")} className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-4 py-2.5 ${active === "account" ? "bg-secondary-color" : "bg-blue-middle"} text-base md:text-lg hover:bg-secondary-color rounded-t-sm`}>Account Settings</Link>
    </nav>
  );
};

export default Navbar;
