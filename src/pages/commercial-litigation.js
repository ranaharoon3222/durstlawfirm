// import Clients from '@/components/Clients'
import BulletsGrid from '@/commons/BulletsGrid';
import Banner from '@/commons/pages/commercial-litigation/Banner';
import ColWithImage from '@/commons/col-with-image';
import Brands from '@/components/brands/Brands';
import Clients from '@/components/clients/Clients';
import Divider from '@/components/divider/Divider';
import ThreeBoxes from '@/commons/pages/commercial-litigation/ThreeBoxes';
import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';

export default function Home() {
  return (
    <>
      <Banner />

      <Clients />
      <Divider />
      <ColWithImage img='./images/wewin.jpg'>
        <p>
          We distill complex commercial disputes into clear and compelling
          storylines, tailoring our presentation to the audience, whether it be
          a jury, judge, or arbitrator. These skills are crucial in commercial
          litigation matters.
        </p>
        <Button text='Meet the Team' link='#' color='black' className={'mt-10'}>
          <ArrowDown fill='black' />
        </Button>
      </ColWithImage>
      <BulletsGrid />
      <Divider />
      <Brands />
      <Divider />
      <ThreeBoxes />
    </>
  );
}
