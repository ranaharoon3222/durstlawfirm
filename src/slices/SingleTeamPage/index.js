import BannerV2 from '@/commons/BannerV2';
import BigButton from '@/commons/BigButton';
import Button from '@/commons/Button';
import RichText from '@/commons/RichText';
import ArrowDown from '@/icons/arrow-down';
import Phone from '@/icons/phone';
import PlainArrow from '@/icons/plain-arrow';

const SingleTeamPage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BannerV2
        title={
          <RichText field={slice.primary.title} heading1={'-mt-5 -mb-5'} />
        }
        subTitle={slice.primary.position}
        img={slice.primary.image.url}
      >
        <div className='flex flex-wrap justify-center mt-0 md:justify-normal md:flex-nowrap '>
          <Button
            text={slice.primary.call_text}
            link={slice.primary.cal_link.url}
            className='mb-4 md:mr-6 '
            variant='outline'
            color={'red'}
          >
            <Phone fill='red' />
          </Button>
          <Button
            text={slice.primary.email_text}
            link={slice.primary.email_link.url}
            variant='outline'
            color={'black'}
            className='mb-4 '
          >
            <ArrowDown fill='black' />
          </Button>
        </div>
        <RichText field={slice.primary.body_text} />
      </BannerV2>

      <div className='container'>
        <div className='mt-7'>
          <h1>Services:</h1>

          <div
            className='grid mt-5 gap-7 '
            style={{
              'grid-template-columns':
                'repeat(auto-fit, minmax(max(130px, 310px), 1fr))',
            }}
          >
            {slice.items.map((item, i) => (
              <BigButton
                key={i}
                variant='primary'
                link={item.service_link.url}
                text={item.service_text}
                className={`mb-5 !w-full `}
              >
                <PlainArrow />
              </BigButton>
            ))}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='grid gap-10 mt-16 mb-10 md:grid-cols-2'>
          <div className=''>
            <h2>Education</h2>

            <RichText field={slice.primary.education} />

            <div className='mt-7'>
              <h2>Bar Admissions</h2>
              <RichText field={slice.primary.admissions} />
            </div>
          </div>

          <div>
            <div className=''>
              <h2>Leadership & Professional Affiliations</h2>
              <RichText field={slice.primary.leadership} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTeamPage;
