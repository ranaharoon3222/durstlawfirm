import React from 'react';
import Head from 'next/head';
import Injury from '@/components/personal/Injury';
import Laywers from '../components/laywers/Laywers';
import Repu from '@/components/repuTation/Repu';
import GoodSign from '@/components/goodIcons/GoodSign';
import ShadoImg from '@/components/shado/ShadoImg';
import DropDouwn from '@/components/dropDown1/DropDouwn';
import AgainDrop from '@/components/againDrop/AgainDrop';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';
const personalinjury = () => {
  return (
    <>
      <Injury />
      <Laywers />
      <Repu />
      <GoodSign />
      <ShadoImg />
      <DropDouwn />
      <UpperFoot />
      <AgainDrop />
      <OnlyImg />
    </>
  );
};

export default personalinjury;
