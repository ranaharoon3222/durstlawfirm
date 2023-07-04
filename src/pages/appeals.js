import Appeals from '@/components/appeals/Appeals';
import React from 'react';
import Head from 'next/head';
import Leadership from '@/components/appeal2/Leadership';
import FerIcons from '@/components/appeal3/FerIcons';
import Regrading from '@/components/regraDing/Regrading';
import Several from '@/components/several/Several';
import UpperFoot from '@/components/upperFoot/UpperFoot';
import AppealsBanner from '@/commons/pages/appeals/AppealsBanner';
import Brands from '@/components/brands/Brands';
import FooterCta from '@/commons/FooterCta';
import Paragraph from '@/commons/Paragraph';
import ColWithImage from '@/commons/col-with-image';
import TickList from '@/commons/pages/transportation/TickList';
import MultiColBg from '@/commons/MultiColBg';

const appeals = () => {
  return (
    <>
      <AppealsBanner />
      <MultiColBg></MultiColBg>

      <TickList />
      <MultiColBg></MultiColBg>
      <ColWithImage
        img='./images/head-boy-pic.jpg'
        title='Always Looking Several Steps Ahead'
        subTItle=''
      >
        <Paragraph>
          When we are hired as appellate counsel, we are often brought in before
          the appeal has been filed.
        </Paragraph>
        <Paragraph>
          Our services are not limited to appellate briefing, handling oral
          argument, etc., but include assisting trial counsel with preserving
          issues for appeal, ensuring procedural requisites for an appeal are
          satisfied, and drafting post-trial motions in anticipation of appeal.
        </Paragraph>
      </ColWithImage>
      <FooterCta image={'/images/last-back-img.jpg'}>
        <h1 className='font-medium text-center text-white md:text-left md:text-[3rem] '>
          Contact the
          <span className='text-primary'> Appellate Attorneys </span> At The
          Durst Law Firm.
        </h1>
        <Paragraph className={'text-white'}>
          If you need an appellate attorney for an Ohio case, call The Durst Law
          Firm at
          <a href='#' className='text-primary'>
            (513) 621-4999
          </a>
          to discuss your options.
        </Paragraph>
      </FooterCta>
      <Brands />
    </>
  );
};

export default appeals;
