/*
 * @Author: Mark
 * @Date: 2024-08-23 15:16:40
 * @LastEditTime: 2024-08-23 15:21:19
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/ProtectedRoute/index.tsx
 */
// src/routes/ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { routerPath } from '../RouterUtil';
import AuthRoute from '../AuthRoute';
import LazySuspense from '@/components/LazySuspense';
import TransitionWrapper from '@/components/TransitionWrapper';

interface ProtectedRouteProps {
  requiresAuth?: boolean;
  element?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiresAuth, element }) => {

  return (
    <LazySuspense>
      <TransitionWrapper>
          <AuthRoute requiresAuth={requiresAuth} element={element}></AuthRoute>
      </TransitionWrapper>
    </LazySuspense>
  );
};

export default ProtectedRoute;
