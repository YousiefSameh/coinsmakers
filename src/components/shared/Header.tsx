import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Logo from "@assets/Logo.png";
import LogoSM from "@assets/LogoSM.png";
import Avatar from "@assets/Avatar.png";
import ChatSidebar from "../Chat/ChatSidebar";
import NotificationSidebar from "../Notifications/NotificationSidebar";
import { toggleChat } from "@store/chat/chatSlice";
import { toggleNotifications } from "@store/notifications/notificationsSlice";
import { FaBell, FaHistory, FaShare, FaUser } from "react-icons/fa";
import { FaCoins, FaRankingStar } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="navbar fixed z-40 top-0 left-0 w-full bg-[#272B3A] px-4 py-2">
        <div className="navbar-start">
          <img
            src={isMobile ? LogoSM : Logo}
            alt="Logo"
            className="w-[120px] md:w-[150px] object-contain"
          />
        </div>
        <div className="navbar-end flex items-center gap-4 md:gap-6">
          {user ? (
            <>
              <button
                onClick={() => dispatch(toggleChat())}
                className="btn btn-accent text-white !px-2 hidden md:block order-1"
                aria-label="Open Chat"
              >
                <IoChatboxEllipsesOutline className="sm:text-base md:text-[28px]" />
              </button>
              <button
                onClick={() => dispatch(toggleNotifications())}
                className="btn bg-transparent shadow-none border-none btn-ghost btn-circle md:order-2 order-last"
                aria-label="Notifications"
              >
                <div className="indicator">
                  <FaBell className="text-[24px]" />
                  <span className="badge bg-secondary-color badge-xs indicator-item">
                    3
                  </span>
                </div>
              </button>
              <button className="btn btn-sm md:btn-md border-none bg-transparent text-white !px-2 flex items-center gap-2 order-3">
                <span className="text-sm md:text-lg text-yellow-400">
                  <FaCoins />
                </span>
                <span className="text-sm md:text-lg font-bold">1000.00</span>
              </button>
              <div className="dropdown dropdown-end order-4">
                <label tabIndex={0} className="cursor-pointer">
                  <div className="avatar">
                    <div className="ring-secondary-color ring-offset-base-100 w-[30px] md:w-[40px] rounded-full ring ring-offset-2">
                      <img src={Avatar} alt="User Avatar" />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-4"
                >
                  <li>
                    <button
                      className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors"
                      onClick={() => navigate("/dashboard/profile")}
                    >
                      <FaUser />
                      Profile
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/rewards-history"
                      className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors"
                    >
                      <FaHistory />
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/referral"
                      className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors"
                    >
                      <FaShare />
                      Referral
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/ranking"
                      className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors"
                    >
                      <FaRankingStar />
                      Ranking
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center gap-4 p-3 hover:bg-base-200 rounded-lg transition-colors text-error">
                      <MdLogout />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/dashboard/register"
                className="btn btn-success md:w-[100px] text-white"
                aria-label="Register"
              >
                Register
              </Link>
              <Link
                to="/dashboard/login"
                className="btn btn-secondary md:w-[100px]"
                aria-label="Login"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </header>
      <ChatSidebar />
      <NotificationSidebar />
      <section
        className="titles mt-[75px] md:mt-[100px] z-10 flex items-center gap-4 px-4 pb-3 relative overflow-auto w-full"
        aria-label="User Titles"
      >
        {Array.from({ length: 9 }, (_, index) => index).map((index) => {
          return (
            <article
              key={index}
              className="min-w-[135px] sm:min-w-[160px] bg-[#2a2e3f] border-2 border-blue-light p-[5px] rounded-lg flex items-center justify-between cursor-pointer"
              aria-label={`User ${index + 1}`}
            >
              <img
                src={LogoSM}
                className="w-5 md:w-7.5"
                alt={`User ${index + 1} Avatar`}
              />
              <p className="text-[8px] sm:text-[9px] text-base-content/60">
                Robsn.
                <br />
                Admin. Gift.
              </p>
              <span
                className="badge badge-success text-white text-[8px] sm:text-[9px] py-[3px] px-[7px]"
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
