import React from 'react';
import Head from 'next/head';
import Alex from '@/components/alex/Alex';
import Services from '@/components/serv/Services';
import Divider from '@/components/divider/Divider';
import AlexInfo from '@/components/alexInfo/AlexInfo';

const alex = () => {
  return (
    <>
      <Alex />
      <Services />
      <Divider />
      <AlexInfo />
    </>
  );
};

export default alex;
