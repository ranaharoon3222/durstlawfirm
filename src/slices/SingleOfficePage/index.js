import RichText from '@/commons/RichText';

/**
 * @typedef {import("@prismicio/client").Content.SingleOfficePageSlice} SingleOfficePageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SingleOfficePageSlice>} SingleOfficePageProps
 * @param {SingleOfficePageProps}
 */
const SingleOfficePage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='md:mt-24'>
        <div className='grid items-center gap-10 md:grid-cols-2 md:gap-20'>
          <div>
            <img src={slice.primary.image.url} alt='' />
          </div>

          <div className='px-5 py-5'>
            <h1>{slice.primary.title}</h1>
            <RichText field={slice.primary.address} />
            <RichText field={slice.primary.phone} />
            <a
              href={slice.primary.direction.url}
              className='block w-8 h-8 mt-5'
            >
              <svg
                version='1.1'
                id='icons'
                xmlns='http://www.w3.org/2000/svg'
                x={0}
                y={0}
                viewBox='0 0 128 128'
                style={{ enableBackground: 'new 0 0 128 128' }}
                xmlSpace='preserve'
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.st0,.st1{display:none;fill:#191919}.st1,.st4{fill-rule:evenodd;clip-rule:evenodd}.st4,.st5{display:inline;fill:#191919}',
                  }}
                />
                <g id='row1'>
                  <path
                    id='nav:4'
                    d='M64 1C38.8 1 18.3 21.2 18.3 46S64 127 64 127s45.7-56.2 45.7-81S89.2 1 64 1zm0 73.9c-16.6 0-30-13.2-30-29.5C34 29 47.4 15.8 64 15.8S94 29 94 45.3 80.6 74.9 64 74.9z'
                    style={{
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      fill: '#191919',
                    }}
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='my-10'>
          <RichText field={slice.primary.body_text} list={'ml-5 my-8'} />
        </div>
      </div>
    </section>
  );
};

export default SingleOfficePage;
