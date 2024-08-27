/*
 * @Author: Mark
 * @Date: 2024-08-23 14:51:40
 * @LastEditTime: 2024-08-27 11:29:39
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/main/Home/index.tsx
 */

import React from "react";

import bgHeader from "@/assets/images/home/bg_header.png";
import MySwiper from "@/components/MySwiper";
import { isMobile } from "@/utils";
import Content1 from "./components/content1";

const Home: React.FC = () => {
  const swiperData = [
    {
      text1: " Empowering Innovation,",
      text2: " Driving Excellence",
      btnContact: "Contact Us",
      btnView: "View Our Services",
    },
    {
      text1: " Empowering Innovation2,",
      text2: " Driving Excellence2",
      btnContact: "Contact Us2",
      btnView: "View Our Services2",
    },
  ];
  return (
    <div className="HomePage   bg-[#EDF5F3] relative ">
      <div className="w-full relative  h-[896px] md:h-[1024px] lg:h-[1080px] ">
          <div className=" w-full h-full absolute z-10 ">
              <div
                  style={{
                    backgroundImage: `url(${bgHeader})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // 可以根据条件动态设置其他样式
                  }}
                  className="w-full h-[896px] md:h-[1024px] lg:h-[1080px]"
                > 
                    <div className="w-full h-full bg-[#2f3e46] opacity-60"></div>
              </div>
          </div>
          <div className="MySwiper_Wrap container absolute z-20 top-[166px] lg:left-32 lg:border-l  lg:border-solid lg:border-white ">
              <MySwiper swiperData={swiperData}></MySwiper>
            </div>
      </div>
      <Content1></Content1>
    </div>
  );
};

export default Home;
