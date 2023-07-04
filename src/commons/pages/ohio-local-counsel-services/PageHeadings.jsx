import Paragraph from '@/commons/Paragraph';
import React from 'react';

const PageHeadings = () => {
  return (
    <div className='container '>
      <div className='my-9'>
        <h1 className='md:text-[2rem]'>
          <span className='text-primary'> Frequently Asked Questions </span>{' '}
          Related to Ohio Local Counsel Services
        </h1>
        <Paragraph>
          Pro hac vice admission has existed since at least the year 1735, when
          it was employed in the free speech case of Crown v. Peter Zenger. With
          mass tort litigation and MDL on the rise in Ohio’s federal district
          courts, pro hac vice admission is increasingly used by subject matter
          experts who wish to practice outside their home jurisdictions. Pro hac
          vice admission is also commonly used in single-plaintiff Ohio truck
          accident, products liability, and other personal injury cases, as well
          as in Ohio commercial litigation matters in which out-of-state
          companies prefer to use their home-state counsel.
        </Paragraph>
      </div>
    </div>
  );
};

export default PageHeadings;
