import React from "react";
import calendar from "../images/calendar.2dbcde3db11dca71dfbb.webp";
import percentage from "../images/percent.b1cd67529f2bc04dc92d.webp";
import time from "../images/time.74be982918db7e2772c1.webp";
import { Bounce } from "react-awesome-reveal";

const Steps = () => {
  return (
    <div className="bg-[#f9f3eb] ">
      <div className="md:px-[7rem] px-[1rem] py-[5rem] ">
        <h1 className="md:text-[2.6rem]  text-3xl font-bold text-[#151515]">
          How to earn with Crypto
        </h1>

        <p className="text-[1.5rem] tracking-wide py-2 font-semibold text-[#7a7a8c]">
          Earn monthly returns with one of our Crypto Renting programs
        </p>

        <div className="md:flex flex-col justify-center items-center py-[3rem] space-y-5">
          
            <div className="flex space-x-12 flex-col md:flex-row items-center">
              <img src={calendar} alt="" />
              <div className="">
                <h1 className="md:text-3xl text-3xl font-semibold font-sans">
                  Open an account
                </h1>
                <p className="text-[20px] pt-2 font-sans font100 max-w-sm leading-8 tracking-wide text-[#7a7a8c]  ">
                  Quick and easy, it only takes a minute to open a Prime Base
                  account.
                </p>
              </div>
            </div>
          

            <div className="md:flex space-x-12 m:flex-col md:flex-row items-center">
              <img src={percentage} alt="" />
              <div className="">
                <h1 className="text-3xl font-semibold font-sans">
                  Choose your renting program
                </h1>
                <p className="text-[19px] pt-2 font-sans font100 max-w-sm leading-8 tracking-wide text-[#7a7a8c]  ">
                  Select the Crypto Renting program that best suits your goals
                  and needs.
                </p>
              </div>
            </div>
         

          
            <div className="flex space-x-12 flex-col md:flex-row items-center">
              <img src={time} alt="" />
              <div className="">
                <h1 className="text-3xl font-semibold font-sans">
                  Get paid every 24 hours
                </h1>
                <p className="text-[19px] pt-2 font-sans font100 max-w-sm leading-8 tracking-wide text-[#7a7a8c]  ">
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
