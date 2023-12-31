import Faq from '@/commons/Faq';
import Paragraph from '@/commons/Paragraph';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faqs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10 md:my-24'>
        <div className='container'>
          <h1 className='text-center'>{slice.primary.title}</h1>
          <RichText
            field={slice.primary.text}
            paragraphClassName='text-center'
          />

          <div className='hs-accordion-group mt-16 max-w-[1000px] mx-auto'>
            {slice.items.map((item, i) => (
              <Faq
                key={i}
                title={
                  <RichText field={item.title} paragraphClassName='!mt-0' />
                }
              >
                <RichText field={item.text} paragraphClassName='text-base' />
              </Faq>
            ))}
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Faqs;
