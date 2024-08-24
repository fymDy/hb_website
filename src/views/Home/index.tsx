/*
 * @Author: Mark
 * @Date: 2024-08-23 14:51:40
 * @LastEditTime: 2024-08-24 20:34:57
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/Home/index.tsx
 */

import React from 'react';


import bgHeader from '@/assets/images/home/bg_header.png';
import MySwiper from '@/components/MySwiper';

const Home: React.FC = () => {
  const swiperData=[
    {
      text:' Empowering Innovation, Driving Excellence',
      btnContact:'Contact Us',
      btnView:'View Our Services'
    },
    {
      text:' Empowering Innovation, Driving Excellence2',
      btnContact:'Contact Us2',
      btnView:'View Our Services2'
    }
  ]
  return <div className="HomePage ">
           <div
              style={{
                backgroundImage: `url(${bgHeader})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // 可以根据条件动态设置其他样式
              }}
              className="w-full h-[896px] md:h-[1024px] lg:h-[1080px]"
            >
                   <div className='MySwiper lg:h-[1650px] mx-auto absolute top-[259px] left-1/2 transform -translate-x-1/2'>
                    <div className='MySwiper_content lg:w-[1197px] lg:h-[336px]  mx-auto'>
                      <MySwiper swiperData={swiperData}></MySwiper>
                    </div>
                </div>
            </div>
         
  </div>;
}

export default Home;
