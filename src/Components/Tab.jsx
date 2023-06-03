/** @format */

import React, { useEffect, useState } from "react";
import usdcoin from "../images/USDCoin.png";
import Tether from "../images/Tether.png";
import Ethereum from "../images/Tether-1.png";
import BNB from "../images/bnb.png";
import bankCar from "../images/bank-car.webp";
import { Switch } from "antd";
import bitcoin from "../images/1024px-Bitcoin.svg.png";
import { IoMdArrowDropdown } from "react-icons/io";
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const [dropdownOpen, setdropdownOpen] = useState(false);

  const [dropdownOpen2, setdropdownOpen2] = useState(false);
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);

  const [value, setValue] = useState("30");
  const [value2, setValue2] = useState("0.0025");

  const [rangeValue, setRangeValue] = useState(12);

  const [rangeValue2, setRangeValue2] = useState(12);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const data = [
    {
      id: "1",
      image: usdcoin,
      percent: "15%",
      percentage: 0.15,
      month: "per month",
      title: "USDCoin",
      txt: "USDC",
    },
    {
      id: "2",
      percent: "29%",
      month: "per month",
      percentage: 0.29,
      image: Tether,
      txt: "USDT",
      title: "Tether",
    },
  ];

  const data2 = [
    {
      id: "1",
      image: bitcoin,
      percent: "40%",
      percentage: 0.4,
      month: "per month",
      title: "Bitcoin",
      txt: "BTC",
    },
    {
      id: "2",
      percentage: 0.25,
      percent: "25%",
      month: "per month",
      image: Ethereum,
      txt: "Eth",
      title: "Ethereum",
    },
    {
      id: "3",
      percentage: 0.25,
      percent: "25%",
      month: "per month",
      image: BNB,
      txt: "BNB",
      title: "BNB",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(data[0]); // Set the first object as the default selected item

  const [selectedItem2, setSelectedItem2] = useState(data2[0]); // Set the first object as the default selected item
  const [activeItemId, setActiveItemId] = useState([]);
  const [activeItemId2, setActiveItemId2] = useState([]);
  const [activeColor, setActiveColor] = useState([]);

  const handleClick = (item, fasle) => {
    setSelectedItem(item);
    setdropdownOpen(fasle);
    setdropdownOpen2(fasle);
    setActiveItemId(item.id);
    setActiveColor(item.id);
  };

  const handleRangeChange2 = (event) => {
    setRangeValue2(event.target.value);
  };

  const handleClick2 = (item, fasle) => {
    setSelectedItem2(item);
    setdropdownOpen(fasle);
    setdropdownOpen2(fasle);
    setActiveItemId2(item.id);
    setActiveColor(item.id);
  };

  useEffect(() => {
    const calculatePercentage = () => {
      const numValue = Number(value);

      const calculatedValue = selectedItem.percentage * numValue;
      const increasedValue = calculatedValue * rangeValue;

      const finalValue = increasedValue + numValue;

      setResult(finalValue.toFixed(3));
    };

    calculatePercentage();
  }, [value, rangeValue, selectedItem.percentage]);

  useEffect(() => {
    const calculatePercentage2 = () => {
      const numValue2 = Number(value2);
      const calculatedValue2 = selectedItem2.percentage * numValue2;
      const increasedValue2 = calculatedValue2 * rangeValue2;

      const finalValue = increasedValue2 + numValue2;

      setResult2(finalValue.toFixed(5));
    };
    calculatePercentage2();
  }, [value2, rangeValue2, selectedItem2.percentage]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "months") {
      setRangeValue(Number(value));
    } else if (name === "value") {
      setValue(value);
    }
  };

  return (
    <div className="mt-[1rem]">
      <div className="md:flex space-x-10 hidden">
        <button
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1
              ? "py-3 px-4 bg-[#fefcf9]  font-semibold text-xl shadow-sm  text-[#21a03d]   rounded-t-xl "
              : " py-5 px-6 text-xl"
          }`}
        >
          Stablecoins
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`${
            toggleState === 2
              ? "py-5 px-6 bg-[#fefcf9]  font-semibold text-xl shadow-sm   text-[#21a03d]   rounded-t-xl "
              : " py-5 px-7 text-xl"
          }`}
        >
          Crypto
        </button>
      </div>
      {/* Mobile Tab */}
      <div className="md:hidden space-x-10 mt-2 justify-center items-center border mx-auto bg-white rounded-xl mb-2 max-w-[380px] py-3 h-[70px] flex">
        <button
          onClick={() => toggleTab(1)}
          className={`${
            toggleState === 1
              ? "py-3 px-8 bg-[#21a03d]  font-semibold text-[17px] shadow-lg  text-white   rounded-md "
              : " py-5 px-6 text-xl"
          }`}
        >
          Stablecoins
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`${
            toggleState === 2
              ? "py-3 px-8 bg-[#21a03d]  font-semibold text-[17px] shadow-lg  text-white   rounded-md "
              : " py-5 px-7 text-xl"
          }`}
        >
          Crypto
        </button>
      </div>
      {/* Tether 29 USDC 15 BTC 40 ET 25 */}
      <div
        className={`content1 w-[100%] border md:px-[2rem] px-[1rem]  bg-[#fefcf9] space-y-6  py-5 rounded-lg shadow-xl h-fit ${
          toggleState === 1 ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between space-x-3">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`border cursor-pointer rounded-lg py-2 px-3 flex justify-between w-[100%] ${
                  activeItemId === item.id ? "bg-[#21a03d]" : "bg-[#ddf2e7] "
                }   `}
                onClick={() => handleClick(item)}
              >
                <div className=" space-y-4">
                  <div>
                    <h1
                      className={`text-2xl font-bold text-black  ${
                        activeItemId === item.id ? "text-white" : "text-black"
                      }`}
                    >
                      {item.percent}
                    </h1>
                    <p
                      className={`text-slate-700 text-[14px] ${
                        activeItemId === item.id ? "text-white" : "text-black"
                      }`}
                    >
                      {item.month}
                    </p>
                  </div>

                  <h1
                    className={`text-xl font-semibold text-black ${
                      activeItemId === item.id ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h1>
                </div>

                <div className="max-w-[100%]">
                  <img
                    src={item.image}
                    className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
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
            <div
              className={`border flex w-full items-center justify-between px-3 py-[0.2rem] bg-[#f8f3eb]  rounded ${
                value.trim() === "" ? "border-red-500" : ""
              }`}
            >
              <input
                className=" py-3 rounded-lg text-[18px] font-semibold  px-2 w-[40%] border bg-[#f8f3eb]  border-none outline-none"
                type="number"
                name="value"
                value={value}
                onChange={handleChange}
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
              className={`absolute  md:h-[150px] w-[97%] sm:left-3  h-[155px] rounded-md border border-[#21a03d] top-[5rem] sm:top-[5.6rem] md:top-[6rem] z-20   bg-slate-50 md:w-[280px]  ${
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
                          activeColor === item.id ? "bg-[#DDF2E7]  " : " "
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
                min="12"
                step="12"
                max="36"
                className="h-[10%]  appearance-none outline-none romove-counter range "
                value={rangeValue}
                name="months"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="sm:border py-3   max-w-[800px] h-[109px] rounded-md">
          <div className="flex justify-between items-center  px-3">
            <div className="md:space-y-5 space-y-2 w-1/2  relative sm:top-[-3rem] top-[-3rem] md:top-1">
              <h1 className="font-semibold text-[12px]">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img src={selectedItem.image} alt="" className="max-w-[18px]" />
                <h1 className="text-4xl font-bold">{result}</h1>
              </div>
            </div>

            <div className=" w-1/2 relative  ">
              <button className="bg-[#21a03d] justify-end mx-auto relative top-6  sm:hidden block hover:bg-green-600 text-white rounded-md py-3 border px-4 font-semibold ">
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
                className={`md:absolute flex   h-[155px] rounded-md border border-[#21a03d] z-20  top-[4rem] left-[-3rem] bg-slate-50 md:w-[280px]  ${
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
                          className={`flex items-center hover:rounded-md w-[] py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3   ${
                            activeColor === item.id ? "bg-[#DDF2E7]  " : " "
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
          {data2.slice(0, 2).map((item2) => {
            return (
              <div
                key={item2.id}
                onClick={() => handleClick2(item2, false)}
                className={`border cursor-pointer rounded-lg  py-2 px-3 flex justify-between w-[100%]  ${
                  activeItemId2 === item2.id ? "bg-[#21a03d]" : "bg-[#ddf2e7] "
                }   `}
              >
                <div className=" space-y-4">
                  <div>
                    <h1
                      className={`text-2xl font-bold text-[#343434]  ${
                        activeItemId2 === item2.id ? "text-white" : "text-black"
                      }`}
                    >
                      {item2.percent}
                    </h1>
                    <p
                      className={`text-slate-700 text-[14px]  ${
                        activeItemId2 === item2.id ? "text-white" : "text-black"
                      } `}
                    >
                      {item2.month}
                    </p>
                  </div>

                  <h1
                    className={`text-xl font-semibold text-black ${
                      activeItemId2 === item2.id ? "text-white" : "text-black"
                    }  `}
                  >
                    {item2.title}
                  </h1>
                </div>
                <div className="max-w-[100%]">
                  <img
                    src={item2.image}
                    className="md:w-[109px] md:h-[109px] sm:w-[109px] sm:h-[109px] w-[57px] h-[50px] pl-3"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
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
            <div
              className={`border flex w-full items-center justify-between px-3 py-[0.2rem] bg-[#f8f3eb]  rounded ${
                value2.trim() === "" ? "border-red-500" : ""
              }`}
            >
              <input
                className=" py-3 rounded-lg text-[18px] font-semibold px-2 w-[60%] border bg-[#f8f3eb]  border-none outline-none"
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
              />
              <button
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className=" cursor-pointer space-x-2  flex items-center"
              >
                <img
                  src={selectedItem2.image}
                  alt=""
                  className="max-w-[18px]"
                />
                <h1 className="font-semibold text-lg cursor-pointer">
                  {selectedItem2.txt}
                </h1>
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>

            <div
              className={`absolute  md:h-[210px]  w-[97%] sm:left-3  h-[210px] rounded-md border border-[#21a03d] top-[6rem] z-20   bg-slate-50 md:w-[280px]  ${
                dropdownOpen
                  ? `top-full opacity-100 visible`
                  : `top-[110%] invisible opacity-0`
              }`}
            >
              <ul>
                {data2.map((item2) => {
                  return (
                    <li className="space-y-3 pt-1 px-3">
                      <div
                        key={item2.id}
                        onClick={() => handleClick2(item2, false)}
                        className={`flex items-center hover:rounded-md  py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3 ${
                          activeColor === item2.id ? "bg-[#DDF2E7]  " : " "
                        } `}
                      >
                        <img src={item2.image} className="w-[46px]" alt="" />
                        <div className="">
                          <h1 className="font-semibold text-[18px]">
                            {item2.title}
                          </h1>
                          <h2 className="text-[12px]">{item2.txt}</h2>
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
              <h1 className="font-bold text-lg"> {rangeValue2} month(s)</h1>
              <input
                type="range"
                min="12"
                step="12"
                max="36"
                className="h-[10%] range "
                value={rangeValue2}
                onChange={handleRangeChange2}
              />
            </div>
          </div>
        </div>

        <div className="sm:border py-3   max-w-[800px] h-[109px] rounded-md">
          <div className="flex justify-between items-center  px-4">
            <div className="md:space-y-5 space-y-2 w-1/2  relative sm:top-[-5rem] top-[-5rem] md:top-1">
              <h1 className="font-semibold text-[12px]">TOTAL EARNINGS</h1>
              <div className="flex items-center space-x-2 w-[100%]">
                <img
                  src={selectedItem2.image}
                  alt=""
                  className="max-w-[18px]"
                />
                <h1 className="text-4xl font-bold">{result2}</h1>
              </div>
            </div>

            <div className=" w-1/2 relative  ">
              <button className="bg-[#21a03d] justify-end mx-auto relative top-6  sm:hidden block hover:bg-[#1d4626] text-white rounded-md py-3 border px-4 font-semibold ">
                Start Renting
              </button>
              <div className=" sm:flex hidden  justify-end pt-[2rem] items-center space-x-2">
                <button
                  onClick={() => setdropdownOpen2(!dropdownOpen2)}
                  className="max-w-[50%]  cursor-pointer  flex items-center"
                >
                  <img
                    src={selectedItem2.image}
                    alt=""
                    className="max-w-[18px]"
                  />
                  <div className=""></div>
                  <h1 className="font-semibold text-lg px-2 cursor-pointer">
                    {" "}
                    {selectedItem2.txt}
                  </h1>
                  <IoMdArrowDropdown className="text-2xl" />
                </button>
              </div>

              <div
                className={`md:absolute flex   h-[210px] rounded-md border border-[#21a03d]  z-20  top-[4rem] left-[-3rem] bg-slate-50 md:w-[280px]  ${
                  dropdownOpen2
                    ? `top-full opacity-100 visible`
                    : `top-[110%] invisible opacity-0`
                }`}
              >
                <ul className="w-[100%]">
                  {data2.map((item2) => {
                    return (
                      <li className="space-y-3 pt-1 px-3 ">
                        <div
                          key={item2.id}
                          onClick={() => handleClick2(item2, false)}
                          className={`flex items-center hover:rounded-md w-[] py-[9px] hover:bg-[#DDF2E7] px-5  cursor-pointer space-x-3  ${
                            activeColor === item2.id ? "bg-[#DDF2E7]  " : " "
                          } `}
                        >
                          <img src={item2.image} className="w-[46px]" alt="" />
                          <div className="">
                            <h1 className="font-semibold text-[18px]">
                              {item2.title}
                            </h1>
                            <h2 className="text-[12px]">{item2.txt}</h2>
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
