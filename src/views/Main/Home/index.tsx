/*
 * @Author: Mark
 * @Date: 2024-08-23 14:51:40
 * @LastEditTime: 2024-08-25 20:19:29
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/main/Home/index.tsx
 */

import React from "react";

import bgHeader from "@/assets/images/home/bg_header.png";
import MySwiper from "@/components/MySwiper";
import { isMobile } from "@/utils";

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
    <div className="HomePage  ">
      <div className="bg-[#EDF5F3]">
      <div
        style={{
          position:"absolute",
          top:'0',
          zIndex:0,
          backgroundImage: `url(${bgHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // 可以根据条件动态设置其他样式
        }}
        className="w-full h-[896px] md:h-[1024px] lg:h-[1080px]"
      >
          <div className="MySwiper  justify-center  h-[896px] md:h-[1024px] lg:h-[1650px] mx-auto mt-[100px] ">
            <MySwiper swiperData={swiperData}></MySwiper>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
