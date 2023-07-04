import React from 'react';
import CustomImg from './CustomImg';
import Button from './Button';
import ArrowDown from '@/icons/arrow-down';

const ColWithImage = ({
  title = 'Why We Win',
  subTItle = 'Clear & Compelling Storylines',
  children,
  img,
}) => {
  return (
    <section>
      <div className='container grid !my-5 !mt-20 !mb-20 md:grid-cols-2 md:gap-40 gap-10 place-content-center items-center'>
        <div>
          <h1> {title} </h1>
          <h2 className='my-3 text-primary'> {subTItle} </h2>
          {children}
        </div>
        <div className='max-w-[600px]'>
          <CustomImg img={img} />
        </div>
      </div>
    </section>
  );
};

export default ColWithImage;
