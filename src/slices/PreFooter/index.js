/**
 * @typedef {import("@prismicio/client").Content.PreFooterSlice} PreFooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PreFooterSlice>} PreFooterProps
 * @param {PreFooterProps}
 */

import Box from '@/commons/Box';
import Button from '@/commons/Button';
import RichText from '@/commons/RichText';
import React from 'react';

const PreFooter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className='container '>
        <div className='items-center grid-cols-8 gap-8 my-16 md:grid '>
          {slice.items.map((item, index) => (
            <div
              className={`${index == 1 ? 'col-span-2' : 'col-span-4 '}`}
              key={index}
            >
              <Box
                icon={item.icon.url}
                title={item.title}
                name={item.name}
                position={item.position}
              >
                <RichText field={item.text} />
              </Box>
            </div>
          ))}

          <div className='col-span-2'>
            <Button
              text={slice.primary.button_text}
              link={slice.primary.button_link?.url}
              variant='primary-bg'
              className='mb-5'
            />
            <Button
              text={slice.primary.button_2_text}
              link={slice.primary.button_2_link?.url}
              variant='primary-bg'
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PreFooter;
