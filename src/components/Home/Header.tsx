import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-dark bg-opacity-90 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={Logo}
            className="h-12"
            alt="Coinsmakers"
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          {["Home", "Earn Money", "Games", "Surveys", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium transition-colors text-main-color hover:text-secondary-color"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/dashboard/login" className="hidden md:inline-flex px-4 py-2 rounded-md font-medium hover:text-black transition-colors bg-transparent border border-secondary-color text-secondary-color hover:bg-secondary-color cursor-pointer">
            Log In
          </Link>
          <Link to="/dashboard/register" className="px-4 py-2 rounded-md font-medium text-black transition-colors hover:bg-transparent border border-secondary-color hover:text-secondary-color bg-secondary-color cursor-pointer">
            Register
          </Link>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;