import React from "react";
import primbase from "../images/primebase.png";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import apple from "../images/apple-store-white.d76c6432564c345b120f6dc876dbd330.png";
import google from "../images/play-market-white.96aad589b6058e11ff44d906ba3b7e20.png";

const Footer = () => {
  return (
    <div className="bg-[#000]">
      <div className="md:px-[3rem] px-[1rem] py-[7rem] w-full space-y-20  flex md:flex-row flex-col">
        <div className="md:w-[40%]  flex  ">
          <div className="space-y-7 ">
            <img src={primbase} alt="" className="w-[30%]" />

            <h2 className="text-white">
              © 2021-2022 Prime Base. All Rights Reserved.
            </h2>
       
            <div className="flex space-x-6">
              <img src={apple} alt="" />
              <img src={google} alt="" />
            </div>

            <div className="text-white space-y-10">
              <p className="text-sm max-w-md">
                Trust is our product, which begins by building and maintaining a
                secure customer experience.
              </p>

              <p className="md:text-sm text-[16px] md:max-w-md">
                Prime Base is an approved Outsourced Service Provider of Modulr
                FS Europe Limited. Modulr FS Europe Limited is authorised by the
                Central Bank of Ireland (“CBI”) for the issuing of electronic
                money and to provide payment services.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] text-white ">
      <div className="grid grid-cols-2">
        <div className="space-y-7">
            <h1 className="md:text-3xl text-2xl font-bold">Prime Base</h1>

            <ul className="space-y-5 text-[17px] md:text-lg">
                <li><a href="/#">Help Center</a></li>
                <li><a href="/#">Term Of Use</a></li>
                <li><a href="/#">KYC Identification</a></li>
                
            </ul>
        </div>
        <div className="space-y-7">
            <h1 className="md:text-3xl text-2xl font-bold">Services</h1>

            <ul className="space-y-5 text-[17px] md:text-lg">
                <li><a href="/#">Prime Base Vault Wallet</a></li>
                <li><a href="/#">Crypto Insurance</a></li>
                <li><a href="/#">Crypto Renting</a></li>
                <li><a href="/#">Staking Crypto Rewards</a></li>

                
            </ul>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
