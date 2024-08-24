/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-24 14:34:39
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderMenu/index.tsx
 */
import React from 'react';

import LogoSrc from "@/assets/images/home/bg_header.png"
const HeaderMenu: React.FC = () => {
  const menuData=[
    "Home","About","Services","CaseStudies","CultureEnvironment","Careers","Contacts"
  ]
  return <header className="HeaderMenu px-5 absolute top-0 left-0  overflow-hidden">
        <dl className="flex flex-row justify-between h-[38px] md:h-[48px] lg:h-[84px]">
            <dt className="bg-[url('@/assets/images/logo.svg')]  ">
                {/* <img src={LogoSrc} alt="Logo" /> */}
            </dt>
            <dd className="flex flex-row justify-between w-full ">
                {
                menuData.map((item:string,i:number)=><a key={i} className='flex justify-center items-center'>{item}</a>)
                }
            </dd>
        </dl>
  </header>;
}

export default HeaderMenu;