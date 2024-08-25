/*
 * @Author: Mark
 * @Date: 2024-08-24 19:28:03
 * @LastEditTime: 2024-08-25 18:12:10
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/utils/index.ts
 */

export const  isMobile=()=> {
    const userAgent = navigator.userAgent  ;

    function isIpad() {
      return /iPad|Macintosh/.test(userAgent) && 'ontouchend' in document;
    }
    // 检查常见的移动设备关键字
    if (/android/i.test(userAgent)) {
      return true;
    }
  
    if (/iPhone/i.test(userAgent)) {
      return true;
    }
    if (isIpad()) {
      return true;
    }
    if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Silk|Kindle|Opera Mini|Windows Phone/i.test(userAgent)) {
      return true;//是否移动设备
    }

    return false;
  }
  