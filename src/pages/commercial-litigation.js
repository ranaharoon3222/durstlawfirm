// import Clients from '@/components/Clients'
import Brands from '@/components/brands/Brands';
import Clients from '@/components/clients/Clients';
import Commercial from '@/components/commercial/Commercial';
import Divider from '@/components/divider/Divider';
import OurLawyer from '@/components/ourLawyer/OurLawyer';
import TwoCard from '@/components/twoCard/TwoCard';
import WeWin from '@/components/weWin/WeWin';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Commercial />
      <Clients />
      <Divider />
      <WeWin />
      <OurLawyer />
      <Divider />
      <Brands />
      <Divider />
      <TwoCard />
    </>
  );
}
