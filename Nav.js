import React, { useEffect ,useState} from 'react';
import { Tooltip } from 'antd';



// import navigation data
import { navigationData } from '../data';
import '../components/Nav.css';

const Nav = () => {
  const colors =[
    'red',
    
  ];
  
   

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 350 ) {
          setShow(true)
      }else{
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
    <nav class='navbar1 ' className={`active ${show && 'hidden'}`} onScroll={useEffect} >
      <ul className='flex gap-x-12  '>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <Tooltip placement="top" title="click"color={colors} class="text-red" >

              <a href={item.href}>{item.name}</a>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
