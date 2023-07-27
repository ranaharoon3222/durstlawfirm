import CustomImg from '@/commons/CustomImg';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.RepresentativeColumnSlice} RepresentativeColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RepresentativeColumnSlice>} RepresentativeColumnProps
 * @param {RepresentativeColumnProps}
 */
const RepresentativeColumn = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-28'>
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-2 md:gap-16'>
            <div className='max-w-[700px]'>
              <RichText field={slice.primary.title} strong={'text-primary'} />

              <RichText field={slice.primary.text} list={'mt-5'} />
            </div>

            <div>
              <CustomImg img={slice.primary.image.url} />
              <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2'>
                <div>
                  <h2> {slice.primary.image_title} </h2>
                  <RichText field={slice.primary.bottom_image_text} />
                </div>
                <div>
                  <ul className='listing'>
                    {slice.items.map((item, index) => (
                      <li key={index} className='mt-3'>
                        {item.state}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepresentativeColumn;
