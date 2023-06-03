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
    <div className="bg-[#f9f3eb] pb-[5rem] ">
      <div className="md:px-[2rem] lg:px-[4rem] px-4 md:py-[3rem] py-[1rem] md:flex justify-between">
        <div className="space-y-5 ">
          <div>
            <p className="  font-bold sm:leading-[60px] leading-[40px] font-sans  sm:text-[48px]  text-[32px] sm:max-w-[500px]">
              Rent us your Crypto, earn up to{" "}
              <span className="text-[#21a03d]">40% interest</span>
            </p>
          </div>

          <div className="max-w-[692px]">
            <p className=" text-[#6a6d70]   text-[18px] font-semibold md:text-[25px] max-w-[350px] md:max-w-[498px]  font-sans sm:leading-[37px] ">
              Earn in Crypto or Stablecoins up to 40% per month, and withdraw
              your earnings as often as every 24 hours.
            </p>
          </div>

          <button className="bg-[#21a03d] hidden sm:block hover:bg-[#2f6e3d] text-white rounded-md px-16 text-xl font-semibold py-3">
            Start Renting
          </button>
        </div>

        <div className="md:max-w-[535px] ">
          <Tab />
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
