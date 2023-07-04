import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const TestimonialsHeading = () => {
  return (
    <section className=' pt-32 max-w-[800px] mx-auto'>
      <div className='container text-center'>
        <Img
          src={'./images/quote-orange.svg'}
          className={'max-w-[60px] mx-auto'}
        />
        <h1 className='text-primary italic font-semibold'>Testimonials</h1>
        <Paragraph>See what our former clients have to say.</Paragraph>

        <div className='pt-5'>
          <h3>Filter by area</h3>
          <div className='flex justify-center'>
            <a
              href='#personalinjury'
              className='text-primary font-semibold italic underline mr-3'
            >
              Personal Injury
            </a>
            <a
              href='#commerciallitigation'
              className='text-primary font-semibold italic underline mr-3'
            >
              Commercial Litigation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHeading;
