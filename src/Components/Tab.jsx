import React, { useState } from "react";
import usdcoin from "../images/USDCoin.png";
import Tether from "../images/Tether.png";
import Ethereum from "../images/Tether-1.png";
import bankCar from "../images/bank-car.webp";
import { Switch } from "antd";
import bitcoin from "../images/1024px-Bitcoin.svg.png";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="">
      <div className="flex space-x-10 ">
        <button
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1
              ? "py-3 px-4 bg-[#f5f1ec]  font-semibold text-xl shadow-sm  text-green-600   rounded-t-xl "
              : " py-5 px-6 text-xl"
          }`} 
        >
          Stablecoins
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`${
            toggleState ===2
              ? "py-5 px-6 bg-[#f5f1ec]  font-semibold text-xl shadow-sm   text-green-600   rounded-t-xl "
              : " py-5 px-7 text-xl"
          }`}
        >
          Crypto
        </button>
      </div>
      <div
        className={`content1 max-w-[100%] border px-[2rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-[70vh] ${
          toggleState === 1 ? "block" : "hidden"
        }`}
      >
        <div className="flex space-x-6 ">
          <div className="w-[50%] border rounded-lg bg-[#0c8444] space-x-8 py-2 px-4 flex ">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-green-300">15%</h1>
                <p className="text-white">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-white">USDCoin</h1>
            </div>
            <img src={usdcoin} className="w-[47%]" alt="" />
          </div>

          <div className="w-[50%] border rounded-lg bg-[#ddf2e7] space-x-8 py-2 px-4 flex ">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-700">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">Tether</h1>
            </div>
            <img src={Tether} className="w-[45%]" alt="" />
          </div>
        </div>

        <div className="flex space-x-4 px-4 py-3 bg-[#f8f3eb] rounded-lg items-center">
          <img src={bankCar} alt="" />
          <p className="max-w-sm">
            Option to manually withdraw your rent payout once every 24 hours
          </p>
          <Switch className=" bg-[#cccccc]" />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2 space-y-2">
            <p className="text-xs font-semibold ">CRYPTO RENT AMOUNT</p>
            <div className="border   bg-[#f8f3eb]  rounded">
              <input
                className=" w-[50%] py-3   bg-[#f8f3eb]  border-none outline-none"
                type=""
              />
              {/* <select value={selectedOption} className="outline-none  bg-[#f8f3eb] " onChange={handleOptionChange}>
                <option value="option1">
                  <div className="flex">
                    <img src={usdcoin}  alt="" />
                  </div>
                  USTD
                  </option>
                <option value="option2">Option2</option>
              
              </select> */}
            </div>
          </div>

          <div className="w-1/2 space-y-2">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col  bg-[#f8f3eb]  rounded">
              <h1 className="font-bold text-base"> {rangeValue} month(s)</h1>
              <input
                type="range"
                min="0"
                step="12"
                max="36"
                className="py-2 w-[100%] text-black"
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`content2 max-w-[100%] border px-[2rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-[70vh] ${
          toggleState === 2 ? "block" : "hidden"
        }`}
      >
        <div className="flex space-x-6 ">
          <div className="w-[50%] border rounded-lg bg-[#ddf2e7] space-x-8 py-2 px-4 flex ">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-600">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">BitCoin</h1>
            </div>
            <img src={bitcoin} className="w-[45%]" alt="" />
          </div>

          <div className="w-[50%] border rounded-lg bg-[#ddf2e7] space-x-8 py-2 px-4 flex ">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-700">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">Ethereum</h1>
            </div>
            <img src={Ethereum} className="w-[45%]" alt="" />
          </div>
        </div>

        <div className="flex space-x-4 px-4 py-3 bg-[#f8f3eb] rounded-lg items-center">
          <img src={bankCar} alt="" />
          <p className="max-w-sm">
            Option to manually withdraw your rent payout once every 24 hours
          </p>
          <Switch className=" bg-[#cccccc]" />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2 space-y-2">
            <p className="text-xs font-semibold ">CRYPTO RENT AMOUNT</p>
            <div className="border   bg-[#f8f3eb]  rounded">
              <input
                className=" w-[50%] py-3   bg-[#f8f3eb]  border-none outline-none"
                type=""
              />
              {/* <select value={selectedOption} className="outline-none  bg-[#f8f3eb] " onChange={handleOptionChange}>
                <option value="option1">
                  <div className="flex">
                    <img src={usdcoin}  alt="" />
                  </div>
                  USTD
                  </option>
                <option value="option2">Option2</option>
              
              </select> */}
            </div>
          </div>

          <div className="w-1/2 space-y-2">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col  bg-[#f8f3eb]  rounded">
              <p className="font-bold text-base"> {rangeValue} month(s)</p>
              <input
                type="range"
                min="0"
                max="100"
                className="py-2 w-[100%] bg-black"
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
