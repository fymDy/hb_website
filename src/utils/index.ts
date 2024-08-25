/*
 * @Author: Mark
 * @Date: 2024-08-24 19:28:03
 * @LastEditTime: 2024-08-25 19:53:50
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/utils/index.ts
 */

export const  isMobile=()=> {
    function isIpadSize() {
      const width = window.innerWidth;
      return width >= 768 && width <= 1024;
    }
    function isH5Size() {
      const width = window.innerWidth;
      return width < 768 
    }
   
    if (isH5Size() || isIpadSize()) {
      return true;
    }
    return false;
  }
  