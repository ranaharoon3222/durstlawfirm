import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';

const FooterCta = ({
  image = '/images/last-back-img.jpg',
  children,
  logo = '/images/logo_11zon.jpg',
}) => {
  return (
    <div
      className='relative mt-10 bg-fixed bg-center bg-cover'
      style={{
        backgroundImage: `linear-gradient( 180deg, rgba(8,27,51,0.76) 0%, rgba(8,27,51,0.9) 100% ),url(${image})`,
      }}
    >
      <div className='container relative py-20 md:py-32'>
        <img
          src={logo}
          className='absolute bg-white md:left-2 md:-top-10 max-w-[80px]  left-1/2 -top-10 shadow translate-x-[-50%]'
        />

        <div className='grid gap-5  md:grid-cols-2 max-w-[1400px] mx-auto'>
          <div>{children}</div>
          <div className=''>
            <div>
              <Button
                link='tel:513-621-4999'
                variant='primary-bg'
                text='Call Us'
                className='mx-auto mb-8 bg-primary hover:bg-secondry'
              >
                <Phone fill='' />
              </Button>
            </div>

            <Button
              link='/offices'
              variant='primary-bg'
              text='Email Us'
              className='bg-white !text-secondry mx-auto hover:!text-white'
            >
              <ArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;
