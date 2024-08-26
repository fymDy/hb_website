import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// 导入所需的模块样式
import 'swiper/css';
import 'swiper/css/pagination';

// 分别导入模块
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import './index.css'
const MySwiper = ({swiperData}:any) => {
  return (
    <div className='MySwiper mx-6 md:mx-7 lg:ml-[140px] lg:mt-14 lg:mb-44'>
    <Swiper
      // modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      // pagination={{
      //   clickable: true,
      //   renderBullet: (index:number, className:any) => {
      //     return `<span class="${className} custom-bullet"></span>`;
      //   },
      // }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper:any) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
  { 
     swiperData?.map((item: any, i: number) => ( <SwiperSlide key={i}>
        <div  className=' container  w-full   '>  
            <p className={`text-[54px] md:text-[84px] lg:text-[84px] text-white font-black`}>{item.text1}</p>
            <p className={`text-[54px] md:text-[84px] lg:text-[84px] text-white  font-normal`}>{item.text2}</p>
            <div className='flex text-white  text-[12px]  mt-[30px] md:mt-[50px] lg:mt-[60px]'>
                <div className=' cursor-pointer bg-[linear-gradient(to_right,_#A4D3A4_0%,_#4BA48C_100%)] w-[366px]  md:w-[170px]  lg:w-[170px] lg:h-[56px] rounded-[12px] leading-[56px] text-center '>                  {item.btnContact}
                </div>
                <div className='cursor-pointer w-[366px] md:w-[242px] lg:w-[242px] lg:h-[56px] rounded-[12px] border-2 border-solid border-white leading-[56px] text-center ml-10'>
                    {item.btnView}
                </div>
            </div>
            </div>
      

       </SwiperSlide>))
  }
    </Swiper>
    </div>
  );
};

export default MySwiper;
