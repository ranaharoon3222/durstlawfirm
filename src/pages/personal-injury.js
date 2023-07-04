import React from 'react';
import Laywers from '../components/laywers/Laywers';
import Repu from '@/components/repuTation/Repu';
import GoodSign from '@/components/goodIcons/GoodSign';
import ShadoImg from '@/components/shado/ShadoImg';
import DropDouwn from '@/components/dropDown1/DropDouwn';
import AgainDrop from '@/components/againDrop/AgainDrop';
import InjuryBanner from '@/commons/pages/personal-injury/InjuryBanner';
import ColWithImage from '@/commons/col-with-image';
import PreFooter from '@/commons/PreFooter';
import TickList from '@/commons/pages/transportation/TickList';
import Brands from '@/components/brands/Brands';
import FooterCta from '@/commons/FooterCta';
import TwoCol from '@/commons/pages/personal-injury/TwoCol';
import TwoColReverse from '@/commons/pages/personal-injury/TwoColReverse';
import Faqs from '@/commons/pages/personal-injury/Faqs';

const personalinjury = () => {
  return (
    <>
      <InjuryBanner />
      <ColWithImage
        img='./images/pi-2.jpg'
        title='What sets The Durst Law Firm apart from other personal injury lawyers?'
        subTItle='We go the extra mile.'
      >
        <p>
          At The Durst Law Firm, we ensure that our clients receive as much
          compensation as possible. <b>We go the extra mile </b> to identify all
          possible defendants (for instance, if our client was injured by a
          drunk driver, we investigate to see if the driver was over-served at a
          bar that can also be sued in what is called a “dram shop” lawsuit) and
          locate all applicable insurance coverage (sometimes you can go after
          your own insurance company for additional compensation, for example).
        </p>
        <p className='mt-5'>
          We do not advertise on billboards and we do not work on volume - we
          take serious injury cases only and devote the time and resources to
          them that they require (and, of course, we promptly return phone calls
          and keep our clients apprised at every stage). If it is in our
          client's interest, we will go to trial. We help our clients through
          every stage of the case, striving to be incredibly thorough and leave
          them with no doubt that we have done everything possible for them.
        </p>
      </ColWithImage>
      <PreFooter />
      <TickList />
      <TwoCol />
      <TwoColReverse />
      <FooterCta image={'/images/last-back-img.jpg'}>
        <h1 className='font-medium text-center md:text-left text-white md:text-[3vw]'>
          <span className='text-primary'> Injured? </span>
          You need a lawyer. You need Durst.
        </h1>
        <p className='text-white mt-5'>
          If you’ve been injured, your case deserves a tenacious lawyer like The
          Durst Law Firm.
        </p>
      </FooterCta>
      <Faqs />
      <Brands />
    </>
  );
};

export default personalinjury;
