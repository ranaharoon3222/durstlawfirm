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
        className='text-center bg-center bg-no-repeat bg-cover mt-28'
        style={{ backgroundImage: 'url(./images/gray-pattern-trans.png) ' }}
      >
        <div className='py-16'>
          <RichText field={slice.primary.title} heading1={'text-white '} />
        </div>
      </div>
    </section>
  );
};

export default PageHeadingBanner;
