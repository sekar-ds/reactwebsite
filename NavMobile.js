import React from 'react';
import { Tooltip } from 'antd';


// import navigation data
import { navigationData } from '../data';


const NavMobile = () => {
  const colors =[
    'green',
    
  ];
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4 '>
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
              <Tooltip placement="right" title="check out "color={colors} class="text-red" >
   <a className='text-orange' href={item.href}>
              {item.name}
             
            </a>
  </Tooltip>
            
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
