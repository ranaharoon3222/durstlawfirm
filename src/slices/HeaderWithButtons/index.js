/**
 * @typedef {import("@prismicio/client").Content.HeaderWithButtonsSlice} HeaderWithButtonsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderWithButtonsSlice>} HeaderWithButtonsProps
 * @param {HeaderWithButtonsProps}
 */

import React from 'react';
import Button from '@/commons/Button';
import BigButton from '@/commons/BigButton';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import Link from 'next/link';
import PlainArrow from '@/icons/plain-arrow';
import RichText from '@/commons/RichText';

const HeaderWithButtons = ({ slice }) => {
  const features = [
    {
      title: 'Trucking Accident',
    },
    {
      title: 'Automobile Accident',
    },
    {
      title: 'Texting While Driving',
    },
    {
      title: 'Drunk Driving Accident',
    },
    {
      title: 'Distracted Driving Accident',
    },
    {
      title: 'Rideshare Accident',
      disabled: true,
    },
  ];
  return (
    <section
      className='relative'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className='pt-32 text-center bg-center bg-cover md:pb-32 md:pt-40 md:text-left '
        style={{
          backgroundImage: `${slice.primary.gradient} ,url(${slice.primary.background_image?.url})`,
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

              <RichText field={slice.primary.small_text} />

              <div className='mt-8'>
                <BigButton
                  variant='primary'
                  text={slice.primary.button_text_1}
                  link={slice.primary.button_link_1.url}
                >
                  <PlainArrow />
                </BigButton>

                <BigButton
                  variant='primary'
                  text={slice.primary.button_text_2}
                  link={slice.primary.button_link_2.url}
                  className='mt-5'
                >
                  <PlainArrow />
                </BigButton>
              </div>

              <RichText field={slice.primary.text} em={'text-primary'} />

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
              <h3 className='mb-8 font-semibold'>
                {slice.primary.second_col_title}
              </h3>

              <div className='grid gap-8 gap-y-1 md:grid-cols-2'>
                {slice.items.map((item, i) => (
                  <BigButton
                    key={i}
                    variant='primary'
                    text={item.button_title}
                    className={`mb-5 !w-full ${
                      item.disabled && 'opacity-50 pointer-events-none'
                    }`}
                  >
                    <PlainArrow />
                  </BigButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='bt_divider'></div>
    </section>
  );
};

export default HeaderWithButtons;
