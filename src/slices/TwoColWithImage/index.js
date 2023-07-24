import Button from '@/commons/Button';
import RichText from '@/commons/RichText';
import ColWithImage from '@/commons/col-with-image';
import ArrowDown from '@/icons/arrow-down';

/**
 * @typedef {import("@prismicio/client").Content.TwoColWithImageSlice} TwoColWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TwoColWithImageSlice>} TwoColWithImageProps
 * @param {TwoColWithImageProps}
 */
const TwoColWithImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ColWithImage
        img={slice.primary.image.url}
        title={slice.primary.title}
        subTItle={slice.primary.subtitle}
      >
        <RichText field={slice.primary.text} />
        {slice.primary.button_text && (
          <Button
            text={slice.primary.button_text}
            link={slice.primary.button_link?.url}
            color='black'
            className={'mt-10'}
          >
            <ArrowDown fill='black' />
          </Button>
        )}
      </ColWithImage>
    </section>
  );
};

export default TwoColWithImage;
