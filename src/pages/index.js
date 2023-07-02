import Practise from '@/components/home/prac/Practise';
import FourBox from '@/components/home/fourBox/FourBox';
import OurPurpose from '@/components/home/ourPurpose/OurPurpose';
import Brands from '@/components/brands/Brands';
import FooterCta from '@/commons/FooterCta';

export default function Home() {
  return (
    <>
      <Practise />
      <FourBox />
      <OurPurpose />

      <Brands />
      <FooterCta image={'/images/last-back-img.jpg'}>
        <h1 className='font-medium text-center md:text-left text-white md:text-[3vw]'>
          Contact The Durst Law Firm{' '}
          <span className='text-primary'> Today. </span>
        </h1>
      </FooterCta>
    </>
  );
}
