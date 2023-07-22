import FooterCta from '@/commons/FooterCta';
import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.CtaSlice} CtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaSlice>} CtaProps
 * @param {CtaProps}
 */
const Cta = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FooterCta image={slice.primary.image.url}>
        <h1 className='font-medium text-center md:text-left text-white md:text-[3vw]'>
          <RichText field={slice.primary.title} />
        </h1>
      </FooterCta>{' '}
    </section>
  );
};

export default Cta;
