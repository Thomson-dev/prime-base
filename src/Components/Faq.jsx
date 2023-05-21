/** @format */

import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="bg-[#f9f3eb]">
      <div className="lg:px-[4rem] md:px-[2rem] px-[1rem] py-[4rem] md:flex">
        <div className="md:w-1/2 space-y-7">
          <h1 className="text-4xl font-bold font-sans">FAQ</h1>

          <p className="text-lg leading-7 font-normal">
            Our mission is to bridge the gap between Crypto and cash. We do this
            by providing instant crypto-backed financial services that you can
            use any time, anywhere, at the click of a button.
          </p>

          <Accordion/>
        </div>

       
      </div>
    </div>
  );
};

export default Faq;
