import React from 'react';
import '../components/about-footer.css';

const footer = () => {
  return (
    <div>
    {/* header section */}
              <footer class="_footer " className='color1'>
                  <div class="_footerUpperSec _commonPadding _pB-0">
                      <span class="_f-cloud-1">
                        <span class="_cloud2-simg _upDown"></span>
                      </span>
                         <span class="_f-cloud-2">
                           <span class="_cloud1-simg _upDown"></span>
                       </span>
                     
    {/* top container                   */}
          <div class="container">
        
             <div class="_footer-top" className='toptext1'>
                <div class="_title-div text-center wow _fadeInbottom">
                    <p class="_title-tag _white " className='p1'>Contact us</p>
                    <p class="_title _btmLine-decor_white" className='p2'>Ready to Grow Your Business?</p>
                    <p class="_white _titleSub" className='p3'>Don't know where to start? We are available for free 30 min consultation</p>
                    <div class="_btn-div text-center">
                        <a href="tel:+91-9789945809" class="btn _btn-black" className='button1'>Call Us Now</a>
                        <a href="#" class="btn _btn-border" className='button2'>Request Call Back</a>
                    </div>
                </div>
            </div>
          
            <div class="_footerForm-outter">
                
    {/* form top area and form start            */}
                <div class="row" className='formtop'>
                    <div class="col-md-6 ol-lg-6 mx-auto">
                        <div role="form" class="wpcf7" id="wpcf7-f49-o2" lang="en-US" dir="ltr">
                            <div class="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                            </div>
    
    {/* form text area */}
                         <form action="/aboutus/" method="post" class="wpcf7-form init" novalidate="novalidate" className='form2' >
                                
                                <div class="_footerForm row">
                                    <div class="_title-div text-center">
                                        <p class="_title-tag _white" className='para11' >Get in Touch</p>
                                        <p class="_title _btmLine-decor-yellow _white" className='para22'>Tell us about your project</p>
                                    </div>
    {/* form field start  */}
                                    <div class="form-group col-md-6" id="forms">
                                        <span class="wpcf7-form-control-wrap your_name">
                                            <input type="text" required class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"  placeholder="Your Name*"/>
                                        </span>
                                    </div>
                                    <div class="form-group col-md-6" id="forms">
                                    <span class="wpcf7-form-control-wrap your_email">
                                        <input type='email' placeholder='Email' required class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"/>
                                        </span>
                                    </div>
                                    <div class="form-group col-md-12"id="forms">
                                        <span class="wpcf7-form-control-wrap mobile">
                                            <input type="tel"  class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"  placeholder="Mobile Number*"/>
                                        </span>
                                    </div>
                                    <div class="service_lavel">
                                        <p>Service(s) you are interested in</p>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <span class="wpcf7-form-control-wrap your-country">
                                            <span class="wpcf7-form-control wpcf7-checkbox form-control multiple">
                                                <span class="wpcf7-list-item first">
                                                    <input type="checkbox" name="your-country[]" value="Web Design &amp; Development"/>
                                                    <span class="wpcf7-list-item-label">Web Design &amp;Development</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Static Web Design"/>
                                                    <span class="wpcf7-list-item-label">Requirement Gathering</span>
                                                </span>
                                                
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Dynamic Web Design"/>
                                                    <span class="wpcf7-list-item-label">Digital Marketing services</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Ecommerce web Design"/>
                                                    <span class="wpcf7-list-item-label">Ecommerce web Design</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Web App Development"/>
                                                    <span class="wpcf7-list-item-label">Web App Development</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Mobile App Development"/>
                                                    <span class="wpcf7-list-item-label">Application Development Services</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="Android App Development"/>
                                                    <span class="wpcf7-list-item-label"> Application Support Services</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="IOS App Development"/>
                                                    <span class="wpcf7-list-item-label">Cloud Hosting Services</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="IOS App Development"/>
                                                    <span class="wpcf7-list-item-label"> Technology stack JAVA and Python</span>
                                                </span>
                                                <span class="wpcf7-list-item">
                                                    <input type="checkbox" name="your-country[]" value="IOS App Development"/>
                                                    <span class="wpcf7-list-item-label">BPO-BPM Digital Design, SEO and Marketing</span>
                                                </span>

                                            </span>
                                        </span>
                                    </div>
    {/* form text area   */}
                                    <div class="form-group col-md-12">
                                        <span class="wpcf7-form-control-wrap message" id="forms">
                                            <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Your Message"></textarea>
                                        </span>
                                    </div>
                                    <div class="form-group _btnDiv col-md-12">
                                        <input type="submit" value="Send Your Request" class="wpcf7-form-control wpcf7-submit btn _btn-large _btn" />
                                    </div>
                                </div>
                                <input type='hidden' class='wpcf7-pum' value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}'/>
                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    </div>
  )
}

export default footer;
