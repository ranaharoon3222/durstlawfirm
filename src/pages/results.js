import React from 'react';
import Head from 'next/head';
import Result from '@/components/result/Result';
import ResBox from '@/components/resBoxes/ResBox';
import Box2Res from '@/components/boxes2/Box2Res';
import ResEnd from '@/components/resEnd/ResEnd';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';
import ResultPageHeading from '@/commons/pages/results/ResultPageHeading';
import ResultBoxes from '@/commons/pages/results/ResultBoxes';
import Brands from '@/components/brands/Brands';
import FooterCta from '@/commons/FooterCta';

const result = () => {
  return (
    <>
      <ResultPageHeading />
      <ResultBoxes />

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

export default result;
