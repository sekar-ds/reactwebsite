import React from 'react';
import '../components/Technology.css';
import image1 from '../assets/img/features/java.png';
import image2 from '../assets/img/features/python.png';
import image3 from '../assets/img/features/reactjs.png';
import image4 from '../assets/img/features/nodejs.png';
import image5 from '../assets/img/features/boostrap1.png'

import image6 from '../assets/img/features/mongodb.png';
import image7 from '../assets/img/features/mysql.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Techonlogy = () => {
  return (
    <div>
       <section class="_technologySection _commonPadding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mx-auto">
                            <div class="_title-div text-center" data-aos='fade-down'
                               data-aos-delay='400'>
                                <p class="_title-tag">Technology We USe</p>
                                <h3 class="_title _btmLine-decor">We Love Technology and Technology loves us</h3>
                                <p>We work on a wide variety of technologies that can develop futuristic solutions that aid in uninterrupted business development.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Slider Begin   --> */}
                    <Swiper
spaceBetween={30}
centeredSlides={true}
autoplay={{
  delay: 1200,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper" 
>
            <div class="owl-carousel owl-theme _techSlider _owlSlider owl-loaded owl-drag">
          <div  class="owl-stage-outer"></div>
         <div  class="owl-stage-outer" ></div>
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>

                <div class="item" data-aos="flip-right">
                    <figure class="_techFig">
                        <img  src={image1}  width="74" height="74" alt="Technology" class="img-fluid"/>
                        
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>

                <div class="item" data-aos="zoom-in-up">
                    <figure class="_techFig">
                        <img width="113" height="74" src={image2} alt="Technology" class="img-fluid" />
                        
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>

                <div class="item" data-aos="zoom-in">
                    <figure class="_techFig">
                        <img width="74" height="74" src={image3} alt="Technology" class="img-fluid" />
                       
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>

                <div class="item" >
                    <figure class="_techFig">
                        <img width="63" height="74" src={image4} alt="Technology" class="img-fluid"/>
                        
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>

                <div class="item" >
                    <figure class="_techFig">
                        <img width="118" height="74" src={image5} class="img-fluid" />
                        
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>
                <div class="item" >
                    <figure class="_techFig">
                        <img width="74" height="74" src={image6} class="img-fluid" />
                       
                    </figure>
                </div>
                </SwiperSlide>
                {/* <!-- item : Begin  --> */}
                {/* <!-- item : Begin  --> */}
                <SwiperSlide>
                <div class="item" >
                    <figure class="_techFig">
                        <img width="74" height="74" src={image7} alt="Technology" class="img-fluid" />
                        
                    </figure>
                </div>
                </SwiperSlide>
                
            </div>
            {/* <!-- Slider End     --> */}
            </Swiper>
                </div>
            </section >
            
            
    </div>
  )
}

export default Techonlogy
