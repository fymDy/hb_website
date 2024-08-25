/*
 * @Author: Mark
 * @Date: 2024-08-24 18:18:04
 * @LastEditTime: 2024-08-25 17:30:40
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderTop/logo.tsx
 */
/*
 * @Author: Mark
 * @Date: 2024-08-23 16:08:00
 * @LastEditTime: 2024-08-24 18:13:15
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/components/HeaderMenu/index.tsx
 */
import React from 'react';

const HeaderLogo: React.FC = () => {

  return <div className="HeaderLogo w-[226px] h-[32px] md:w-[290px] md:h-[40px] lg:w-[290px] lg:h-[40px]">
      <div className="w-[226px] h-[32px] md:w-[290px] md:h-[40px] lg:w-[290px] lg:h-[40px] bg-[url('@/assets/images/logo_white.png')] bg-no-repeat bg-cover bg-center ">
      </div>
  </div>;
}

export default HeaderLogo;