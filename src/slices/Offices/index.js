import RichText from '@/commons/RichText';
import Link from 'next/link';

/**
 * @typedef {import("@prismicio/client").Content.OfficesSlice} OfficesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OfficesSlice>} OfficesProps
 * @param {OfficesProps}
 */
const Offices = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='container'>
        <div className='grid grid-cols-3 gap-10 py-16'>
          {slice.items.map((item, i) => (
            <div key={i}>
              <Link href={item.link_sub_page?.url || ''} className='block'>
                <img src={item.image.url} className='mb-4' />
                <RichText field={item.title} />
              </Link>
              <RichText field={item.short_text} />
              <RichText
                field={item.address}
                paragraphClassName='text-gray-500'
              />
              <RichText field={item.phone} />
              <Link
                href={item.directions.url}
                target='_blank'
                className='block mt-4 text-blue-600'
              >
                {' '}
                Directions{' '}
              </Link>
            </div>
          ))}
        </div>
      </div>{' '}
    </section>
  );
};

export default Offices;
