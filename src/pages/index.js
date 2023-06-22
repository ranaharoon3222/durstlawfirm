import Head from 'next/head';

import Practise from '@/components/home/prac/Practise';
import FourBox from '@/components/home/fourBox/FourBox';
import OurPurpose from '@/components/home/ourPurpose/OurPurpose';
import OnlyImg from '@/components/onlyImg/OnlyImg';
import UpperFoot from '@/components/upperFoot/UpperFoot';
import Transportation from './transportation';
import Brands from '@/components/brands/Brands';

export default function Home() {
  return (
    <>
      <Practise />
      <FourBox />
      <OurPurpose />

      <Brands />
      <UpperFoot />
    </>
  );
}
