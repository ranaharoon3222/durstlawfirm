/**
 * @typedef {import("@prismicio/client").Content.TickListSlice} TickListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TickListSlice>} TickListProps
 * @param {TickListProps}
 */
import RichText from '@/commons/RichText';
import TickBox from '@/commons/TickBox';

const TickList = ({ slice, context }) => {
  console.log(context, 'settings.data');

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='my-10'>
        <div className='container'>
          <div className='flex flex-wrap justify-center md:text-left text-center md:flex-nowrap items-center max-w-[1000px] mb-10'>
            <img src={context.logo?.url} className='max-w-[130px]' alt='' />
            <h1 className=''>{slice.primary.title}</h1>
          </div>
        </div>

        <section className='container grid gap-8 md:grid-cols-5 '>
          {slice.items.map((item, i) => (
            <TickBox
              key={i}
              text={<RichText field={item.text} paragraphClassName='!mt-0' />}
            />
          ))}
        </section>
      </div>{' '}
    </section>
  );
};

export default TickList;
