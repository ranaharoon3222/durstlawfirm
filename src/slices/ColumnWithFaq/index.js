import Faq from '@/commons/Faq';
import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.ColumnWithFaqSlice} ColumnWithFaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColumnWithFaqSlice>} ColumnWithFaqProps
 * @param {ColumnWithFaqProps}
 */
const ColumnWithFaq = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10 md:my-20'>
        <div className='container grid gap-10 md:grid-cols-2'>
          <div>
            <Img
              src={slice.primary.image.url}
              className={'max-w-[500px] mx-auto'}
            />
          </div>
          <div>
            <h1> {slice.primary.title} </h1>
            <RichText field={slice.primary.text} />

            <div className='hs-accordion-group'>
              {slice.items.map((item, i) => (
                <Faq
                  key={i}
                  title={
                    <RichText field={item.title} paragraphClassName='!mt-0 ' />
                  }
                >
                  <RichText field={item.text} paragraphClassName='text-base' />
                </Faq>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnWithFaq;
