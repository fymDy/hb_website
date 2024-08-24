/*
 * @Author: Mark
 * @Date: 2024-08-24 19:28:03
 * @LastEditTime: 2024-08-24 19:29:21
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/utils/index.ts
 */
export const  isMobile=()=> {
    const userAgent = navigator.userAgent  ;
  
    // 检查常见的移动设备关键字
    if (/android/i.test(userAgent)) {
      return true;
    }
  
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return true;
    }
  
    if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Silk|Kindle|Opera Mini|Windows Phone/i.test(userAgent)) {
      return true;
    }
  
    return false;
  }
  