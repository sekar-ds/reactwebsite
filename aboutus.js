import React from 'react';
import '../components/aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img4 from '../assets/img/features/featurerow.png';


import Img3 from '../assets/img/features/innovation.png';
import Vision from './vision';
import Process from '../components/process';
import Footer from '../components/about-footer';
import {Link} from 'react-scroll';
import {Element} from 'react-scroll';
import Footer1 from '../components/Footer';
import Header from '../components/Header'







const aboutus = () => {
  return (
    


    <div>
       
    {/* header of the section */}
              <section class="_heroBanner _innerBanner _aboutPage-banner" className='background'>
      
                 <div class="_header _menu_fixed animated fadeInDown"  id='downss' data-aos='fade-down'data-aos-delay='400'>
        
    {/* top company name and logo */}        
    <Header class="mt-13 " id="header2"/>
             
      </div>

    {/* display content */}
                    
            <div class="container " >
                     <span class="_redRing " >
                            </span>
    {/* <!-- banner Caption  --> */}
                        <div class="_banner-cation-div " className='top-baner' >
                            <div class="row _banner-cap-row " >
    {/* text group and button */}

                                <div class="col-md-6 col-lg-7 _bannerCap-col"  >
                                    <div class="_banner-text-grp" id="text-group" data-aos="fade-right">
                                        <span class="_title-ribon _violetColor2 wow _fadeInLeft " className='about'> About Us</span>
                                        <h1 class="_main-title wow _fadeInLeft display-4 text-white" data-wow-delay="0.2s">
                                            About<br></br>JoyRts Technology
                                        </h1>
                                        <div class="_btn-grp wow _fadeInLeft" data-wow-delay="0.7s" className='textbutton'>
                                            <Link to="join" smooth={true} duration={500}>
                                            <a href="https://joyrts.com/" class="btn _btn _btn-darkBlue" className='joinbut'>Join The Team</a></Link>
                        
                                            <a href="https://joyrts.com//" class="btn _btn-border" className='joinbut1'>InFrastructure</a>
                                        </div>
                                    </div>
                                </div>
    {/* image in right side */}

                         <div class="col-md-6 col-lg-5 _bannerCap-col">
                                <div class="_imgGrp-container">
                                    <div class="_imgGrp-inner" className='image1'>
                                            <img width="790" height="522" src={Img4} className="imgrow" alt="joyRts is one of the most reputed web design and development companies, located in Chennai, Tamilnadu"data-aos="zoom-in-up" />
                                    </div>
                                        <span class="_tiangle">
                                            
                                        </span>
                                    </div>
                                </div>
                         </div>
    {/* link to scroll  */}

                            <Link to ="scroll" smooth={true} duration={500}>
                            <a href =''className='scroll' >
                                <p data-aos="zoom-in-up">Click Scroll --</p>
                            </a>
                            </Link>
                        </div>
                    </div>
                </section>

    {/* About section text and image             */}
                <section class="_aboutPage _aboutSection _commonPadding _pB-0" >
                    <span class="_absImg-1">
                        <span class="_s-img _spin"></span>
                    </span>
                     <div class="container-fluid" id="aboutSec1" >
                        {/* <!--- Row : Begin  --> */}
                        <div class="row" >
                            {/* <!-- col : Begin  --> */}
                            <div class="col-md-12  col-lg-6 _sec-col" >
                                <figure class="_abtPage-fig" className='backpage'>
                                    <img width="540" height="382" class="mt-10"src={Img3} alt="joyrts office" data-aos="zoom-in-up" />

                                </figure>
                            </div>
                            {/* <!-- col : End  --> */}
                            <div class="col-md-12  col-lg-6 _sec-col">
                                <div class="_contBlock  wow _fadeInRight"  data-aos="fade-left" className='background-color'>
                                    <div class="_title-div">
                                        <p class="_title-tag text-danger mt-7" id='aboutus'>About us </p>
                                        <p class="lead display-6" id="p2">Who We Are</p>
                                    </div>
                                    <p class="_imp-text-1 " id='paragraph22'>JoyRts is one of the most reputed web design and development companies, located in Chennai, Tamilnadu.</p>
                                    <p className='summary' >With a wide array of web design, Requirement Gathering,development, Digital Marketing services,Application Development Services,Application Support Services ,Cloud Hosting Services  and branding solutions, we have been helping businesses from different industries, niches, and dimensions all across the globe. Our services include professional web development, software development, web application development,  to name a few. We extend our services to the customers who want to take their businesses online,based on their unique requirements.</p>
                                    <p  className='summary'>At JoyRts, we take pride in being able to gather some of the most skilled and experienced designers, developers, digital-marketing, and Application support services, who can help the end-users reach to the top with an exceptional quality of work. Our innovation and technological expertise have made us one of the most trusted web design and development companies.</p>

                                </div>
                            </div>
                        </div>
                        </div>
                        </section>
                     {/* vision section */}
                     <div className='vision'>
                     <Vision/>
                     </div>
                     
                     {/* service provide */}
                     <div className='service'>
                     <Process/>
                     </div>
                     {/* about-footer */}
                     <div>
                        <Element id="join" className='linkto'>
                        <Footer/>
                        </Element>
                     </div>
                     <div className='footer1'>
                        <Footer1/>
                     </div>
                
                                     
        </div>
                            
        
                
    
  )
}



export default aboutus
