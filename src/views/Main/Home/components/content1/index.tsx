/*
 * @Author: Mark
 * @Date: 2024-08-23 16:12:25
 * @LastEditTime: 2024-08-27 15:50:09
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/Main/Home/components/content1/index.tsx
 */

import React from 'react';
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'

const Home: React.FC = () => {
  const  iconDom=<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <rect x="14.1422" y="0.357849" width="20" height="20" rx="6" transform="rotate(45 14.1422 0.357849)" stroke="url(#paint0_linear_198_809)" stroke-width="3"/>
  <defs>
  <linearGradient id="paint0_linear_198_809" x1="34.1422" y1="0.357849" x2="9.56843" y2="9.49559" gradientUnits="userSpaceOnUse">
  <stop stop-color="#A4D3A4"/>
  <stop offset="1" stop-color="#4BA48C"/>
  </linearGradient>
  </defs>
  </svg>
  const textStr=[   'Innovation','Integrity','Collaboration','Excellence']
  return <div className='Content1 container w-full lg:w-[calc(100%-270px)] mx-5 lg:h-[638px] mx-auto lg:mx-[135px] lg:mt-[90px] lg:mb-[134px] '>
     
     <div className="relative container  w-[calc(100%-20px)] flex flex-col lg:flex-row lg:justify-between lg:items-center">
  {/* 图片部分 */}
  <div className="relative container
   mx-auto w-full  h-[268px]  md:h-[488px]  lg:w-[990px] ">
    <img
      src={img1}
      alt="Image 1"
      className="w-[146px] h-[180px] md:w-[274px] md:h-[297px]  lg:w-[327px] lg:h-[297px] absolute left-0  bottom-0 lg:left-0 lg:bottom-[111px] z-10"
    />
    <img
      src={img2}
      alt="Image 2"
      className="w-[133px] h-[216px]  lg:w-[298px] lg:h-[357px] absolute left-[120px] bottom-[36px] md:left-[226px] md:bottom-[59px]  lg:left-[270px] lg:bottom-[170px] z-20 bg-[#000]"
    />
    <img
      src={img3}
      alt="Image 3"
      className="w-[145px] h-[163px]  md:w-[274px] md:h-[270px]  lg:w-[326px] lg:h-[269px] absolute left-[253px] bottom-[58px]  md:left-[445px] md:bottom-[96px] lg:left-[500px] lg:bottom-[206px] z-10"
    />
  </div>

  {/* 文本内容部分 */}
  <div className="flex-1 lg:w-[690px] h-full flex flex-col justify-between">
    <h2 className="text-[32px] lg:text-[56px] font-semibold text-[#2f3e46]">
      Your Success, Our Commitment
    </h2>
    <p className="text-[20px] md:text-[24px]   lg:text-[24px] font-normal text-[#5e6472]">
      Welcome to WebMatrix, a company dedicated to innovation and excellence in software development. We are customer-centric and provide high-quality software solutions that help businesses achieve digital transformation and growth.
    </p>
    <p className="text-[20px]  md:text-[24px] lg:text-[24px] font-normal text-[#5e6472]">
      We have core values that guide our work and relationships:
    </p>
    <ul className="text-[20px]  md:text-[24px] lg:text-[24px] text-[#5e6472] my-3 gap-4 grid grid-cols-1 lg:grid-cols-2">
      {textStr?.map((item: string, i: number) => (
        <li key={i} className="flex lg:w-[290px] gap-4 flex-wrap">
          {iconDom}
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button className="w-full lg:w-[170px] lg:h-[56px] text-[20px]  md:text-[24px] lg:text-[24px]  lg:rounded-xl bg-green-500 text-white mt-16 hover:bg-green-600">
      Contact Us
    </button>
  </div>
</div>

     
  </div>;
}

export default Home;