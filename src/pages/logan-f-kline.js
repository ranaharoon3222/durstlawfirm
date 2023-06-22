import React from 'react';
import Head from 'next/head';
import Logan from '@/components/logan/Logan';
import Services from '@/components/serv/Services';
import Divider from '@/components/divider/Divider';
import LoganInfo from '@/components/loganInfo/LoganInfo';

const logan = () => {
  return (
    <>
      <Logan />
      <Services />
      <Divider />
      <LoganInfo />
    </>
  );
};

export default logan;
