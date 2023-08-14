import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.PageHeadingBannerSlice} PageHeadingBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageHeadingBannerSlice>} PageHeadingBannerProps
 * @param {PageHeadingBannerProps}
 */
const PageHeadingBanner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className='pt-20 text-center bg-center bg-no-repeat bg-cover md:pt-0 md:mt-36 '
        // style={{ backgroundImage: 'url(/images/gray-pattern-trans.png) ' }}
      >
        <div className='py-0 pt-4 '>
          <RichText
            field={slice.primary.title}
            heading1={'text-primary italic font-bold '}
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeadingBanner;
