/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-24 18:13:15
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderMenu/index.tsx
 */
import React from 'react';

import LogoSrc from "@/assets/images/home/bg_header.png"
const HeaderMenu: React.FC = () => {
  const menuData=[
   "About","Services","CaseStudies","Culture & Environment","Careers","Contacts"
  ]
  return <header className="HeaderMenu ">
        <dl className="flex flex-row justify-between items-center lg:w-[1650px] mx-auto  h-[38px] md:h-[50px] lg:h-[84px]">
            <dt className="bg-[url('@/assets/images/logo.svg')] bg-no-repeat bg-cover bg-center lg:w-[290px] lg:h-[40px]  ">
            </dt>
            <dd className="grid grid-cols-6 gap-[10px] ">
                {
                menuData.map((item:string,i:number)=><a key={i}   className={`text-white hover:text-yellow-100 lg:text-[18px] cursor-pointer transition duration-300 ${i > 3 ? 'text-right' : ''}`}>{item}</a>)
                }
            </dd>
        </dl>
  </header>;
}

export default HeaderMenu;