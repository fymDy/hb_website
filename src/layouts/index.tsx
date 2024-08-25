// src/layouts/AppLayout.jsx
import ChangeLanguage from '@/components/ChangeLanguage';
import HeaderTop from '@/components/HeaderTop';
import HeaderLogo from '@/components/HeaderTop/logo';
import { isMobile } from '@/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export interface CollapseUIProps{
  key: string;
  title: string;
  content:React.ReactNode
}
const AppLayout =() => {
  const [data,setData]=useState<any>([])

  return (
    <div className=" container w-full mx-auto app-layout">
          {/* 全局渲染 */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-10 lg:w-[1650px] lg:h-[134px] '>
              {
                 !isMobile() && <ChangeLanguage></ChangeLanguage>
              }
              <div className=' absolute lg:top-[52px]  lg:left-1/2 transform lg:-translate-x-1/2  z-10 '>
                  <HeaderTop></HeaderTop> 
              </div>
          </div>
         <Outlet />
    </div>
  );
};

export default AppLayout;
