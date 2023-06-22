import Appeals from '@/components/appeals/Appeals';
import React from 'react';
import Head from 'next/head';
import Leadership from '@/components/appeal2/Leadership';
import FerIcons from '@/components/appeal3/FerIcons';
import Regrading from '@/components/regraDing/Regrading';
import Several from '@/components/several/Several';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';

const appeals = () => {
  return (
    <>
      <Appeals />
      <Leadership />
      <FerIcons />
      <Regrading />
      <Several />
      <UpperFoot />
      <OnlyImg />
    </>
  );
};

export default appeals;
