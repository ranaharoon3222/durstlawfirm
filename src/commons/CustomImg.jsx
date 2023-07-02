import React from 'react';

const CustomImg = () => {
  return (
    <div className='relative'>
      <img
        className='absolute -top-10 md:-top-16 -z-10 -left-16 md:-left-28 max-w-[300px]  md:max-w-[450px]'
        src='./images/orng-triangle.svg'
        alt=''
      />
      <img src='./images/wewin.jpg' className='' alt='' />
    </div>
  );
};

export default CustomImg;
