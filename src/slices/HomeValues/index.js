/**
 * @typedef {import("@prismicio/client").Content.HomeValuesSlice} HomeValuesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeValuesSlice>} HomeValuesProps
 * @param {HomeValuesProps}
 */

import Box from '@/commons/Box';
import Button from '@/commons/Button';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

const HomeValues = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='Our_Purpose'
    >
      <div>
        <div className='container'>
          <div className='grid md:grid-cols-2 mt-[100px] gap-12'>
            <div className='grid items-center gap-10 md:grid-cols-2 place-content-center'>
              {slice.items.map((item, index) => {
                return (
                  <Box
                    key={index}
                    title={item.title}
                    name={item.name}
                    position={item.position}
                    icon={item.icon.url}
                  >
                    <Paragraph field={item.text} />
                  </Box>
                );
              })}{' '}
              {/* <div>
                {slice.items.slice(2, 4).map((item, index) => {
                  return (
                    <Box
                      key={index}
                      title={item.title}
                      name={item.name}
                      position={item.position}
                      icon={item.icon.url}
                    >
                      <Paragraph field={item.text} />
                    </Box>
                  );
                })}{' '}
              </div> */}
            </div>

            <div className=''>
              <div className='flex items-center '>
                <img
                  src={slice.primary.logo.url}
                  alt=''
                  className='max-w-[80px]'
                />
                <h1 className='text-[32px] font-semibold'>
                  {slice.primary.title}
                </h1>
              </div>
              <div className=''>
                <RichText
                  heading4={'text-[#e54a35]'}
                  field={slice.primary.text}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeValues;
