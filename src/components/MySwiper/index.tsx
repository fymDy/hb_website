import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 导入基本样式

// 导入所需的模块样式
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 分别导入模块
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const MySwiper = ({swiperData}:any) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true 
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper:any) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[ Pagination]} // 注册模块
    >
  { 
     swiperData?.map((item: any, i: number) => ( <SwiperSlide key={i}>
        <div  className='lg:h-[536px]  '>  
            <p className='text-white text-[84px] break-words '>{item.text}</p>
            <div className='flex text-white  text-[12px] mt-[100px]'>
                <div className=' cursor-pointer bg-[linear-gradient(to_right,_#A4D3A4_0%,_#4BA48C_100%)] lg:w-[170px] lg:h-[56px] rounded-[12px] leading-[56px] text-center '>{item.btnContact}</div>
                <div className='cursor-pointer lg:w-[242px] lg:h-[56px] rounded-[12px] border-2 border-solid border-white leading-[56px] text-center ml-10'>{item.btnView}</div>
            </div>
        </div>

       </SwiperSlide>))
  }
    </Swiper>
  );
};

export default MySwiper;
