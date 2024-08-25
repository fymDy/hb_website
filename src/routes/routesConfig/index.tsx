/*
 * @Author: Mark
 * @Date: 2024-08-23 15:11:43
 * @LastEditTime: 2024-08-25 15:44:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/routesConfig/index.tsx
 */
import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layouts';
import { routerPath } from '../RouterUtil';
import ProtectedRoute from '../ProtectedRoute';
const Main = lazy(() => import('@/views/Main'));
const Home = lazy(() => import('@/views/Main/Home'));
const About = lazy(() => import('@/views/Main/About'));
const Services = lazy(() => import('@/views/Main/Services'));
const CaseStudies = lazy(() => import('@/views/Main/CaseStudies'));
const CultureEnvironment = lazy(() => import('@/views/Main/CultureEnvironment'));
const Careers = lazy(() => import('@/views/Main/Careers'));
const Contacts = lazy(() => import('@/views/Main/Contacts'));
const NotFound = lazy(() => import('@/views/NotFound'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Navigate to={routerPath.Main} replace />,
          },
          {
            path: routerPath.Main,
            element:<ProtectedRoute requiresAuth={false} element={<Main />} />,
            children: [
              { index: true, element: <Navigate to={routerPath.Home} replace /> },
              { path: routerPath.Home, element: <ProtectedRoute requiresAuth={false} element={<Home />} /> },
              { path: routerPath.About, element: <ProtectedRoute requiresAuth={false} element={<About />} /> },
              { path: routerPath.Services, element: <ProtectedRoute requiresAuth={false} element={<Services />} /> },
              { path: routerPath.CaseStudies, element: <ProtectedRoute requiresAuth={false} element={<CaseStudies />} /> },
              { path: routerPath.CultureEnvironment, element: <ProtectedRoute requiresAuth={false} element={<CultureEnvironment />} /> },
              { path: routerPath.Careers, element: <ProtectedRoute requiresAuth={false} element={<Careers />} /> },
              { path: routerPath.Contacts, element: <ProtectedRoute requiresAuth={false} element={<Contacts />} /> },
            
            ],
          },
            {
                path: '/404',
                element: <NotFound />,
              }, 
              {
                path: '*',
                element: <Navigate to={routerPath.NotFound} replace />,
              },
        ]
    }
]
export default routes;