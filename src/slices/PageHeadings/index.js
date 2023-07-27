import Img from '@/commons/Image';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.ResultsSlice} ResultsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResultsSlice>} ResultsProps
 * @param {ResultsProps}
 */
const Results = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className=' pt-32 max-w-[800px] mx-auto'>
        <div className='container text-center'>
          <Img
            src={slice.primary.icon.url}
            className={'max-w-[60px] mx-auto'}
          />
          <RichText field={slice.primary.title} />

          <div className='pt-5'>
            <RichText field={slice.primary.text} />
            <div className='flex justify-center'>
              {slice.items.map((item, index) => (
                <a
                  key={index}
                  href={`${item.filter_link.url}`}
                  className='mr-3 italic font-semibold underline text-primary'
                >
                  {item.filter_title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Results;
