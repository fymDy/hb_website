import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
//重置css
import "./assets/css/reset.css";
//公共css 
import "./assets/css/common.css"
// //响应式库flexiblejs
import "@/assets/js/flexible.js";

import LazySuspense from "./components/LazySuspense";
import { AuthProvider} from "./routes/AuthContext";
import { SWRConfig } from "swr";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LazySuspense>
  <AuthProvider>
    <SWRConfig
      value={{
        //删除一段时间内相同 key 的重复请求（以毫秒为单位）
        dedupingInterval: 120000,
        //错误重试的时间间隔（以毫秒为单位）
        errorRetryInterval: 3000,
        // 错误重试的最大次数
        errorRetryCount: 1,
        //窗口聚焦时自动重新验证
        revalidateOnFocus: false,
      }}
    >
      <App />
    </SWRConfig>
  </AuthProvider>
</LazySuspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
