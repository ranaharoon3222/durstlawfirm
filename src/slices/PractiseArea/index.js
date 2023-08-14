/**
 * @typedef {import("@prismicio/client").Content.PractiseAreaSlice} PractiseAreaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PractiseAreaSlice>} PractiseAreaProps
 * @param {PractiseAreaProps}
 */

import RichText from '@/commons/RichText';
import Link from 'next/link';

const PractiseArea = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='PracticeAreas'
    >
      <div className='md:max-w-[1500px] md:mx-auto'>
        <div className='container '>
          <div className='py-4 pt-0 text-center md:pt-10 md:py-10'>
            <RichText field={slice.primary.topbar} paragraphClassName='mt-0'>
              {' '}
            </RichText>
          </div>
          <div className='grid gap-10 pb-10 md:grid-cols-3'>
            {slice.items.map((item, i) => {
              return (
                <Link key={i} href={item.link.url} className='block '>
                  <div
                    className={`py-12 md:py-20   bg-center bg-cover hover:-translate-y-6 md:min-h-[17rem]  hover:after:four-box-hover transition-all   flex items-center`}
                    style={{
                      backgroundImage: `radial-gradient(circle at center, rgba(8, 27, 51, 0.7) 0%,  rgba(8, 27, 51, 0.84) 100% ), url(${item.image.url})`,
                    }}
                  >
                    <div className='max-w-[200px] mx-auto'>
                      <h4 className='text-center text-white '>
                        {' '}
                        {item.title}{' '}
                      </h4>
                      <span className='bg-white w-[140px] mx-auto block py-[1px] my-4'>
                        {' '}
                      </span>
                      <span className='block text-xs text-center text-primary '>
                        Click for more
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PractiseArea;
