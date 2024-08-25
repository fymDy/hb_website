/*
 * @Author: Mark
 * @Date: 2024-08-23 15:19:25
 * @LastEditTime: 2024-08-25 15:45:19
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/RouterUtil/index.tsx
 */
/*
 * @Author: Mark
 * @Date: 2024-06-28 21:14:37
 * @LastEditTime: 2024-07-16 17:24:22
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /react-router6.4-antm/src/routes/routerUtil.ts
 */
/*
 * @Author: Mark
 * @Date: 2024-06-13 20:56:21
 * @LastEditTime: 2024-06-19 17:59:57
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /react-px2rem-antm-craco/src/router/routerUtil.ts
 */

import CaseStudies from "@/views/Main/CaseStudies";
import Contacts from "@/views/Main/Contacts";
import CultureEnvironment from "@/views/Main/CultureEnvironment";
import Home from "@/views/Main/Home";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const routerPath = {
  SignIn:"signIn",
  Main: "/Main",
  Home: "/Main/Home",
  About: "/Main/About",
  Services: "/Main/Services",
  CaseStudies: "/Main/CaseStudies",
  CultureEnvironment: "/Main/CultureEnvironment",
  Careers: "/Main/Careers",
  Contacts: "/Main/Contacts",
  NotFound: "/404",
};

class RouterUtil {
  // private readonly navigate = useNavigate();
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }
  /**
   * 返回上级目录
   */
  navigateBack() {
    this.navigate(-1);
  }

   /**
   * 跳转指定目录
   */
  navigatePath(pathStr:string ){
    this.navigate(pathStr);
  }
 
}
export const useRouterUtil = (): RouterUtil => {
  const navigate = useNavigate();
  return new RouterUtil(navigate);
};

export default RouterUtil;