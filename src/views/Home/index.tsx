/*
 * @Author: Mark
 * @Date: 2024-08-23 14:51:40
 * @LastEditTime: 2024-08-24 14:43:41
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/Home/index.tsx
 */

import React from 'react';

import HeaderMenu from '@/components/HeaderMenu';
import bgHeader from '@/assets/images/home/bg_header.png';

const Home: React.FC = () => {
  return <div className="HomePage ">
           {/* <HeaderMenu></HeaderMenu> */}
           <div
              style={{
                backgroundImage: `url(${bgHeader})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // 可以根据条件动态设置其他样式
              }}
              className="w-full h-[896px] md:h-[1024px] lg:h-[1080px]"
            >
            </div>
          {/* <div className="header-bg bg-[url('@/assets/images/home/bg_header.png') bg-cover  bg-center w-full h-[896px] md:h-[1024px] lg:h-[1080px]"></div> */}
  </div>;
}

export default Home;
