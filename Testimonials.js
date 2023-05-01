import React from 'react';

// import components
import TestimonialSlider from '../components/TestimonialSlider';
import '../components/Testimonials.css';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container-fluid mx-auto'>
        <div
          className='bg-accent-primary min-h-[300px]'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          <div className='flex flex-col justify-center px-2 xl:px-0 h-[600px] ' id="margintop1">
            <h2 className='h2  text-center mb-[80px]' id='text1'>
              Features
            </h2>
            <TestimonialSlider />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
