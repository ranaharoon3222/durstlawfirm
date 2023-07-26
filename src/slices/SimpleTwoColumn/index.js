import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.SimpleTwoColumnSlice} SimpleTwoColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SimpleTwoColumnSlice>} SimpleTwoColumnProps
 * @param {SimpleTwoColumnProps}
 */
const SimpleTwoColumn = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10 md:my-20'>
        <div className='container grid gap-10 md:grid-cols-2'>
          <div>
            <h1> {slice.primary.title} </h1>
            <RichText
              field={slice.primary.text}
              list={'listing mt-5 ml-5 '}
              listItem={'mb-3'}
            />
          </div>
          <div>
            <Img
              src={slice.primary.image.url}
              className={'max-w-[500px] mx-auto'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTwoColumn;
