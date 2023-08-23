/**
 * @typedef {import("@prismicio/client").Content.HomeValuesSlice} HomeValuesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeValuesSlice>} HomeValuesProps
 * @param {HomeValuesProps}
 */

import Box from '@/commons/Box';
import Button from '@/commons/Button';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

const HomeValues = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='Our_Purpose'
    >
      <div>
        <div className='container'>
          <div className='grid md:grid-cols-2 mt-[30px] md:mt-[50px] md:gap-12 gap-6'>
            <div className='grid gap-6 md:gap-10 md:grid-cols-2 '>
              {slice.items.map((item, index) => {
                return (
                  <Box
                    key={index}
                    title={item.title}
                    name={item.name}
                    position={item.position}
                    icon={item.icon.url}
                    titleClass={'md:text-[1.8vw]'}
                    positionClass={'md:text-[1vw]'}
                    nameClass={'md:text-[1vw] mb-0'}
                  >
                    <Paragraph
                      field={item.text}
                      className={'!mt-0 md:text-[1vw]'}
                    />
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
              <div className='flex items-center mb-5 '>
                <img src={context.logo.url} alt='' className='max-w-[80px]' />
                <h1 className='text-[32px] font-semibold'>
                  {slice.primary.title}
                </h1>
              </div>
              <div className=''>
                <RichText
                  heading4={'text-[#e54a35] !my-0 !mt-3'}
                  paragraphClassName='md:text-[1.2vw] !mt-0'
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
