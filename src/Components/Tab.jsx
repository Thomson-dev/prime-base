/** @format */

import React, { useEffect, useState } from "react";
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
      image: usdcoin,
      title: "UsdCoin",
      txt: "USDC",
    },
    {
      id: "2",

      image: Tether,
      txt: "USDT",
      title: "Tether",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(data[0]); // Set the first object as the default selected item

  const handleClick = (item, fasle) => {
    setSelectedItem(item);
    setdropdownOpen(fasle);
    setdropdownOpen2(fasle);
  };

  const [result, setResult] = useState('');
  const [value, setValue] = useState('22');

  const [rangeValue, setRangeValue] = useState(12);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const reduceString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  useEffect(() => {
    const calculatePercentage = () => {
      const percentage = 0.15; // 15%
      const calculatedValue = value + percentage * rangeValue;
      setResult(calculatedValue);
    };

    calculatePercentage();
  }, [value, rangeValue])

  return (
    <div className="mt-[1rem]">
      <div className="md:flex space-x-10 hidden">
        <button
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1
              ? "py-3 px-4 bg-[#fefcf9]  font-semibold text-xl shadow-sm  text-green-600   rounded-t-xl "
              : " py-5 px-6 text-xl"
          }`}
        >
          Stablecoins
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`${
            toggleState === 2
              ? "py-5 px-6 bg-[#fefcf9]  font-semibold text-xl shadow-sm   text-green-600   rounded-t-xl "
              : " py-5 px-7 text-xl"
          }`}
        >
          Crypto
        </button>
      </div>

      <div className="md:hidden space-x-10 justify-center items-center border mx-auto bg-white rounded-xl mb-2 w-[380px] py-3 h-[70px] flex">
        <button
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1
              ? "py-3 px-8 bg-[#343434]  font-semibold text-[17px] shadow-lg  text-white   rounded-md "
              : " py-5 px-6 text-xl"
          }`}
        >
          Stablecoins
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`${
            toggleState === 2
              ? "py-3 px-8 bg-[#343434]  font-semibold text-[17px] shadow-lg  text-white   rounded-md "
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
            <div className="max-w-[100%]">
              <img
                src={usdcoin}
                className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                alt=""
              />
            </div>
          </div>

          <div className="border rounded-lg bg-[#ddf2e7] py-2 px-3 flex justify-between w-[100%]">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-700 text-[14px]">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">Tether</h1>
            </div>

            <div className="max-w-[100%]">
              <img
                src={Tether}
                className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-4 px-4 py-3 bg-[#f8f3eb] rounded-lg items-center">
          <img src={bankCar} alt="" />
          <p className="max-w-sm text-[14px]">
            Option to manually withdraw your rent payout once every 24 hours
          </p>
          <Switch className=" bg-[#cccccc]" />
        </div>

        <div className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-1 relative">
          <div className="md:max-w-[50%] space-y-1 ">
            <p className="text-xs font-semibold ">CRYPTO RENT AMOUNT</p>
            <div className="border flex w-full items-center justify-between px-3 py-[0.2rem] bg-[#f8f3eb]  rounded">
              <input
                className=" py-3 rounded-lg px-2 w-[40%] border bg-[#f8f3eb]  border-none outline-none"
                type=""
              />
              <button
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className=" cursor-pointer space-x-2  flex items-center"
              >
                <img src={selectedItem.image} alt="" className="max-w-[18px]" />
                <h1 className="font-semibold text-lg cursor-pointer">
                  {selectedItem.txt}
                </h1>
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>

            <div
              className={`absolute  md:h-[150px] w-[97%] sm:left-3  h-[155px] rounded-md border border-green-600 top-[6rem] z-20   bg-slate-50 md:w-[280px]  ${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : `top-[110%] invisible opacity-0`
              }`}
            >
              <ul>
                {data.map((item) => {
                  return (
                    <li className="space-y-3 pt-1 px-3">
                      <div
                        key={item.id}
                        onClick={() => handleClick(item, false)}
                        className={`flex items-center hover:rounded-md  py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3  ${
                          selectedItem === item
                            ? "bg-slate-500 rounded-md "
                            : ""
                        } `}
                      >
                        <img src={item.image} className="w-[46px]" alt="" />
                        <div className="">
                          <h1 className="font-semibold text-[18px]">
                            {item.title}
                          </h1>
                          <h2 className="text-[12px]">{item.txt}</h2>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 space-y-1">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col py-[0.3rem] px-2 bg-[#f8f3eb]  rounded">
              <h1 className="font-bold text-lg"> {rangeValue} month(s)</h1>
              <input
                type="range"
                min="0"
                step="12"
                max="36"
                className="h-[10%] range "
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>

        <div className="sm:border py-3   max-w-[800px] h-[109px] rounded-md">
          <div className="flex justify-between items-center  px-4">
            <div className="md:space-y-5 space-y-2 w-1/2  relative sm:top-[-3rem] top-[-3rem] md:top-1">
              <h1 className="font-semibold text-[12px]">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img src={selectedItem.image} alt="" className="max-w-[18px]" />
                <h1 className="text-4xl font-bold">{reduceString(result, 7)}</h1>
              </div>
            </div>

            <div className=" w-1/2 relative  ">
              <button className="bg-[#0c8444] justify-end mx-auto relative top-6  sm:hidden block hover:bg-green-600 text-white rounded-md py-3 border px-4 font-semibold ">
                Start Renting
              </button>
              <div className=" sm:flex hidden  justify-end pt-[2rem] items-center space-x-2">
                <button
                  onClick={() => setdropdownOpen2(!dropdownOpen2)}
                  className="max-w-[50%]  cursor-pointer  flex items-center"
                >
                  <img
                    src={selectedItem.image}
                    alt=""
                    className="max-w-[18px]"
                  />
                  <div className=""></div>
                  <h1 className="font-semibold text-lg px-2 cursor-pointer">
                    {" "}
                    {selectedItem.txt}
                  </h1>
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
              </div>

              <div
                className={`md:absolute flex   h-[155px] rounded-md border border-green-500 z-20  top-[4rem] left-[-3rem] bg-slate-50 md:w-[280px]  ${
                  dropdownOpen2
                    ? `top-full opacity-100 visible`
                    : `top-[110%] invisible opacity-0`
                }`}
              >
                <ul className="w-[100%]">
                  {data.map((item) => {
                    return (
                      <li className="space-y-3 pt-1 px-3 ">
                        <div
                          key={item.id}
                          onClick={() => handleClick(item, false)}
                          className={`flex items-center hover:rounded-md w-[] py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3  ${
                            selectedItem === item
                              ? "bg-slate-500 rounded-md "
                              : ""
                          } `}
                        >
                          <img src={item.image} className="w-[46px]" alt="" />
                          <div className="">
                            <h1 className="font-semibold text-[18px]">
                              {item.title}
                            </h1>
                            <h2 className="text-[12px]">{item.txt}</h2>
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
      {/* Contect2 */}
      <div
        className={`content2 w-[100%] border md:px-[2rem] px-[1rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-fit ${
          toggleState === 2 ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between space-x-3">
          <div className="border rounded-lg bg-[#ddf2e7] py-2 px-3 flex justify-between w-[100%]">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-[#343434]">15%</h1>
                <p className="text-[#6a6d70] text-[14px]">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-[#343434]">Bitcoin</h1>
            </div>
            <div className="max-w-[100%]">
              <img
                src={bitcoin}
                className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                alt=""
              />
            </div>
          </div>

          <div className="border rounded-lg bg-[#ddf2e7] py-2 px-3 flex justify-between w-[100%]">
            <div className=" space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-black">15%</h1>
                <p className="text-slate-700 text-[14px]">Per Month</p>
              </div>

              <h1 className="text-xl font-semibold text-black">Ethererum</h1>
            </div>

            <div className="max-w-[100%]">
              <img
                src={Ethereum}
                className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-4 px-4 py-3 bg-[#f8f3eb] rounded-lg items-center">
          <img src={bankCar} alt="" />
          <p className="max-w-sm text-[14px]">
            Option to manually withdraw your rent payout once every 24 hours
          </p>
          <Switch className=" bg-[#cccccc]" />
        </div>

        <div className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-1 relative">
          <div className="md:max-w-[50%] space-y-1 ">
            <p className="text-xs font-semibold ">CRYPTO RENT AMOUNT</p>
            <div className="border flex w-full items-center justify-between px-3 py-[0.2rem] bg-[#f8f3eb]  rounded">
              <input
                className=" py-3 rounded-lg px-2 w-[40%] border bg-[#f8f3eb]  border-none outline-none"
                type="number"
                placeholder="Enter a value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className=" cursor-pointer space-x-2  flex items-center"
              >
                <img src={selectedItem.image} alt="" className="max-w-[18px]" />
                <h1 className="font-semibold text-lg cursor-pointer">
                  {selectedItem.txt}
                </h1>
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>

            <div
              className={`absolute  md:h-[150px] w-[97%] sm:left-3  h-[155px] rounded-md border border-green-600 top-[6rem] z-20   bg-slate-50 md:w-[280px]  ${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : `top-[110%] invisible opacity-0`
              }`}
            >
              <ul>
                {data.map((item) => {
                  return (
                    <li className="space-y-3 pt-1 px-3">
                      <div
                        key={item.id}
                        onClick={() => handleClick(item, false)}
                        className={`flex items-center hover:rounded-md  py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3  ${
                          selectedItem === item
                            ? "bg-slate-500 rounded-md "
                            : ""
                        } `}
                      >
                        <img src={item.image} className="w-[46px]" alt="" />
                        <div className="">
                          <h1 className="font-semibold text-[18px]">
                            {item.title}
                          </h1>
                          <h2 className="text-[12px]">{item.txt}</h2>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 space-y-1">
            <p className="text-xs font-semibold ">TERM</p>
            <div className="border  flex justify-items-end flex-col py-[0.3rem] px-2 bg-[#f8f3eb]  rounded">
              <h1 className="font-bold text-lg"> {rangeValue} month(s)</h1>
              <input
                type="range"
                min="0"
                step="12"
                max="36"
                className="h-[10%] range "
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>

        <div className="sm:border py-3   max-w-[800px] h-[109px] rounded-md">
          <div className="flex justify-between items-center  px-4">
            <div className="md:space-y-5 space-y-2 w-1/2  relative sm:top-[-3rem] top-[-3rem] md:top-1">
              <h1 className="font-semibold text-[12px]">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img src={selectedItem.image} alt="" className="max-w-[18px]" />
                <h1 className="text-4xl font-bold">0</h1>
              </div>
            </div>

            <div className=" w-1/2 relative  ">
              <button className="bg-[#0c8444] justify-end mx-auto relative top-6  sm:hidden block hover:bg-green-600 text-white rounded-md py-3 border px-4 font-semibold ">
                Start Renting
              </button>
              <div className=" sm:flex hidden  justify-end pt-[2rem] items-center space-x-2">
                <button
                  onClick={() => setdropdownOpen2(!dropdownOpen2)}
                  className="max-w-[50%]  cursor-pointer  flex items-center"
                >
                  <img
                    src={selectedItem.image}
                    alt=""
                    className="max-w-[18px]"
                  />
                  <div className=""></div>
                  <h1 className="font-semibold text-lg px-2 cursor-pointer">
                    {" "}
                    {selectedItem.txt}
                  </h1>
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
              </div>

              <div
                className={`md:absolute flex   h-[155px] rounded-md border border-green-500 z-20  top-[4rem] left-[-3rem] bg-slate-50 md:w-[280px]  ${
                  dropdownOpen2
                    ? `top-full opacity-100 visible`
                    : `top-[110%] invisible opacity-0`
                }`}
              >
                <ul className="w-[100%]">
                  {data.map((item) => {
                    return (
                      <li className="space-y-3 pt-1 px-3 ">
                        <div
                          key={item.id}
                          onClick={() => handleClick(item, false)}
                          className={`flex items-center hover:rounded-md w-[] py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3  ${
                            selectedItem === item
                              ? "bg-slate-500 rounded-md "
                              : ""
                          } `}
                        >
                          <img src={item.image} className="w-[46px]" alt="" />
                          <div className="">
                            <h1 className="font-semibold text-[18px]">
                              {item.title}
                            </h1>
                            <h2 className="text-[12px]">{item.txt}</h2>
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
    </div>
  );
};

export default Tab;
