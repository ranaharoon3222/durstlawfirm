import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import { ParallaxBanner } from 'react-scroll-parallax';

const FooterCta = ({
  image = '/images/last-back-img.jpg',
  children,
  logo = '/images/logo_11zon.jpg',
}) => {
  return (
    <div className='relative mt-10 bg-fixed bg-center bg-cover'>
      <div className='relative z-20 '>
        <div className='container relative'>
          <img
            src={logo}
            className='absolute bg-white md:left-2 md:-top-10 max-w-[80px]  left-1/2 -top-10 shadow translate-x-[-50%]'
          />
        </div>
      </div>
      <ParallaxBanner
        layers={[
          {
            image: image,
            speed: -60,
            translateY: [-50, 100],
            scale: [1.5, 1.5],
          },
        ]}
        className='min-h-[370px] relative'
      >
        <div className='absolute inset-0 flex items-center justify-center '>
          <div
            style={{
              backgroundImage: `linear-gradient( 180deg, rgba(8,27,51,0.76) 0%, rgba(8,27,51,0.9) 100% )`,
            }}
            className='h-[370px] w-full absolute left-0 top-0 z-[1]'
          ></div>
          <div className='grid gap-5 relative z-10  md:grid-cols-2 max-w-[1400px] mx-auto'>
            <div>{children}</div>
            <div className=''>
              <div>
                <Button
                  link='tel:513-621-4999'
                  variant='primary-bg'
                  text='Call Us'
                  className='mx-auto !capitalize mb-8 bg-primary hover:bg-secondry'
                >
                  <Phone fill='' />
                </Button>
              </div>

              <Button
                link='/offices'
                variant='primary-bg'
                text='Email Us'
                className='bg-white !capitalize !text-secondry mx-auto hover:!text-white'
              >
                <ArrowDown />
              </Button>
            </div>
          </div>{' '}
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default FooterCta;
