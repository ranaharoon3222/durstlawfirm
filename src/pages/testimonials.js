import React from 'react';
import Head from 'next/head';
import Testi from '@/components/testiMonial/Testi';
import TestiBox from '@/components/testiBox1/TestiBox';
import LastTesti from '@/components/testiLast/LastTesti';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';
import Brands from '@/components/brands/Brands';

const testimonials = () => {
  return (
    <>
      <Testi />
      <TestiBox />
      <LastTesti />
      <Brands />
      <UpperFoot />
    </>
  );
};

export default testimonials;
