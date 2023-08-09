/**
 * @typedef {import("@prismicio/client").Content.CommercialBannerSlice} CommercialBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CommercialBannerSlice>} CommercialBannerProps
 * @param {CommercialBannerProps} *
 */

import React from 'react';
import Button from '@/commons/Button';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Link from 'next/link';
import RichText from '@/commons/RichText';

const CommercialBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='relative'>
        <div
          className='pt-32 pb-32 bg-center bg-cover md:pt-40 '
          style={{
            backgroundImage:
              'linear-gradient(64deg,#fff 31%,hsla(0,0%,100%,.55) 80%),url(/images/Commercialbg.jpg) ',
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
                    text='Call Us '
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
                <h3 className='font-semibold'>{slice.primary.second_title}</h3>
                <ul className='mt-4 shadow-md md:pl-16 md:py-14 bg-white/70 listing p-7'>
                  {slice.items.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`md:mb-5 mb-1 md:text-xl font-semibold font-lato ${
                          item.link?.url
                            ? 'text-primary underline inline-block italic'
                            : ''
                        }`}
                      >
                        <Link href={item.link?.url ? item.link?.url : '#'}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=''></div>
        <div className='bt_divider'></div>
      </div>
    </section>
  );
};

export default CommercialBanner;
