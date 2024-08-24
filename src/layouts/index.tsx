// src/layouts/AppLayout.jsx
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
   
         <Outlet />
    </div>
  );
};

export default AppLayout;
