import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
const ToggleButton = ({ toggle, setToggle }) => {
  return (
    <div className="flex flex-row cursor-pointer"
      onClick={() => setToggle(!toggle)}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="mt-auto w-[28px] h-[28px] object-contain invert-[75]"
      />
      {!toggle && <p className="ml-3 text-[22px]">MENU</p>}
    </div>
  )
}

const Navbar = ({ isLogo = false, cur = "" }) => {
  const location = useLocation();
  const temp = location.pathname.trim().replace(/[^a-zA-Z0-9]/g, '');

  const [active, setActive] = useState(temp);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex flex-row flex-start  ${isLogo ? "py-2" : "py-6"} items-center navbar`}>
      <div className="justify-end items-center w-[50%]">
        {!toggle &&
          <ToggleButton toggle={toggle} setToggle={setToggle} />
        }

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-[0] left-0 w-[20%] h-full min-w-[140px] sidebar`}
        >
          <div className="absolute top-[2rem] left-[10rem]">
            <ToggleButton toggle={toggle} setToggle={setToggle} />
          </div>
          <ul className="list-none flex justify-end justify-between items-start flex-1 flex-col float-left h-[50%] mt-[6rem]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins hover:text-[#FB7712] font-medium cursor-pointer text-[20px] ${active === nav.id ? "text-[#FB7712]" : "text-black"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.id)
                }}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] ${active === nav.title ? "text-stone-900" : "text-stone-500"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul> */}
      {isLogo && <img src={logo} className="w-[120px] translate-x-[-60px]" />}
    </nav>
  );
};

export default Navbar;
