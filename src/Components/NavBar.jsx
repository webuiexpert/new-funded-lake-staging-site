// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "/assets/logo.webp";
import SecondaryButton from "./SecondaryButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white bg-transparent absolute left-0 right-0 z-[999]">
      <div
        className={`w-full sticky top-0 left-0 max-w-6xl mx-auto px-4 py-3 md:py-3 lg:px-0 lg:py-6  flex items-center justify-between ${
          isOpen
            ? "lg:bg-transparent bg-[var(--accent-color)]"
            : "bg-transparent"
        }`}
      >
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
            // { to: "#", label: "FOREX EXPO DUBAI" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `group relative overflow-hidden h-[24px] flex flex-col items-center font-semibold px-[15px] py-0 duration-300 ${
                  isActive ? "text-[var(--primary-color)]" : "text-white"
                } hover:text-[var(--primary-color)]`
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
          <SecondaryButton
            BtnText="Dashboard"
            BtnLink="https://fundedlakedashboard.propaccount.com/en/sign-in"
          />
          <SecondaryButton
            BtnText="GET FUNDED"
            BtnLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none flex border cursor-pointer py-[5px] px-2 rounded-[6px] gap-2 md:text-[16px] text-[14px] items-center"
        >
          <Menu className="w-6 h-6" /> MENU
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`lg:hidden mt-0 space-y-2 text-center flex flex-col px-4 pb-6 pt-4 items-start md:gap-4 gap-5 ${
            isOpen ? "bg-[var(--accent-color)]" : "bg-transparent"
          }`}
        >
          <NavLink
            to="/who-we-are"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--primary-color)] font-semibold duration-300 ${
                isActive ? "text-[var(--primary-color)]" : "text-white"
              }`
            }
          >
            WHO WE ARE
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--primary-color)] font-semibold duration-300 ${
                isActive ? "text-[var(--primary-color)]" : "text-white"
              }`
            }
          >
            FAQS
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `px-[15px] py-0 hover:text-[var(--primary-color)] font-semibold duration-300 ${
                isActive ? "text-[var(--primary-color)]" : "text-white"
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
          <div className="lg:flex space-y-4">
            <SecondaryButton
              BtnText="Dashboard"
              BtnLink="https://fundedlakedashboard.propaccount.com/en/sign-in"
            />
            <SecondaryButton
              BtnText="GET FUNDED"
              BtnLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
