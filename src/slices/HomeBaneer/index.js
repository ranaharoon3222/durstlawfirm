/**
 * @typedef {import("@prismicio/client").Content.HomeBaneerSlice} HomeBaneerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeBaneerSlice>} HomeBaneerProps
 * @param {HomeBaneerProps}
 */
import React from 'react';
import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Paragraph from '@/commons/Paragraph';
import { ParallaxBanner } from 'react-scroll-parallax';
import RichText from '@/commons/RichText';

const HomeBaneer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative'
    >
      <div
        className='pt-32 text-center bg-top bg-cover mb-hide-bg md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage: `linear-gradient(64deg,#ffffff 39%,rgba(255, 255, 255, 0) 65%),url(${slice.primary.image.url})`,
        }}
      >
        <div className='container'>
          <div className=''>
            <div className=' max-w-[1000px]'>
              <h4 className='md:pb-5 pb-2 !text-[20px] italic font-semibold text-primary'>
                {slice.primary.subtitle}
              </h4>
              <RichText
                field={slice.primary.title}
                heading1='text-[1.7rem] font-[600]  !leading-[1.2] md:!leading-[1.1]   md:leading-[1.2]  md:text-[4vw]'
              />

              <Paragraph
                field={slice.primary.text}
                className={
                  'md:text-left text-center max-w-[600px] text-[16px] md:text-[1rem]  lg:max-w-[600px] 2xl:max-w-[800px] '
                }
              ></Paragraph>

              <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
                <Button
                  link='#PracticeAreas'
                  text='Practice Areas'
                  variant='outline'
                  color={'black'}
                  className='mb-4 md:mr-6 '
                >
                  <ArrowDown fill='black' />
                </Button>

                <Button
                  text='Call Us Today'
                  className='mb-4 '
                  variant='outline'
                  color={'red'}
                >
                  <Phone fill='red' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-divider-top md:hidden !top-[50px]'> </div>
      <ParallaxBanner
        layers={[
          {
            image: slice.primary.mbimage.url,
            speed: -10,
            translateY: [10, 50],
          },
        ]}
        className='h-[400px] md:hidden'
      />
      <div className='mb-divider md:hidden !top-[-50px]'> </div>

      <div className='hidden bt_divider md:block'></div>
    </section>
  );
};

export default HomeBaneer;
