import ImageComponent from '@/commons/Image';

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */
const Image = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='block mx-auto max-w-[900px] w-[90%] text-center my-10'>
        <ImageComponent
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
          className={'rounded-md'}
        />
      </div>
    </section>
  );
};

export default Image;
