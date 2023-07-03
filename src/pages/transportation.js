import React from 'react';

import Brands from '@/components/brands/Brands';
import Divider from '@/components/divider/Divider';
import TransportBanner from '@/commons/pages/transportation/TransportBanner';
import TickList from '@/commons/pages/transportation/TickList';
import PreFooter from '@/commons/PreFooter';
import FooterCta from '@/commons/FooterCta';

const Transportation = () => {
  return (
    <>
      <TransportBanner />
      <TickList />
      <Brands />
      <Divider />

      <PreFooter />
      <FooterCta image={'/images/last-back-img.jpg'}>
        <h2 className='font-medium text-center text-white md:text-left md:text-[2rem] '>
          <span className='text-primary'>
            If you’ve been injured in a transportation accident,
          </span>{' '}
          it’s crucial that we discuss your case as quickly as possible.
        </h2>
      </FooterCta>
    </>
  );
};

export default Transportation;
