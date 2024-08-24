/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-24 18:24:51
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderTop/index.tsx
 */
import React from 'react';

import LogoSrc from "@/assets/images/home/bg_header.png"
import HeaderLogo from './logo';
import HeaderMenu from './menu';
const HeaderTop: React.FC = () => {
  const menuData=[
   "About","Services","CaseStudies","Culture & Environment","Careers","Contacts"
  ]
  return <header className="HeaderMenu ">
        <div className="flex flex-row justify-between items-center lg:w-[1650px] mx-auto  h-[38px] md:h-[50px] lg:h-[84px]">
            <HeaderLogo></HeaderLogo>
            <HeaderMenu></HeaderMenu>
        </div>
  </header>;
}

export default HeaderTop;