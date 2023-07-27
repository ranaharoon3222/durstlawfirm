import BannerV2 from '@/commons/BannerV2';
import Button from '@/commons/Button';
import RichText from '@/commons/RichText';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';

/**
 * @typedef {import("@prismicio/client").Content.AppealSectionSlice} AppealSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AppealSectionSlice>} AppealSectionProps
 * @param {AppealSectionProps}
 */
const AppealSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BannerV2
        title={<RichText field={slice.primary.title} />}
        subTitle={slice.primary.subtitle}
        img={slice.primary.image.url}
      >
        <RichText field={slice.primary.text} />
        <div className='flex flex-wrap justify-center mt-10 md:justify-normal md:flex-nowrap '>
          <Button
            text='Call Us Today '
            link='tel:513-621-4999'
            className='mb-4 md:mr-6 '
            variant='outline'
            color={'red'}
          >
            <Phone fill='red' />
          </Button>
          <Button
            text='Send A Message'
            link='/contact'
            variant='outline'
            color={'black'}
            className='mb-4 '
          >
            <ArrowDown fill='black' />
          </Button>
        </div>
      </BannerV2>
    </section>
  );
};

export default AppealSection;
