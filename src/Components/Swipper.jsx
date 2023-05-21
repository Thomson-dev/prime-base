import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Bitcoin from "../images/1024px-Bitcoin.svg.png";
import Tether from '../images/Tether.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swipper = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        breakpoints={{
          480:{
             slidesPerView :1,
          },
          899:{
            slidesPerView :2,
         },

        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="max-w-[38rem]  flex md:flex-row flex-col bg-[#f9f3eb] px-4 md:px-7  md:space-x-5 items-center py-8 border border-gray-200 rounded-xl shadow-xl">
            <img src={Bitcoin} alt="" className="w-[25%]" />
            <div className="">
              <div className="">
                <h1 className="text-4xl font-bold text-slate-900">Bitcoin</h1>
                <p className="text-[1.1em] text-[#777571] font-sans font-normal">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati laborum porro, magni atque nulla fuga quas
                  cupiditate quia quae saepe.
                </p>
              </div>

              <div className="py-5 flex items-center space-x-2">
                <a href="#/" className="text-green-500 text-base font-semibold">
                  START RENTING
                </a>
                <AiOutlineArrowRight className="text-xl font-bold text-green-500 " />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[38rem] flex bg-[#f9f3eb] px-7  space-x-5 items-center py-8 border border-gray-200 rounded-xl shadow-xl">
            <img src={Tether} alt="" className="w-[25%]" />
            <div className="">
              <div className="">
                <h1 className="text-4xl font-bold text-slate-900">Bitcoin</h1>
                <p className="text-[1.1em] text-[#777571] font-sans font-normal">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati laborum porro, magni atque nulla fuga quas
                  cupiditate quia quae saepe.
                </p>
              </div>

              <div className="py-5 flex items-center space-x-2">
                <a href="#/" className="text-green-500 text-base font-semibold">
                  START RENTING
                </a>
                <AiOutlineArrowRight className="text-xl font-bold text-green-500 " />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-[38rem] flex bg-[#f9f3eb] px-7  space-x-5 items-center py-8 border border-gray-200 rounded-xl shadow-xl">
            <img src={Tether} alt="" className="w-[25%]" />
            <div className="">
              <div className="">
                <h1 className="text-4xl font-bold text-slate-900">Bitcoin</h1>
                <p className="text-[1.1em] text-[#777571] font-sans font-normal">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati laborum porro, magni atque nulla fuga quas
                  cupiditate quia quae saepe.
                </p>
              </div>

              <div className="py-5 flex items-center space-x-2">
                <a href="#/" className="text-green-500 text-base font-semibold">
                  START RENTING
                </a>
                <AiOutlineArrowRight className="text-xl font-bold text-green-500 " />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-[38rem] flex bg-[#f9f3eb] px-7  space-x-5 items-center py-8 border border-gray-200 rounded-xl shadow-xl">
            <img src={Tether} alt="" className="w-[25%]" />
            <div className="">
              <div className="space-y-">
                <h1 className="text-4xl font-bold text-slate-900">Bitcoin</h1>
                <p className="text-[1.1em] text-[#777571] font-sans font-normal">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati laborum porro, magni atque nulla fuga quas
                  cupiditate quia quae saepe.
                </p>
              </div>

              <div className="py-5 flex items-center space-x-2">
                <a href="#/" className="text-green-500 text-base font-semibold">
                  START RENTING
                </a>
                <AiOutlineArrowRight className="text-xl font-bold text-green-500 " />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipper;
