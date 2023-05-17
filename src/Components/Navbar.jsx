import primebase from "../images/primebase.png";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#1c2120] p-3 px-10 w-full ">
      <div className="">
        <div className="flex  items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <img src={primebase} className="w-[14%]" alt="" />
            <ul className="flex gap-6 clear-left font-semibold text-xl text-white">
              <li>Products</li>
              <li> Prime Blog</li>
            </ul>
          </div>

          <ul className="flex items-center  gap-5 w-[40%]">
            <li className="py-2 px-5 bg-white text-[#1c2120] text-lg font-semibold rounded-3xl">Open Account</li>
            <li className="text-lg text-white font-semibold">Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
