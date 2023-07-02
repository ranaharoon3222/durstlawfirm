// import Clients from '@/components/Clients'
import BulletsGrid from '@/commons/BulletsGrid';
import Banner from '@/commons/pages/commercial-litigation/Banner';
import ColWithImage from '@/commons/col-with-image';
import Brands from '@/components/brands/Brands';
import Clients from '@/components/clients/Clients';
import Divider from '@/components/divider/Divider';
import OurLawyer from '@/components/ourLawyer/OurLawyer';
import TwoCard from '@/components/twoCard/TwoCard';
import WeWin from '@/components/weWin/WeWin';
import Head from 'next/head';
import ThreeBoxes from '@/commons/pages/commercial-litigation/ThreeBoxes';

export default function Home() {
  return (
    <>
      <Banner />

      <Clients />
      <Divider />
      <ColWithImage />
      {/* <WeWin /> */}
      {/* <OurLawyer /> */}
      <BulletsGrid />
      <Divider />
      <Brands />
      <Divider />
      <ThreeBoxes />
    </>
  );
}
