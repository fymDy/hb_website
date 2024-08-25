/*
 * @Author: Mark
 * @Date: 2024-08-25 15:40:54
 * @LastEditTime: 2024-08-25 16:54:13
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/main/index.tsx
 */
import ChangeLanguage from "@/components/ChangeLanguage";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderLogo from "@/components/HeaderTop/logo";
import HeaderMenu from "@/components/HeaderTop/menu";
import { isMobile } from "@/utils";
import MyDrawer from "@/components/MyDrawer";
import btnMenu from "@/assets/images/btnMenu.png"
const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Main">
      {!isMobile() && (
        <div className="pc-setting">
          <ChangeLanguage></ChangeLanguage>
        </div>
      )}
      {isMobile() && (
        <div className="w-full h5-header  absolute z-10  mt-[42px] md:mt-[36px]">
            <div className="w-[382px] md:w-[720px]">
                    <div className=" absolute left-5">
                    <HeaderLogo></HeaderLogo>
                    </div>
                <button className="w-[38px] md:w-[48px]  absolute right-5 text-white " onClick={() => setVisible(!visible)}>
                    <img src={btnMenu} className=""  />
                </button>
            </div>
          <MyDrawer visible={visible} onClose={() => setVisible(false)}>
            <p>Drawer Displayed!</p>
          </MyDrawer>
        </div>
      )}
      {!isMobile() && (
        <div className="flex flex-row justify-between items-center  lg:w-[1650px] mx-auto  h-[38px] md:h-[50px] lg:h-[84px]  absolute z-10 lg:top-[52px]  transform left-1/2  -translate-x-1/2 ">
          <HeaderLogo></HeaderLogo>
          <HeaderMenu></HeaderMenu>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Main;
