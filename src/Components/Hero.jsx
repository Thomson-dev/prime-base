/** @format */

import React from "react";
import usdcoin from "../images/USDCoin.png";
import Marquee from "react-fast-marquee";
import img1 from "../images/logo-cointelegraph.f10eec32227a19039d0ba6c9d16115ce-1.png";
import img2 from "../images/logo-daily-express.69803bbbb689a79f2e1370095ec034b9-1.png";
import img3 from "../images/logo-forbes.531fe76f95a0227161f643934e4223aa-1-1.png";
import img4 from "../images/logo-bloomberg.18b32aeabc29aeeceaf7805d654c2320-1.png";
import Tab from "./Tab";

const data = [
  {
    id: 1,
    img: img1,
  },

  {
    id: 2,
    img: img2,
  },

  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img3,
  },
];
const Hero = () => {
  return (
    // <div className="bg-[#f9f3eb] ">
    //   <div className="flex  mx-[3rem] py-5 justify-between flex-col   md:flex-row  ">
    //     <div className="flex flex-col md:w-1/2 mt-20  ">
    //       <h1 className="text-[4rem] font-sans max-w-lg leading-[5rem] font-semibold">
    //         Rent us your Crypto, earn up to{" "}
    //         <span className="text-green-500">15% interest</span>
    //       </h1>
    //       <div className="mt-5">
    //         <p className="text-[25px] max-w-[30rem] leading-[37px] font-sans font-normal text-[#6a6d70]">
    //           Earn in Crypto or Stablecoins up to 15% per month, and withdraw
    //           your earnings as often as every 24 hours.
    //         </p>

    //         <div className="mt-[3rem]">
    //           <a
    //             href="#/"
    //             className="px-12 text-lg font-semibold py-3 text-white rounded-md bg-[#0c8444] hover:bg-green-600"
    //           >
    //             Start Renting
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="md:w-1/2  mt-28  px-5">
    //       <div className="md:max-w-3xl border  pl-6 pt-4 rounded-xl  h-[100%] bg-white shadow-lg">

    //         <div className="flex gap-5">
    //         <div className="max-w-[240px] bg-[#0c8444] p-1 flex space-x-5 h-30 rounded-lg">
    //           <div className="max-w-1/2 ">
    //             <p className="text-2xl text-[#c3ed8d] cursor-pointer font-bold">15%</p>
    //             <p className="text-base text-white" >Per month</p>
    //             <h1 className="mt-5 text-xl text-white font-semibold">USDCoin</h1>
    //           </div>
    //           <div className="max-w-1/2  pl-4 pt-2">
    //             <img src={usdcoin} alt="" className="w-[80%]" />
    //           </div>
    //         </div>

    //         <div className="max-w-[240px] bg-[#ddf2e7] p-1 flex space-x-5 h-30 rounded-lg">
    //           <div className="max-w-1/2 border">
    //             <p className="text-2xl text-black cursor-pointer font-bold">15%</p>
    //             <p className="text-base text-slate-500" >Per month</p>
    //             <h1 className="mt-5 text-xl text-slate-300 font-semibold">Tether</h1>
    //           </div>
    //           <div className="max-w-1/2  pt-2">
    //             <img src={usdcoin} alt="" className="w-[80%]" />
    //           </div>
    //         </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#f9f3eb] pb-[5rem] ">
      <div className="md:px-[2rem] lg:px-[4rem] px-4 md:py-[3rem] py-[1rem] md:flex ">
        <div className="md:w-1/2  sm:pr-[2rem] md:pr-[4rem] space-y-5">
          <h1 className="  font-semibold font-sans  text-3xl md:text-6xl lg:leading-[5rem] md:leading-[5rem]">
            Rent us your Crypto, earn up to{" "}
            <span className="text-green-600">15% interest</span>
          </h1>

          <p className="text-gray-600 font-sans text-lg font-semibold md:text-2xl  md:leading-[37px] ">
            Earn in Crypto or Stablecoins up to 15% per month, and withdraw your
            earnings as often as every 24 hours.
          </p>

          <button className="bg-[#0c8444] hidden md:block hover:bg-green-600 text-white rounded-md px-16 text-xl font-semibold py-3">
            Start Renting
          </button>
        </div>

        <div className="md:w-1/2">
          <Tab/>
        </div>
      </div>

      <div className="mt-[2rem] ">
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="mx-10">
            <img src={img1} className="md:w-[100%] w-[70%]" alt="" />
          </div>

          <div className="mx-10">
            <img src={img2} className="md:w-[100%]  w-[70%]" alt="" />
          </div>

          <div className="mx-10">
            <img src={img3} className="md:w-[100%] w-[70%]" alt="" />
          </div>

          <div className="mx-10">
            <img src={img4} className="md:w-[100%] w-[70%]" alt="" />
          </div>
          <div className="mx-10">
            <img src={img1} className="md:w-[100%] w-[70%]" alt="" />
          </div>
          <div className="mx-10">
            <img src={img2} className="md:w-[100%] w-[70%]" alt="" />
          </div>
          <div className="mx-10">
            <img src={img3} className="md:w-[100%] w-[70%]" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
