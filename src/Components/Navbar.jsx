import primebase from "../images/primebase.png";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <nav className="bg-[#1c2120] p-3 px-10 w-full ">
    //   <div className="">
    //     <div className="flex  items-center justify-between">
    //       <div className="flex gap-x-4 items-center">
    //         <img src={primebase} className="w-[20%]" alt="" />
    //         <ul className="flex gap-6 clear-left font-semibold text-xl text-white">
    //           <li>Products</li>
    //           <li> Prime Blog</li>
    //         </ul>
    //       </div>

    //       <ul className="flex items-center  gap-5 ">
    //         <li className="py-2 px-5 bg-white text-[#1c2120] text-lg font-semibold rounded-3xl">Open Account</li>
    //         <li className="text-lg text-white font-semibold">Sign In</li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-[#1c2120] px-[1rem] md:px-[5rem] py-[1rem]">
      <div className="md:flex hidden w-full justify-between">
        <div className="flex gap-x-4 w-1/2  items-center">
          <img src={primebase} className="w-[20%]" alt="" />
          <ul className="flex gap-6 clear-left font-semibold w-full text-xl text-white">
            <li>Products</li>
            <li> Prime Blog</li>
          </ul>
        </div>

        <div className="flex gap-x-4   items-center">
          <ul className="flex items-center  gap-5 ">
            <li className="py-2 px-5 bg-white text-[#1c2120] text-lg font-semibold rounded-3xl">
              Open Account
            </li>
            <li className="text-lg text-white font-semibold">Sign In</li>
          </ul>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center space-x-10 w-full ">
        <div
          onClick={() => setOpen(!open)}
          className=" text-white  md:hidden  text-4xl cursor-pointer "
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>

        <div className=" flex items-center  justify-center">
          <img src={primebase} className="w-[50%]" alt="" />
        </div>


        <div className="w-[100%] flex  items-center justify-center ">
          <a href="/#" className="py-2 px-6 rounded-3xl font-semibold  bg-white">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
