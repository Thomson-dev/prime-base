import React from "react";
import usdcoin from '../images/USDCoin.png'

const Hero = () => {
  return (
    <div className="bg-[#f9f3eb] ">
      <div className="flex  mx-[3rem] py-5 justify-between flex-col   md:flex-row  ">
        <div className="flex flex-col md:w-1/2 mt-20  ">
          <h1 className="text-[4rem] font-sans max-w-lg leading-[5rem] font-semibold">
            Rent us your Crypto, earn up to{" "}
            <span className="text-green-500">15% interest</span>
          </h1>
          <div className="mt-5">
            <p className="text-[25px] max-w-[30rem] leading-[37px] font-sans font-normal text-[#6a6d70]">
              Earn in Crypto or Stablecoins up to 15% per month, and withdraw
              your earnings as often as every 24 hours.
            </p>

            <div className="mt-[3rem]">
              <a
                href="#/"
                className="px-12 text-lg font-semibold py-3 text-white rounded-md bg-[#0c8444] hover:bg-green-600"
              >
                Start Renting
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  mt-28  px-5">
          <div className="md:max-w-3xl border  pl-6 pt-4 rounded-xl  h-[100%] bg-white shadow-lg">

            <div className="flex gap-5">
            <div className="max-w-[240px] bg-[#0c8444] p-1 flex space-x-5 h-30 rounded-lg">
              <div className="max-w-1/2 ">
                <p className="text-2xl text-[#c3ed8d] cursor-pointer font-bold">15%</p>
                <p className="text-base text-white" >Per month</p>
                <h1 className="mt-5 text-xl text-white font-semibold">USDCoin</h1>
              </div>
              <div className="max-w-1/2  pl-4 pt-2">
                <img src={usdcoin} alt="" className="w-[80%]" />
              </div>
            </div>

            <div className="max-w-[240px] bg-[#ddf2e7] p-1 flex space-x-5 h-30 rounded-lg">
              <div className="max-w-1/2 border">
                <p className="text-2xl text-black cursor-pointer font-bold">15%</p>
                <p className="text-base text-slate-500" >Per month</p>
                <h1 className="mt-5 text-xl text-slate-300 font-semibold">Tether</h1>
              </div>
              <div className="max-w-1/2  pt-2">
                <img src={usdcoin} alt="" className="w-[80%]" />
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
