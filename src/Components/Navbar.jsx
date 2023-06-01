import Crypto from "../images/crypto.png";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
   

    <nav className="bg-[#1c2120] px-[2rem] md:px-[3rem] md:pr-[10rem] py-5 md:py-[1rem]">
      <div className="md:flex hidden w-full justify-between">
        <div className="flex gap-x-4 w-1/2  items-center">
          <img src={Crypto} className="w-[240px]" alt="" />
          {/* <ul className="flex gap-6 clear-left font-semibold w-full text-xl text-white">
            <li><a href="#/">Products</a> </li>
            <li><a href="#/">Prime Blog</a> </li>
          </ul> */}
        </div>

        <div className="flex gap-x-4   items-center">
          <ul className="flex items-center  gap-5 ">
            <button className="py-2 px-5 bg-white text-[#1c2120] text-lg font-semibold rounded-3xl">
              <a href="#/">Open Account</a>
            </button>
            <button className="text-lg text-white font-semibold">
              {" "}
              <a href="#/">Sign In</a>
            </button>
          </ul>
        </div>
      </div>

      <div className="flex md:hidden  justify-between items-center space-x-2 w-full ">
        <div className=" flex items-center w-[30%]  justify-center">
          <img src={Crypto} className="w-[200px] " alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" text-white   md:hidden  text-2xl cursor-pointer "
        >
          {open ? <HiX /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`absolute md:hidden top-[5.5rem] px-7 space-y-3 text-lg font-normal left-[-0.5rem] z-10 text-white bg-[#1c2120]  py-4 w-full
        ${open ? "left-[-0.5rem] duration-300 " : "left-[-110%] duration-300"}
        
        `}
        >
          <li><a href="#/">Open Account </a> </li>
          <li> <a href="#/">Sign In</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
