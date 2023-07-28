import Button from '@/commons/Button';
import CustomImg from '@/commons/CustomImg';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.TeamSlice} TeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSlice>} TeamProps
 * @param {TeamProps}
 */
const Team = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='container'>
        <div className='grid gap-10 pb-16 text-center pt-36 md:gap-20 md:grid-cols-2'>
          {slice.items.map((item, i) => (
            <div className='mt-4'>
              <CustomImg img={item.image.url} />
              <h1 className='mt-8'> {item.title} </h1>
              <p className='mt-2 italic text-primary'> {item.position} </p>
              <RichText field={item.text} />
              {item.button_text && (
                <Button
                  variant='primary-bg'
                  text={item.button_text}
                  link={item.button_link.url}
                  className={'my-5 mx-auto'}
                />
              )}
            </div>
          ))}
        </div>
      </div>{' '}
    </section>
  );
};

export default Team;
