import React from 'react';

import Img4 from '../assets/img/features/featureback.png'
import '../components/features-content.css';
import {Link} from 'react-scroll';
import Testimonials from '../components/Testimonials';
import Aboutfooter from '../components/about-footer';
import {Element} from 'react-scroll';
import Footer from '../components/Footer';
import Header from '../components/Header'

const features1 = () => {
  return (
    <div id="features">
         <Header/>
          {/* header of the section */}
          <section class="_heroBanner _innerBanner _aboutPage-banner" className='background1'>
         
      <div class="_header _menu_fixed animated fadeInDown" aria-hidden="false" id='downss' data-aos='fade-down'data-aos-delay='400'>
     
        <div className='navbar' >
        

{/* top company name and logo */}

{/* phone logo  */}
     
         <div className='phone-nav'>
{/* nav icon */}
         <button class="navbar-toggler bg-success" type="button" className='button1'>
                 <div class="navbar-toggler-icon">
                     <div class="bar bar-1"></div>
                      <div class="bar bar-2"></div>
                      <div class="bar bar-3"></div>
                 </div>
         </button>
    </div>
</div>
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
                         <Link to="join1" smooth={true} duration={500}>
                             <span class="_title-ribon _violetColor2 wow _fadeInLeft " className='feature1'> Features</span>
                             </Link>
                             <h1 class="_main-title wow _fadeInLeft display-4 text-white" data-wow-delay="0.2s" className='feature-text'>
                                 JoyRts Technology<br></br>Features
                             </h1>
                             <div class="_btn-grp wow _fadeInLeft" data-wow-delay="0.7s" className='textbutton'>
                                <Link to="join" smooth={true} duration={500}>
                                 <a href="https://joyrts.com/" class="btn btn-success" className='joinbut9'>Join The Team</a>
                                 </Link>
                             </div>
                         </div>
                     </div>
{/* image in right side */}

              <div class="col-md-6 col-lg-5 _bannerCap-col">
                     <div class="_imgGrp-container">
                         <div class="_imgGrp-inner" className='image1'>
                                 <img width="790" height="522" src={Img4} alt="joyRts is one of the most reputed web design and development companies, located in Chennai, Tamilnadu"data-aos="zoom-in-up" />
                         </div>
                             <span class="_tiangle">
                                 
                             </span>
                         </div>
                     </div>
              </div>
{/* link to scroll  */}
<br></br>
                 <Link to ="scroll" smooth={true} duration={500}>
                 <a href =''className='scroll' >
                     <p data-aos="zoom-in-up" class="text-success">Click Scroll --</p>
                 </a>
                 </Link>
             </div>
         </div>
     </section>
{/* feature content      */}
     <div>
        <Element id='join1' smooth={true} duration={500}>
        <Testimonials/>
        </Element>
     </div>
     <div>
{/* form table link to join our team         */}
        <Element id='join' smooth={true} duration={500}>
        <Aboutfooter/>
        </Element>
     </div>
     <div className='footer1'>
        <Footer/>
     </div>
    </div>
  )
}

export default features1
