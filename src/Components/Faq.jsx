/** @format */

import React from "react";
import Accordion from "./Accordion";
import faq from "../images/faq.webp";

const Faq = () => {
  return (
    <div className="bg-[#f9f3eb]">
      <div className="max-w-[1550px] w-[95%] mx-auto py-[6rem] md:flex">
        <div className="md:w-[60%]">
          <div className=" space-y-8">
            <h1 className="text-4xl font-bold font-sans">FAQ</h1>

            <p className=" md:text-[18px] text-[16px] max-w-[39rem] font-semibold leading-[30px] tracking-wide">
              Our mission is to bridge the gap between Crypto and cash. We do
              this by providing instant crypto-backed financial services that
              you can use any time, anywhere, at the click of a button.
            </p>

            <Accordion />
          </div>
          <h1 className="pt-20 md:text-xl text-[17px] font-semibold">
            <span className="font-bold"> Trust is our product, </span> which
            begins by building and maintaining a secure customer experience.
          </h1>
        </div>

        <div className=" md:w-[40%] hidden md:flex items-center">
          <img src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
