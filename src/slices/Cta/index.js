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
        <RichText
          field={slice.primary.title}
          heading1={
            'font-medium text-center md:text-left text-white md:text-[3vw]'
          }
          heading2={`${'text-left md:text-left font-normal text-white md:text-[2vw] '}   `}
          strong={'text-primary'}
          paragraphClassName='text-white'
        />
      </FooterCta>{' '}
    </section>
  );
};

export default Cta;
