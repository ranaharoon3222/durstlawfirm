import Button from '@/commons/Button';
import Img from '@/commons/Image';
import RichText from '@/commons/RichText';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';

/**
 * @typedef {import("@prismicio/client").Content.BannerWithBackgroundImageSlice} BannerWithBackgroundImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerWithBackgroundImageSlice>} BannerWithBackgroundImageProps
 * @param {BannerWithBackgroundImageProps}
 */
const BannerWithBackgroundImage = ({ slice }) => {
  return (
    <section
      className='relative'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className='pt-32 text-center bg-center bg-cover md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage: `linear-gradient(64deg,#ffffff 31%,rgba(255,255,255,0.45) 80%),url(${slice.primary.bg_image.url})`,
        }}
      >
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2'>
            <div className=''>
              <h4 className='italic font-semibold text-primary'>
                {slice.primary.subtitle}
              </h4>

              <RichText
                field={slice.primary.title}
                heading1={
                  'text-[2rem] font-medium md:leading-[4.5vw]  md:text-[3.5vw] md:my-8'
                }
              />
              <RichText field={slice.primary.text} />

              <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
                <Button
                  text='Call Us Today '
                  className='mb-4 md:mr-6 '
                  variant='outline'
                  color={'red'}
                  link='tel:513-621-4999'
                >
                  <Phone fill='red' />
                </Button>
                <Button
                  text='Send A Message'
                  variant='outline'
                  color={'black'}
                  className='mb-4 '
                  link='/contact'
                >
                  <ArrowDown fill='black' />
                </Button>
              </div>
            </div>

            <div>
              <Img
                src={slice.primary.image.url}
                className='max-w-[550px] mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='bt_divider gray'></div>
    </section>
  );
};

export default BannerWithBackgroundImage;
