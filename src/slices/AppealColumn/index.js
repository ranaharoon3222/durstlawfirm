import Img from '@/commons/Image';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.AppealColumnSlice} AppealColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AppealColumnSlice>} AppealColumnProps
 * @param {AppealColumnProps}
 */
const AppealColumn = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='bg-[#eeecec] py-16'>
        <div className='container'>
          <div className='grid items-center gap-10 md:grid-cols-2'>
            <div>
              <Img
                src={'./images/orang-shado-pic.svg'}
                className={'mb-5 max-w-[120px]'}
              />

              <RichText field={slice.primary.title} strong={'text-primary'} />

              <RichText field={slice.primary.text} />
            </div>

            <div>
              <div className='p-5 bg-white/60 md:p-10'>
                <RichText
                  field={slice.primary.column_2_title}
                  strong={'text-primary'}
                />
                <span className='bg-primary h-[3px] w-24 block mb-7'> </span>

                <RichText
                  field={slice.primary.column_2_text}
                  listItem={'mb-3'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppealColumn;
