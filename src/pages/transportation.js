import React from 'react';
import Hero from '@/components/transPortation/hero';
import Head from 'next/head';
import Icons from '@/components/onlyIcons/Icons';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import Repu from '@/components/repuTation/Repu';
import UpperFoot from '@/components/upperFoot/UpperFoot';
import Line from '@/components/line/Line';
import Brands from '@/components/brands/Brands';
import Divider from '@/components/divider/Divider';

const Transportation = () => {
  return (
    <>
      <Hero />
      <Icons />
      <Brands />
      <Divider />
      <Repu />
      <UpperFoot />
    </>
  );
};

export default Transportation;
