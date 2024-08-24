/*
 * @Author: Mark
 * @Date: 2024-08-24 18:19:57
 * @LastEditTime: 2024-08-24 18:20:38
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderMenu/menu.tsx
 */
/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-24 18:19:20
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderMenu/index.tsx
 */
import React from 'react';

import HeaderLogo from './logo';
const HeaderMenu: React.FC = () => {
  const menuData=[
   "About","Services","CaseStudies","Culture & Environment","Careers","Contacts"
  ]
  return <div className="HeaderMenu grid grid-cols-6 gap-[10px] ">
       {
                menuData.map((item:string,i:number)=><a key={i}   className={`text-white hover:text-yellow-100 lg:text-[18px] cursor-pointer transition duration-300 ${i > 3 ? 'text-right' : ''}`}>{item}</a>)
                }
  </div>;
}

export default HeaderMenu;