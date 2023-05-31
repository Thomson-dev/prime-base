import React, { useState } from "react";
import Swipper from "./Swipper";
import CryptoTab from "./CryptoTab";
import StableTab from "./StableTab";

const Slider = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="background2">
      <div className=" px-[1rem] pb-8 sm:mx-[3rem] md:w-100 md:pb-[5rem]  md:px-[3rem] ">
        {/* <h1 className="text-red-500 sm:text-green-500 md:text-black lg:text-orange-600 ">
          Testing
        </h1> */}

        <div className="flex justify-center flex-col space-y-10 items-center py-[5rem]">
          <div className="">
            <h1 className="md:text-5xl text-3xl sm:text-5xl max-w-md text-center md:leading-10 text-white font-bold">
              We have 4 renting programs
            </h1>
          </div>
          <div className="max-w-[439px] h-[67px] flex justify-center items-center px-[1rem] bg-[#fefcf9] rounded-xl">
            <ul className="flex space-x-9 justify-center  items-center">
              <li>
                <button
                  onClick={() => toggleTab(1)}
                  className={` ${toggleState  === 1 ?  ' py-2 px-3 sm:px-6 rounded-lg  font-semibold bg-black text-white ' : ' text-lg font-semibold'}  `}
                >
                  Show all
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleTab(2)}
                  className={` ${toggleState  === 2 ?  ' py-2 px-3 sm:px-6 rounded-lg  font-semibold bg-black text-white ' : ' text-lg font-semibold'}  `}
                >
                  Crypto
                </button>
              </li>
              <li>
                <button
                  onClick={() => toggleTab(3)}
                  className= {` ${toggleState  === 3 ?  ' py-2 px-3 sm:px-6 rounded-lg  font-semibold bg-black text-white ' : ' text-lg font-semibold'}  `}
                >
                  Stablecoins
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
          <Swipper />
        </div>

        <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
          <CryptoTab />
        </div>

        <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
          <StableTab />
        </div>
      </div>
    </div>
  );
};

export default Slider;
