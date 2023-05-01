import React from 'react';
import Img1 from '../assets/img/features/innovation.png';
import '../components/aboutdisplaypage.css';
import {  Link } from "react-router-dom";



const aboutdisplaypage = () => {
  return (
    <div>
      <section class="_aboutPage _aboutSection _commonPadding _pB-0" id="aboutSec1">
                    <span class="_absImg-1">
                        <span class="_s-img _spin"></span>
                    </span>
                    <div class="container">
        {/* <!--- Row : Begin  --> */}
                        <div class="row">
         {/* <!-- col : Begin  --> */}
                            <div class="col-md-12  col-lg-6 _sec-col">
                                <figure class="_abtPage-fig" className='backpage1' >
                                    <img width="540" height="382" src={Img1} alt="joyrts office" data-aos="zoom-in-up" />

                                </figure>
                            </div>
        {/* <!-- col : End  --> */}
                            <div class="col-md-12  col-lg-6 _sec-col">
                                <div class="_contBlock  wow _fadeInRight"  data-aos="fade-left">
                                    <div class="_title-div">
                                        <p class="_title-tag" className='p1'>About us </p>
                                        <p class="_title _btmLine-decor" className='p33'>The Most Trusted Web Design Company in Chennai</p>
                                    </div>
                                    <p class="_imp-text-1 " id='paragraph1'>Do you want to empower your   business digitally?
                                                       Do you get hold of the millions of online traffic?
                                                       You've landed in the right place.</p>
                                    <p className='summary1' >With a wide array of web design, Requirement Gathering,development, Digital Marketing services,Application Development Services,Application Support Services ,Cloud Hosting Services  and branding solutions, we have been helping businesses from different industries, niches, and dimensions all across the globe. Our services include professional web development, software development, web application development,  to name a few. We extend our services to the customers who want to take their businesses online,based on their unique requirements.</p>
                                    <p  className='summary2'>At JoyRts, we take pride in being able to gather some of the most skilled and experienced designers, developers, digital-marketing, and Application support services, who can help the end-users reach to the top with an exceptional quality of work. Our innovation and technological expertise have made us one of the most trusted web design and development companies.</p>

                                  
     {/* link the aboutus.js in  Routes */}
                                    <Link to="/about" className='link2'>Explore Aboutus</Link>

                              

                                </div>
                            </div>
                        </div>
                        </div>
                        </section>
                     
    </div>
  )
}

export default aboutdisplaypage
