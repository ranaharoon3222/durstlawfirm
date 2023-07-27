import Faq from '@/commons/Faq';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.FaqWIthTitleSlice} FaqWIthTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqWIthTitleSlice>} FaqWIthTitleProps
 * @param {FaqWIthTitleProps}
 */
const FaqWIthTitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10 md:my-24'>
        <div className='container'>
          <div className=' mt-16 max-w-[1000px] mx-auto'>
            <h2> {slice.primary.title} </h2>
            <RichText field={slice.primary.text} />
          </div>
          <div className='hs-accordion-group mt-8 max-w-[1000px] mx-auto'>
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

export default FaqWIthTitle;
