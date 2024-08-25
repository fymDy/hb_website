/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-25 16:02:37
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderTop/index.tsx
 */
import React, { useState } from 'react';

import LogoSrc from "@/assets/images/home/bg_header.png"
import HeaderLogo from './logo';
import HeaderMenu from './menu';
import { isMobile } from '@/utils';
import MyDrawer from '../MyDrawer';
const HeaderTop: React.FC = () => {
  const menuData=[
   "About","Services","CaseStudies","Culture & Environment","Careers","Contacts"
  ]
  const [visible, setVisible] = useState(false);
  return <header className="HeaderTop  ">
            {/* <div className="flex flex-row justify-between items-center lg:w-[1650px] mx-auto  h-[38px] md:h-[50px] lg:h-[84px]">
              <HeaderLogo></HeaderLogo>
            <button className='md:w-[108px]' onClick={() => setVisible(!visible)}>Setting</button>
            {
              isMobile() ? <MyDrawer visible={visible} onClose={() =>   setVisible(false)}>
                        <p>Drawer Displayed!</p>
              </MyDrawer>: <HeaderMenu></HeaderMenu>
            }
        </div> */}
  </header>;
}

export default HeaderTop;