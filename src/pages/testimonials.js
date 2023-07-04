import React from 'react';
import Head from 'next/head';

import Brands from '@/components/brands/Brands';
import TestimonialsHeading from '@/commons/pages/testimonials/TestimonialsHeading';
import TestimonialsBoxes from '@/commons/pages/testimonials/TestimonialsBoxes';
import FooterCta from '@/commons/FooterCta';

const testimonials = () => {
  return (
    <>
      <TestimonialsHeading />
      <TestimonialsBoxes />

      <FooterCta image={'/images/last-back-img.jpg'}>
        <h1 className='font-medium text-center text-white md:text-left md:text-[3rem] '>
          Contact The Durst Law Firm{' '}
          <span className='text-primary'> Today</span>.
        </h1>
      </FooterCta>

      <Brands />
    </>
  );
};

export default testimonials;
