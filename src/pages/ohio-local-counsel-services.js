import React from 'react';
import Head from 'next/head';
import Divider from '@/components/divider/Divider';
import Resources from '@/components/resources/Resources';
import Brands from '@/components/brands/Brands';
import OhioBanner from '@/commons/pages/ohio-local-counsel-services/OhioBanner';
import ListGrid from '@/commons/pages/ohio-local-counsel-services/ListGrid';
import RepresenTiveCol from '@/commons/pages/ohio-local-counsel-services/RepresenTiveCol';
import OhioFaqs from '@/commons/pages/ohio-local-counsel-services/OhioFaqs';
import FooterCta from '@/commons/FooterCta';
import Paragraph from '@/commons/Paragraph';

const local = () => {
  return (
    <>
      <OhioBanner />
      <ListGrid />
      <RepresenTiveCol />
      <Divider />
      <OhioFaqs />

      <Resources />
      <Divider />
      <Brands />
      <FooterCta>
        <h1 className=' text-white'>
          Need Local Counsel in Ohio?{' '}
          <span className='text-primary'> Partner with Durst.</span>
        </h1>
        <Paragraph className=' text-white'>
          You can even call Alex on his direct line at (513) 621-2500 or on his
          personal cellphone at{' '}
          <a href='#' className='text-primary italic'>
            (513) 620-4529
          </a>
          .
        </Paragraph>
      </FooterCta>
    </>
  );
};

export default local;
