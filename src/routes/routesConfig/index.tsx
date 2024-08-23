/*
 * @Author: Mark
 * @Date: 2024-08-23 15:11:43
 * @LastEditTime: 2024-08-23 15:43:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/routesConfig/index.tsx
 */
import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layouts';
import { routerPath } from '../RouterUtil';
import ProtectedRoute from '../ProtectedRoute';

const Home = lazy(() => import('@/views/Home'));
const About = lazy(() => import('@/views/About'));
const Services = lazy(() => import('@/views/Services'));
const CaseStudies = lazy(() => import('@/views/CaseStudies'));
const CultureEnvironment = lazy(() => import('@/views/CultureEnvironment'));
const Careers = lazy(() => import('@/views/Careers'));
const Contacts = lazy(() => import('@/views/Contacts'));
const NotFound = lazy(() => import('@/views/NotFound'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: routerPath.Home, element: <ProtectedRoute requiresAuth={false} element={<Home />} /> },
            { path: routerPath.About, element: <ProtectedRoute requiresAuth={false} element={<About />} /> },
            { path: routerPath.Services, element: <ProtectedRoute requiresAuth={false} element={<Services />} /> },
            { path: routerPath.CaseStudies, element: <ProtectedRoute requiresAuth={false} element={<CaseStudies />} /> },
            { path: routerPath.CultureEnvironment, element: <ProtectedRoute requiresAuth={false} element={<CultureEnvironment />} /> },
            { path: routerPath.Careers, element: <ProtectedRoute requiresAuth={false} element={<Careers />} /> },
            { path: routerPath.Contacts, element: <ProtectedRoute requiresAuth={false} element={<Contacts />} /> },
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