import React from 'react';
import CustomImg from './CustomImg';
import Button from './Button';
import ArrowDown from '@/icons/arrow-down';

const ColWithImage = () => {
  return (
    <section>
      <div className='container grid !my-5 !mt-20 !mb-20 md:grid-cols-2 md:gap-40 gap-10 place-content-center items-center'>
        <div>
          <h1>Why We Win</h1>
          <h2 className='my-3 text-primary'>Clear & Compelling Storylines</h2>
          <p>
            We distill complex commercial disputes into clear and compelling
            storylines, tailoring our presentation to the audience, whether it
            be a jury, judge, or arbitrator. These skills are crucial in
            commercial litigation matters.
          </p>
          <Button text='Meet the Team' color='black' className={'mt-10'}>
            <ArrowDown fill='black' />
          </Button>
        </div>
        <div className='max-w-[600px]'>
          <CustomImg />
        </div>
      </div>
    </section>
  );
};

export default ColWithImage;
