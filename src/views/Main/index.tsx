/*
 * @Author: Mark
 * @Date: 2024-08-25 15:40:54
 * @LastEditTime: 2024-08-25 20:23:45
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/views/main/index.tsx
 */
import ChangeLanguage from "@/components/ChangeLanguage";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderLogo from "@/components/HeaderTop/logo";
import HeaderMenu from "@/components/HeaderTop/menu";
import { isMobile } from "@/utils";
import MyDrawer from "@/components/MyDrawer";
import btnMenu from "@/assets/images/btnMenu.png";
import { List } from "antd-mobile";
import { DownOutline, MailOutline } from "antd-mobile-icons";
import { routerPath, useRouterUtil } from "@/routes/RouterUtil";
const Main: React.FC = () => {
    const routerUtil= useRouterUtil()
  const [visible, setVisible] = useState(false);
  const [isMobileDev, setIsMobileDev] = useState(false);
  const menuData: string[] = [
    "About",
    "Services",
    "CaseStudies",
    "Culture & Environment",
    "Careers",
    "Contacts",
  ];
  const onClickMenuItem=(i:number,item:string): void=>{
    if(i==3){
        routerUtil.navigatePath(routerPath.CultureEnvironment)
    }else{
        routerUtil.navigatePath(item)
    }
  }
  const handleResize=()=> {
    if (isMobile()) {
      setIsMobileDev(true)
    } else {
      setIsMobileDev(false)
    }
  }
  useEffect(()=>{
    // 在页面加载时检查
    handleResize();
    // 在窗口大小调整时检查
    window.addEventListener('resize', handleResize);
 
  },[])


  return (
    <div className="Main">
      {!isMobileDev && (
        <div className="container pc-setting  lg:h-[52px]">
          <ChangeLanguage></ChangeLanguage>
        </div>
      )}
      {isMobileDev && (
        <div className="w-screen h5-header  absolute z-[1001] mt-[42px] md:mt-[36px]">
          <div className="w-[382px] md:w-[720px]">
            <div className=" absolute left-5">
              <HeaderLogo></HeaderLogo>
            </div>
            <button
              className="w-[38px] md:w-[48px]  absolute right-5 text-white "
              onClick={() => setVisible(!visible)}
            >
              <img src={btnMenu} className="" />
            </button>
          </div>
          <MyDrawer visible={visible} onClose={() => setVisible(false)}>
            <List className="mt-[120px] md:mt-[170px]">
              {menuData.map((item: string, i: number) => (
                <List.Item className="bg-[#292f36] text-white" onClick={()=>{
                    setVisible(false)
                    onClickMenuItem(i,item)
                }}>
                  {item}
                </List.Item>
              ))}
              <List.Item className="bg-[#292f36] text-white absolute bottom-4 left-4 ">
                <div className="flex items-center">
                  <MailOutline className="mr-2" />
                  <span>Company@emailaddress.com</span>
                  <DownOutline />
                </div>
              </List.Item>
            </List>
          </MyDrawer>
        </div>
      )}
      {!isMobileDev && (
        <div className="flex flex-row justify-between items-center lg:w-[1650px]  absolute  z-10 h-[38px] md:h-[50px] lg:h-[84px]   lg:top-[52px]  ">
          <HeaderLogo></HeaderLogo>
          <HeaderMenu menuData={menuData} onClickItem={onClickMenuItem}></HeaderMenu>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Main;


