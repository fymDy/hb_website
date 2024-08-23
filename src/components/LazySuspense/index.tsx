/*
 * @Author: Mark
 * @Date: 2024-07-02 20:39:19
 * @LastEditTime: 2024-08-23 15:21:17
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/LazySuspense/index.tsx
 */
import React, { ReactNode, Suspense } from 'react';

// 定义 props 类型
interface LazySuspenseProps {
  children: ReactNode;
}

// 定义懒加载组件
const LazySuspense: React.FC<LazySuspenseProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="gbAppLoading">
         <span>加载中。。。</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LazySuspense;
