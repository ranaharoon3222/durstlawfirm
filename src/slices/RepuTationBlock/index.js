/**
 * @typedef {import("@prismicio/client").Content.RepuTationBlockSlice} RepuTationBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RepuTationBlockSlice>} RepuTationBlockProps
 * @param {RepuTationBlockProps}
 */

import Box from '@/commons/Box';
import Button from '@/commons/Button';
import RichText from '@/commons/RichText';
import React from 'react';

const RepuTationBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10'>
        <div className='container'>
          <div className='grid items-center gap-10 md:grid-cols-2'>
            <div className='grid items-center gap-10 md:grid-cols-2 place-content-center'>
              <div>
                {slice.items.slice(0, 2).map((item, i) => (
                  <Box
                    key={i}
                    title={item.title}
                    name={item.name}
                    icon={item.icon?.url}
                  >
                    <RichText field={item.text} />
                  </Box>
                ))}
              </div>

              <div>
                {slice.items.slice(2, 4).map((item, i) => (
                  <Box
                    key={i}
                    title={item.title}
                    name={item.name}
                    icon={item.icon?.url}
                  >
                    <RichText field={item.text} />
                  </Box>
                ))}
              </div>
            </div>

            <div className=''>
              <div className=''>
                <RichText
                  field={slice.primary.title}
                  heading1={
                    'text-[2rem] md:text-[3vw] leading-[1.2em] mb-9 font-semibold'
                  }
                  strong={'text-primary'}
                />
              </div>
              <div className=''>
                <RichText field={slice.primary.text} />
              </div>

              <div className='flex flex-wrap md:flex-nowrap mt-7'>
                <div className='mr-5'>
                  <Button
                    variant='primary-bg'
                    text={slice.primary.button_text_1}
                    link={slice.primary.button_link_1?.url}
                    className='inline-block w-auto px-5 mb-5 text-center '
                  />
                </div>

                <Button
                  variant='primary-bg'
                  text={slice.primary.button_text_2}
                  link={slice.primary.button_link_2?.url}
                  className='inline-block w-auto px-5 text-center'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepuTationBlock;
