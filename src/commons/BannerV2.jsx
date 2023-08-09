import React from 'react';
import Paragraph from './Paragraph';
import Button from './Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Img from './Image';
import ImageWithCorner from './ImageWithCorner';

const BannerV2 = ({
  children,
  title,
  subTitle,
  img = '/images/back-boy-img.jpg',
}) => {
  return (
    <section className='pt-32 text-center bg-center bg-cover md:pb-12 md:pt-40 md:text-left '>
      <div className='container'>
        <div className='grid gap-10 md:grid-cols-7'>
          <div className='md:col-span-4'>
            <h4 className='italic font-semibold text-primary'>{subTitle}</h4>
            <h1 className='text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'>
              {title}
            </h1>

            {children}
          </div>

          <div className='md:col-span-3'>
            <ImageWithCorner img={img} className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerV2;
