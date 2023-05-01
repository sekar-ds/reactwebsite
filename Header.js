import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';


// import components
import Img1 from '../assets/img/features/joyblue.png';
import Img2 from '../assets/img/features/phone.svg'


import Nav from './Nav';
import NavMobile from './NavMobile';
import '../components/Header.css'

// import icons
import { FaBars } from 'react-icons/fa';
import Upload from 'antd/es/upload/Upload';
//import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const colors =[
    'green',
    
  ];

  const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY < 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  return (
    <header
      className='mb-12 lg:mb-10 z-20 relative px-0  lg:px-12 '
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='1000'
    id="margin-top">
     
      <div className='container-fluid mx-auto my-md-1' >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[190px] '>
            {/* logo */}
           
            <div id='topimages' className= {`nav ${show && 'nav__blue'}`}>
            <Tooltip placement="top" title="PH:+91-9789945809"color={colors} class="text-red" >

<img src={Img2} alt="phone" className="phone1" height="30px" width="30px" />
</Tooltip>
              <img src={Img1} alt='' height="30" width="60" className="topimage1"/>
              
            </div>
            

            {/* nav / initially hidden / show on large screens  */}
            <div className='hidden lg:flex ' id="navcon">
            
              <Nav />
              

            </div>
           
           <a href="#"></a>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-36 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden my-md-1 `}
          id="navblack">
            <NavMobile />
            <div className='navbutton2'>
            <img src={Img2} alt="phone" className="phone11" height="30px" width="30px"/>
             <a href="tel:+91-9789945809" className='phone222' width="20" height="20" class="ml-4"> +91-9789945809 </a>
             </div>
          </div>
          

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden absolute top-4 right-3  '
             id="navbar3" >
            <FaBars />
          </div>
        </div>
      </div>
     
  
    </header>
   
  );
};

export default Header;