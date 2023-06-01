/** @format */

import React, { useEffect } from "react";
import calendar from "../images/calendar.2dbcde3db11dca71dfbb.webp";
import percentage from "../images/percent.b1cd67529f2bc04dc92d.webp";
import time from "../images/time.74be982918db7e2772c1.webp";
import AOS from 'aos';
import "aos/dist/aos.css";

const Steps = () => {
  useEffect(() => {
    AOS.init({
      duration:600,
  
    });

}, []);
  return (
    <div className="bg-[#f9f3eb] ">
      <div className="lg:px-[4rem] md:px-[2rem] px-[1rem] md:py-[5rem] py-2 ">
        <h1 className=" md:text-[2.6rem]  text-[20px] font-semibold text-[#151515]">
          How to earn with Crypto
        </h1>

        <p className=" md:text-[1.4rem]  text-[17px] tracking-wide md:py-2 py-1 font-semibold text-[#7a7a8c]">
          Earn monthly returns with one of our Crypto Renting programs
        </p>
        {/* <h1 className="text-red-500 sm:text-green-500 md:text-black lg:text-orange-600 ">
          Testing
        </h1> */}
        <div data-aos ="fade-up" className="   md:flex flex-col justify-center   items-center py-[3rem] space-y-5">
          
            <div className="flex md:space-x-12 space-x-4   flex-col md:flex-row items-center">
              <img src={calendar} alt="" />
              <div className="">
                <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold font-sans">
                  Open an account
                </h1>
                <p className="md:text-[20px] sm:text-[19px] text-[18px] md:pt-2 pt-1 font-sans font100 max-w-sm  md:leading-8 tracking-wide text-[#7a7a8c]  ">
                  Quick and easy, it only takes a minute to open a Prime Base
                  account.
                </p>
              </div>
            </div>
         

          
            <div data-aos ="fade-up" className="md:flex flex-col md:space-x-12 space-x-4  sm:pl-[10rem]  pl-1 md:pl-0   md:flex-row items-center">
              <img src={percentage} alt="" />
              <div className="">
                <h1 className="md:text-3xl text-xl font-semibold font-sans">
                  Choose your renting program
                </h1>
                <p className="md:text-[19px] sm:text-[19px] text-[18px] md:pt-2 pt-1 font-sans font100 max-w-sm md:leading-8 tracking-wide text-[#7a7a8c]  ">
                  Select the Crypto Renting program that best suits your goals
                  and needs.
                </p>
              </div>
            </div>
          

         
            <div data-aos ="fade-up" className="flex  md:space-x-12 space-x-4 flex-col md:flex-row items-center">
              <img src={time} alt="" />
              <div className="">
                <h1 className="md:text-3xl text-xl font-semibold font-sans">
                  Get paid every 24 hours
                </h1>
                <p className="md:text-[19px] sm:text-[19px] text-[18px] md:pt-2 pt-1 font-sans font100 max-w-sm leading-8 tracking-wide text-[#7a7a8c]  ">
                  Get paid for renting your Cryptos to Prime Base and withdraw
                  your gains as often as once every 24 hours.
                </p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Steps;
