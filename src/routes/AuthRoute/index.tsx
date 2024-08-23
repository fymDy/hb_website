/*
 * @Author: Mark
 * @Date: 2024-08-23 15:20:00
 * @LastEditTime: 2024-08-23 15:31:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/AuthRoute/index.tsx
 */
// Auth.tsx
import React, { ReactNode } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { routerPath } from '../RouterUtil';
import { useAuth } from '../AuthContext';


interface AuthRouteProps {
  requiresAuth?: boolean;
  element?: ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ requiresAuth, element }) => {
  const { token } = useAuth();
  const location =useLocation()
  if (requiresAuth && !token) {
    return <Navigate to={routerPath.SignIn} state={{ from: location }} replace />;
  }
  return  element ? <>{element}</> : <Outlet /> ;
};

export default AuthRoute;
