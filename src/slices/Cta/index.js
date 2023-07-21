import FooterCta from '@/commons/FooterCta';

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
      <FooterCta image={'/images/last-back-img.jpg'}>
        <h1 className='font-medium text-center md:text-left text-white md:text-[3vw]'>
          Contact The Durst Law Firm
          <span className='text-primary'> Today. </span>
        </h1>
      </FooterCta>{' '}
    </section>
  );
};

export default Cta;
