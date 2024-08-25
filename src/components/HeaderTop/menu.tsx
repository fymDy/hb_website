/*
 * @Author: Mark
 * @Date: 2024-08-24 18:19:57
 * @LastEditTime: 2024-08-25 18:15:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderTop/menu.tsx
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
interface HeaderMenuProps {
  menuData: string[];
  onClickItem:(i:number,item:string)=>any
}
const HeaderMenu: React.FC< HeaderMenuProps>= ({menuData,onClickItem }) => {

  return <div className="HeaderMenu grid grid-cols-6 gap-[10px] ">
       {
                menuData.map((item:string,i:number)=><div  key={i}   className={` cursor-pointer text-white hover:text-yellow-100 lg:text-[18px] cursor-pointer transition duration-300 ${i > 3 ? 'text-right' : ''}`} onClick={()=>{
                  onClickItem(i,item) 
                }}>{item}</div>)
                }
  </div>;
}

export default HeaderMenu;