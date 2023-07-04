import Img from '@/commons/Image';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const ResultPageHeading = () => {
  return (
    <section className=' pt-32 max-w-[800px] mx-auto'>
      <div className='container text-center'>
        <Img
          src={'./images/scales-orange.png'}
          className={'max-w-[60px] mx-auto'}
        />
        <h1 className='text-primary'>Case Results</h1>
        <Paragraph>
          The Durst Law Firm has achieved phenomenal results in cases involving
          transportation accidents, personal injury, and commercial litigation,
          as both lead counsel and local counsel.
        </Paragraph>

        <div className='pt-5'>
          <h3>Filter by area</h3>
          <div className='flex justify-center'>
            <a
              href='#personalinjury'
              className='text-primary font-semibold italic underline mr-3'
            >
              Transportation & Personal Injury
            </a>
            <a
              href='#commerciallitigation'
              className='text-primary font-semibold italic underline mr-3'
            >
              Commercial Litigation
            </a>
            <a
              href='#appellate'
              className='text-primary font-semibold italic underline '
            >
              Appellate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPageHeading;
