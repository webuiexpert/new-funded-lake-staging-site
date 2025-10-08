// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--accent-color)] text-white shadow-md font-lexend sticky -top-[1px] z-[8888]">
      <div className="w-full max-w-6xl mx-auto px-4 py-3 md:py-3 lg:px-0 lg:py-6  flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold flex items-center space-x-2 hover:scale-110 duration-300"
        >
          <img className="md:w-[180px] w-[160px]" src={logo} alt="logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          {[
            { to: "/who-we-are", label: "WHO WE ARE" },
            { to: "/faqs", label: "FAQS" },
            { to: "/contact-us", label: "CONTACT US" },
            { to: "/forex-expo", label: "FOREX EXPO DUBAI" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `group relative overflow-hidden h-[24px] flex flex-col items-center font-semibold px-[15px] py-0 duration-300 ${
                  isActive ? "text-[var(--color-primary)]" : "text-white"
                } hover:text-[var(--color-primary)]`
              }
            >
              {/* first (visible) */}
              <span className="transition-all duration-300 ease-in-out group-hover:mt-[-20px]">
                {label}
              </span>

              {/* second (slides up) */}
              <span className="transition-all duration-300 ease-in-out group-hover:mt-[-5px]">
                {label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-2">
          <a
            href="https://fundedlakedashboard.propaccount.com/en/sign-in"
            className="bg-[var(--accent-color)] border rounded-full hover:bg-white hover:text-black duration-300 text-white px-4 py-2 font-bold text-sm"
          >
            DASHBOARD
          </a>
          <a
            href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
            className="border rounded-full bg-[#032070] hover:bg-white hover:text-black duration-300 text-white px-4 py-2 font-bold text-sm"
          >
            GET FUNDED
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none flex bg-[var(--color-primary)] cursor-pointer py-[5px] px-2 rounded-[4px] gap-2 md:text-[16px] text-[14px] items-center"
        >
          <Menu className="w-6 h-6" /> MENU
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-3 space-y-2 text-center flex flex-col md:items-center md:justify-center md:px-0 px-4 pb-6 items-start md:gap-4 gap-5">
          <NavLink
            to="/who-we-are"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--color-primary)] font-semibold duration-300 ${
                isActive ? "text-[var(--color-primary)]" : "text-white"
              }`
            }
          >
            WHO WE ARE
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--color-primary)] font-semibold duration-300 ${
                isActive ? "text-[var(--color-primary)]" : "text-white"
              }`
            }
          >
            FAQS
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--color-primary)] font-semibold duration-300 ${
                isActive ? "text-[var(--color-primary)]" : "text-white"
              }`
            }
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="/forex-expo"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-white hover:bg-primary duration-300 ${
                isActive ? "bg-primary text-white" : "text-white"
              }`
            }
          >
            FOREX EXPO DUBAI
          </NavLink>
          {/* <a className='px-[15px] py-0 hover:text-white hover:bg-primary duration-300' href="https://fundedlakedashboard.propaccount.com/en/affiliates" target='_blank'>AFFILIATE PROGRAM</a> */}
          {/* Buttons */}
          <div className="lg:flex space-x-2">
            <a
              href="https://fundedlakedashboard.propaccount.com/en/sign-in"
              className="bg-[var(--accent-color)] border rounded-full hover:bg-white hover:text-black duration-300 text-white px-4 py-2 font-bold text-sm"
            >
              DASHBOARD
            </a>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
              className="border rounded-full bg-[#032070] hover:bg-white hover:text-black duration-300 text-white px-4 py-2 font-bold text-sm"
            >
              GET FUNDED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
