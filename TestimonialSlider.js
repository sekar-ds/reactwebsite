import React from 'react';

// import testimonials data
import { testimonialsData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
        
      }}
      
      modules={[Pagination]}
      className='mySwiper '
      
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { title, message } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='rounded-[50px] border border-accent-primary xl:max-w-[475px] max-h-[300px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl '
          id="background1">
            {/* avatar image */}
            {/* text */}
            <div id='background2'>
              <div className='text-lg  font-bold text-center' id="text11">{title}</div>
              
              <p className='max-w-[540px] mt-*12' id="text22">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
