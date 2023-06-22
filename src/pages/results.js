import React from 'react';
import Head from 'next/head';
import Result from '@/components/result/Result';
import ResBox from '@/components/resBoxes/ResBox';
import Box2Res from '@/components/boxes2/Box2Res';
import ResEnd from '@/components/resEnd/ResEnd';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';

const result = () => {
  return (
    <>
      <Result />
      <ResBox />
      <Box2Res />
      <ResEnd />
      <UpperFoot />
      <OnlyImg />
    </>
  );
};

export default result;
