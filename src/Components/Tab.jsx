import React, { useState } from "react";
import usdcoin from "../images/USDCoin.png";
import Tether from "../images/Tether.png";
import Ethereum from "../images/Tether-1.png";
import bankCar from "../images/bank-car.webp";
import { Switch } from "antd";
import bitcoin from "../images/1024px-Bitcoin.svg.png";
import { IoMdArrowDropdown } from "react-icons/io";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const [dropdownOpen, setdropdownOpen] = useState(false);

  const [dropdownOpen2, setdropdownOpen2] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const data = [
    {
      id: "1",
      key: "1",
      image: usdcoin,
      Title: "usdCoin",
      txt: "USDC",
    },
    {
      id: "2",
      key: "2",
      image: Tether,
      txt: "USDT",
      Title: "Tether",
    },
  ];

  const [changeOption, setChangeOption] = useState(1);
  console.log(changeOption);
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
            toggleState === 2
              ? "py-5 px-6 bg-[#f5f1ec]  font-semibold text-xl shadow-sm   text-green-600   rounded-t-xl "
              : " py-5 px-7 text-xl"
          }`}
        >
          Crypto
        </button>
      </div>
      <div
        className={`content1 w-[100%] border md:px-[2rem] px-[1rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-fit ${
          toggleState === 1 ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between space-x-3">
          <div className="border rounded-lg bg-[#0c8444] py-2 px-3 flex justify-between w-[100%]">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-green-300">15%</h1>
                <p className="text-white text-[14px]">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-white">USDCoin</h1>
            </div>

            <img src={usdcoin} className="md:w-[109px] md:h-[109px] w-[57px] h-[50px] pl-3" alt="" />
          </div>

          <div className="border rounded-lg bg-[#ddf2e7] py-2 px-3 flex justify-between w-[100%]">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-700 text-[14px]">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">Tether</h1>
            </div>

            <img src={Tether} className="md:w-[109px] md:h-[109px] w-[57px] h-[50px] pl-3" alt="" />
          </div>
        </div>

        <div className="flex space-x-4 px-4 py-3 bg-[#f8f3eb] rounded-lg items-center">
          <img src={bankCar} alt="" />
          <p className="max-w-sm">
            Option to manually withdraw your rent payout once every 24 hours
          </p>
          <Switch className=" bg-[#cccccc]" />
        </div>

        <div className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-4 relative">
          <div className="md:w-1/2 space-y-2">
            <p className="text-xs font-semibold ">CRYPTO RENT AMOUNT</p>
            <div className="border flex w-full items-center py-[0.2rem] bg-[#f8f3eb]  rounded">
              <input
                className=" w-[50%] py-3 rounded-lg px-2 border bg-[#f8f3eb]  border-none outline-none"
                type=""
              />
              <button
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className="w-[50%] cursor-pointer space-x-2  flex items-center"
              >
                <img src={Tether} alt="" className="w-[15%]" />
                <h1 className="font-semibold text-lg cursor-pointer">USDT</h1>
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>

            <div
              className={`absolute  h-[155px] rounded-md border border-green-900 z-20   bg-slate-50 w-[280px]  ${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : `top-[110%] invisible opacity-0`
              }`}
            >
              <ul>
                {data.map(({ id, key, image, txt, Title }) => {
                  return (
                    <li className="px-3 py-2">
                      <div
                        onClick={() => setChangeOption(key)}
                        className="flex items-center px-5  hover:bg-slate-300 hover:rounded-md py-2 cursor-pointer space-x-5"
                      >
                        <img src={image} className="w-[20%]" alt="" />
                        <div className="">
                          <h1 className="font-semibold text-lg">{Title}</h1>
                          <h2 className="text-sm">{txt}</h2>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 space-y-2">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col py-[0.3rem] px-2 bg-[#f8f3eb]  rounded">
              <h1 className="font-bold text-lg"> {rangeValue} month(s)</h1>
              <input
                type="range"
                min="0"
                step="12"
                max="36"
                className="h-[10%] text-black "
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>

        <div className="border py-3 border-slate-700 rounded-md">
          <div className="flex justify-between items-center  px-4">
            <div className="space-y-5 w-1/2">
              <h1 className="font-semibold text-base">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img src={Tether} alt="" className="w-[7%] " />
                <h1 className="text-4xl font-bold">0</h1>
              </div>
            </div>

            <div className=" w-1/2 relative">
              <div className=" md:flex hidden justify-end  items-center space-x-2">
                <button
                  onClick={() => setdropdownOpen2(!dropdownOpen2)}
                  className="w-[50%] cursor-pointer  flex items-center"
                >
                  <img src={Tether} alt="" className="w-[15%]" />
                  <div className=""></div>
                  <h1 className="font-semibold text-lg px-2 cursor-pointer">
                    {" "}
                    USDT
                  </h1>
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
              </div>

        
              <div
              className={`md:absolute flex   h-[155px] rounded-md border border-green-500 z-20  top-[3rem] bg-slate-50 md:w-[280px]  ${
                dropdownOpen2
                  ? `top-full opacity-100 visible`
                  : `top-[110%] invisible opacity-0`
              }`}
            >
              <ul>
                {data.map(({ id, key, image, txt, Title }) => {
                  return (
                    <li className="px-3 py-2">
                      <div
                        onClick={() => setChangeOption(key)}
                        className="flex items-center px-5  hover:bg-slate-300 hover:rounded-md py-2 cursor-pointer space-x-5"
                      >
                        <img src={image} className="w-[20%]" alt="" />
                        <div className="">
                          <h1 className="font-semibold text-lg">{Title}</h1>
                          <h2 className="text-sm">{txt}</h2>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>


            </div>
          </div>
        </div>
      </div>

      <div
        className={`content2 max-w-[100%] border px-[2rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-[80vh] ${
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
            <div className="border flex w-full items-center py-[0.2rem] bg-[#f8f3eb]  rounded">
              <input
                className=" w-[50%] py-3 rounded-lg px-2 border bg-[#f8f3eb]  border-none outline-none"
                type=""
              />
              <div className="w-[50%] cursor-pointer space-x-2 flex items-center">
                <img src={Tether} alt="" className="w-[20%]" />
                <h1 className="font-semibold text-xl cursor-pointer">USDT</h1>
                <IoMdArrowDropdown className="text-xl" />
              </div>
            </div>
          </div>

          <div className="w-1/2 space-y-2">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col py-[0.3rem] px-2 bg-[#f8f3eb]  rounded">
              <h1 className="font-bold text-lg"> {rangeValue} month(s)</h1>
              <input
                type="range"
                min="0"
                step="12"
                max="36"
                className="h-[10%] text-black "
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>

        <div className="border py-5 border-black rounded">
          <div className="flex justify-between items-center  px-4">
            <div className="space-y-5 w-1/2">
              <h1 className="font-semibold text-base">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img src={Tether} alt="" className="w-[7%] " />
                <h1 className="text-4xl font-bold">0</h1>
              </div>
            </div>

            <div className=" w-1/2">
              <div className="w-[100% ] flex justify-end items-center space-x-2">
                <img src={Tether} className="w-[7%] h-5" alt="" />
                <div className="flex items-center space-x-1">
                  <h1 className="font-semibold text-xl cursor-pointer">USDT</h1>
                  <IoMdArrowDropdown className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
