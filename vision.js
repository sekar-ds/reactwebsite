import React from 'react';
import img1 from '../assets/img/features/our1.png';
import '../components/vision.css';
import Img2 from '../assets/img/features/vision1.png'

const vision = () => {
  return (
    <div>
  {/* header of the left content       */}
      <section class=" _commonPadding" className='back1'>
                    <div class="container-fluid">
                        <div class="row" className='flex' id="flex1">
                            {/* <!-- Col : Begin  --> */}
                            <div class="col-md-12 col-lg-6 _rd-col _rd-col-abs">
                                <div class="_roundDiv-abs _roundDiv-abs-2">
                                    <div class="_innerTxt">
                                        
                                        
                                    </div>
                                </div>
                            </div>
      {/* left our approach                       */}
                            <div class="col-md-12 col-lg-6 _rd-col" className='row1'  data-aos="fade-right">
                                <div class="_roundDiv _roundDiv-type-2 _roundDiv-1 wow _fadeInLeft">
                                    <div class="_roundDiv-inner">
                                        <span class="_rD-icon">
                                            <img width="45" height="46" src={img1} alt="img2" className='img1'/>
                                            
                                        </span>
                                        <p class="_title" className='img1' >Our Approach </p>
                                        <p class="_txt" >
                                             <p>Our approach lies in taking challenges and overcoming them. Projects that include innovation, brainstorming, and challenges excite us. Moreover, we love those clients who have an imagination for the project and have expectations from us. Our technical strength and years of industry experience have helped us understand the nook and cranny of the web design and development world. We work hard </p>
                                        </p>
                                  </div>
                               </div>
                           </div>
   {/* footer of the right content */}
                         <div class="col-md-12 col-xs-6 _rd-col" className='row2'  data-aos="fade-left">
                               <div class="_roundDiv _roundDiv-type-2 _roundDiv-2 wow _fadeInRight">
                                  <div class="_roundDiv-inner">
                                     <span class="_rD-icon">
    {/* footer image  */}
                                         <img width="45" height="46" src={Img2} alt="img6" className='img2'/>
                                      </span>
                                         <p class="_title" className='img2'>Our Vision</p>
                                            <p class="_txt">At JoyRts software solution, we aim at providing the finest web design, development, and marketing solutions to our clients that would help them experience a profitable growth online as well as help us increase our happy client list further. We eye on improving a number of business aspects that include quality of work, customer services, technology implementation, dynamic innovation, and keeping commitment, to name a few.</p>
                                  </div>
                              </div>
                         </div>
     {/* <!-- Col : End  --> */}
                    </div>
                </div>
        </section>
    </div>
  )
}

export default vision
