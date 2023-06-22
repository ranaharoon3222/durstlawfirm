import Local from '@/components/local/Local';
import React from 'react';
import Head from 'next/head';
import LawyerAre from '@/components/lawyerAre/LawyerAre';
import Representative from '@/components/representative/Representative';
import Divider from '@/components/divider/Divider';
import FAQ from '@/components/faq/FAQ';
import Resources from '@/components/resources/Resources';
import Brands from '@/components/brands/Brands';

const local = () => {
  return (
    <>
      <Local />
      <LawyerAre />
      <Representative />
      <Divider />
      <FAQ />
      <Resources />
      <Divider />
      <Brands />
    </>
  );
};

export default local;
