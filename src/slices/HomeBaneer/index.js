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
import { useParallax } from 'react-scroll-parallax';

const HomeBaneer = ({ slice }) => {
  const { ref } = useParallax({ speed: -8 });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative'
    >
      <div
        className='pt-24 text-center bg-center bg-cover mb-hide-bg md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage: `linear-gradient(64deg,#ffffff 39%,rgba(255, 255, 255, 0) 65%),url(${slice.primary.image.url})`,
        }}
      >
        <div className='container'>
          <div className=''>
            <div className=' max-w-[700px]'>
              <h4 className='pb-5 italic font-semibold text-primary'>
                {slice.primary.subtitle}
              </h4>
              <h1 className='text-[2rem] font-medium md:leading-[1.3]  md:text-[3.5rem]'>
                {slice.primary.title}
              </h1>

              <Paragraph
                field={slice.primary.text}
                className={'md:text-left text-center '}
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

      <div ref={ref} className=' md:hidden'>
        <div className='mb-divider-top md:hidden !top-[50px]'> </div>
        <div
          className='bg-top  bg-cover h-[350px] bg-no-repeat  md:hidden'
          style={{
            backgroundImage: `url(${slice.primary.mbimage.url})`,
          }}
        ></div>
        <div className='mb-divider md:hidden !top-[-50px]'> </div>
        <div className='bt_divider'></div>
      </div>
      <div className='hidden bt_divider md:block'></div>
    </section>
  );
};

export default HomeBaneer;
